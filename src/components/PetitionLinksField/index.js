import React from 'react';
import fieldIsInvalid from 'form/fieldIsInvalid';
import isLink from 'helpers/isLink';
import styles from './petition-links-field.scss';

const PetitionLinksField = React.createClass({
  getInitialState: () => ({
    // @TODO MOVE TO REDUCER
    value: '',
    links: []
  }),

  componentWillMount () {
    // @TODO MOVE TO CONTAINER?
    this.setState({
      links: this.props.petitionLinks.map(link => ({ url: link.data.url }))
    });
  },

  getClassName (element, error) {
    return [
      styles[element || 'input'],
      styles[error ? 'invalid' : 'valid']
    ].join(' ');
  },

  handleChange (e) {
    // @TODO ACTION OR LEAVE AS SETSTATE
    this.setState({ value: e.target.value });
  },

  handleLinkAdded (e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      let { value, links } = this.state;
      const { helper, fetchOpenGraph } = this.props;

      if (value) {
        if (links.length < 3) {
          if (isLink(value)) {
            const savedValue = { url: value };

            // Update redux-form value
            helper.addField(value);

            // Update state with new links and reset input value
            // @TODO ACTIONS
            links.push(savedValue);
            this.setState({ value: '', links });

            // Fetch open graph data for the given link
            fetchOpenGraph(value)
              .then(({ openGraph }) => {
                // @TODO on success, update the teaser and add og data to the link
                // in the state
                console.log('Finished fetching OG data');
              });
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
