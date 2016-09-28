import React from 'react';
import isLink from 'helpers/isLink';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import styles from './petition-links-field.scss';

const PetitionLinksField = React.createClass({
  getInitialState: () => ({ value: '' }),

  componentWillMount () {
    const { helper } = this.props;
    let links = helper.value;

    links = wrapPetitionLinks(links);
    helper.onChange(links);
  },

  handleChange (e) { this.setState({ value: e.target.value }); },

  handleLinkAdded (e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      const { value } = this.state;
      const { helper } = this.props;
      let links = helper.value;

      if (value) {
        // @TODO find a way to display errors on the input…
        if (!isLink(value)) {
          return console.warn('This is not a valid link.');
        } else if (links.length >= 3) {
          return console.warn('You can’t add more than 3 links.');
        } else if (links.filter(link => (value === link.url)).length) {
          return console.warn('Please add unique links.');
        }

        links.push({ url: value });
        helper.onChange(links); // Update redux-form value
        this.setState({ value: '' }); // Clear input value

        // Fetch open graph data for the last link
        this.props.fetchOpenGraph(value).then(({ openGraph }) => {
          const newValue = { url: value, og: openGraph };
          const lastLinkIndex = links.length - 1;

          links[lastLinkIndex] = newValue;
          helper.onChange(links);
          // For some reason, redux-form onChange doesn’t trigger a
          // re-render, only on the create petition page (not on edit)…
          // We force the component to re-render.
          this.forceUpdate();
        });
      }
    }
  },

  handleLinkRemoved (index) {
    let links = this.props.helper.value;

    links.splice(index, 1);

    this.props.helper.onChange(links);
    // For some reason, redux-form onChange doesn’t trigger a
    // re-render, only on the create petition page (not on edit)…
    // We force the component to re-render.
    this.forceUpdate();
  },

  render () {
    const { value } = this.state;
    const { config, helper } = this.props;
    const links = helper.value;

    return (
      <div>
        <div>
          {links.length > 0 && links.map((link, index) => (
            <div key={index}>
              <p>{link.url}</p>
              {link.og &&
                <p>{link.og.description}</p>
              }
              <button
                type='button'
                onClick={() => this.handleLinkRemoved(index)}>
                remove
              </button>
            </div>
          ))}
        </div>

        <input
          className={`${styles.input} ${styles.valid}`}
          id={config.name}
          {...config.html}
          value={value}
          onChange={this.handleChange}
          onKeyPress={this.handleLinkAdded}
          onBlur={this.handleLinkAdded}
        />
      </div>
    );
  }
});

export default PetitionLinksField;
