import React from 'react';
import settings from 'settings';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getLinkInputErrors from 'form/getLinkInputErrors';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import styles from './petition-links-field.scss';

const PetitionLinksField = React.createClass({
  getClassname (element, error) {
    return [
      styles[element || 'input'],
      styles[error ? 'invalid' : 'valid']
    ].join(' ');
  },

  getInitialState: () => ({ value: '' }),

  componentWillMount () {
    const { helper } = this.props;
    const links = wrapPetitionLinks(helper.value);
    helper.onChange(links);
  },

  handleChange (e) { this.setState({ value: e.target.value }); },

  handleLinkAdded (e) {
    const { helper, config } = this.props;
    helper.touched = true;
    helper.onBlur();

    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      const { value } = this.state;
      let links = helper.value;

      if (value) {
        // Specific validation for the link field.
        const error = getLinkInputErrors(value, links, config);

        if (error) {
          helper.error = error;
          return;
        }

        helper.error = false;

        links.push({ url: value });
        helper.onChange(links); // Update redux-form value
        this.setState({ value: '' }); // Clear input value

        // Fetch open graph data for the last link
        this.props.fetchOpenGraph(value).then(({ openGraph }) => {
          const newValue = { url: value, og: openGraph };
          const lastLinkIndex = links.length - 1;

          links[lastLinkIndex] = newValue;
          helper.onChange(links);
        });
      }
    }
  },

  handleLinkRemoved (index, url) {
    let links = this.props.helper.value;
    this.props.removeOpenGraph(url);
    links.splice(index, 1);
    this.props.helper.onChange(links);
  },

  render () {
    const { value } = this.state;
    const { config, helper } = this.props;
    const links = this.props.openGraph.links || [];

    return (
      <div>
        {/* URL TEASER */}
        <div>
          {links.length > 0 && links.map((link, index) => (
            <div key={index}>
              <p>{link.url}</p>
              {link.og &&
                <p>{link.og.description}</p>
              }
              <button
                type='button'
                onClick={() => this.handleLinkRemoved(index, link.url)}>
                remove
              </button>
            </div>
          ))}
        </div>
        {/* END URL TEASER */}

        {links.length < settings.petitionFields.links.maxLinks &&
          <input
            className={this.getClassname('input', fieldIsInvalid(helper))}
            id={config.name}
            {...config.html}
            {...domOnlyProps(helper)}
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleLinkAdded}
            onBlur={this.handleLinkAdded}
          />
        }
      </div>
    );
  }
});

export default PetitionLinksField;
