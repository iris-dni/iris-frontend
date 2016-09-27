import React from 'react';
import fieldIsInvalid from 'form/fieldIsInvalid';
import styles from './petition-links-field.scss';

const PetitionLinksField = React.createClass({
  getInitialState: () => ({
    value: '',
    links: []
  }),

  getClassName (element, error) {
    return [
      styles[element || 'input'],
      styles[error ? 'invalid' : 'valid']
    ].join(' ');
  },

  handleChange (e) {
    // @TODO ACTIONS
    this.setState({ value: e.target.value });
  },

  handleLinkAdded (e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      let { value, links } = this.state;

      // @TODO validation is URL? + find a way to display error on the input
      if (links.length < 3) {
        const savedValue = { url: value };

        // Fetch open graph data for the given link
        this.props.fetchOpenGraph(value).then((a) => {
          // @TODO find a way to display error on the input

          // Update redux-form value
          this.props.helper.addField(savedValue);

          // Update state with new links and reset input value
          // @TODO ACTIONS
          links.push(savedValue);
          this.setState({ value: '', links });
        }).catch((e) => {
          // @TODO find a way to display error on the input
          console.warn(e);

          // Update redux-form value
          this.props.helper.addField(savedValue);

          // Update state with new links and reset input value
          // @TODO ACTIONS
          links.push(savedValue);
          this.setState({ value: '', links });
        });
      } else {
        // @TODO find a way to display error on the input
        console.warn('You can’t add more than 3 links.');
      }
    }
  },

  handleLinkRemoved (index) {
    let { links } = this.state;
    links.splice(index, 1);

    this.props.helper.removeField(index);
    this.setState({ links });
  },

  render () {
    const { helper, config } = this.props;
    const { value, links } = this.state;

    return (
      <div>
        <div>
          {links.length > 0 && links.map((link, index) => (
            <div key={index}>
              <span>{link.url}</span>
              <button
                type='button'
                onClick={() => this.handleLinkRemoved(index)}>
                remove
              </button>
            </div>
          ))}
        </div>

        <input
          className={this.getClassName('input', fieldIsInvalid(helper))}
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
