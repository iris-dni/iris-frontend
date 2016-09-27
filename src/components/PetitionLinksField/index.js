import React from 'react';
import isLink from 'helpers/isLink';
import styles from './petition-links-field.scss';

const PetitionLinksField = React.createClass({
  getInitialState: () => ({ value: '', links: [] }),

  componentWillMount () {
    this.setState({ links: this.props.petitionLinks });
  },

  handleChange (e) {
    this.setState({ value: e.target.value });
  },

  componentWillUpdate (nextProps) {
    const { helper } = nextProps;

    if (helper.length !== this.props.helper.length) {
      const { links } = this.state;
      const lastLinkIndex = helper.length - 1;
      const lastLink = helper[lastLinkIndex];
      const value = lastLink.value.data
        ? lastLink.value.data
        : JSON.parse(lastLink.value);

      // Fetch open graph data for the last link
      this.props.fetchOpenGraph(value.url).then(({ openGraph }) => {
        const newValue = { url: value.url, og: openGraph };

        links[lastLinkIndex] = newValue;
        helper[lastLinkIndex].onChange(JSON.stringify(newValue));

        this.setState({ links });
      });
    }
  },

  handleLinkAdded (e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      let { value, links } = this.state;
      const { helper } = this.props;

      if (value) {
        if (links.filter(link => (value === link.url)).length) {
          // @TODO find a way to display error on the input
          console.warn('Please add different links.');
        } else if (links.length < 3) {
          if (isLink(value)) {
            const savedValue = { url: value };

            // Update redux-form value
            helper.addField(JSON.stringify(savedValue));

            // Update state with new links and reset input value
            links.push(savedValue);
            this.setState({ value: '', links });
          } else {
            // @TODO find a way to display error on the input
            console.warn('Not a link.');
          }
        } else {
          // @TODO find a way to display error on the input
          console.warn('You can’t add more than 3 links.');
        }
      }
    }
  },

  handleLinkRemoved (index) {
    let { links } = this.state;
    links.splice(index, 1);

    this.setState({ links });
    this.props.helper.removeField(index);
  },

  render () {
    const { value, links } = this.state;
    const { config } = this.props;

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
