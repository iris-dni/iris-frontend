import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getLinkInputErrors from 'form/getLinkInputErrors';
import stripProtocolFromURL from 'helpers/stripProtocolFromURL';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import RemovableItem from 'components/RemovableItem';
import ExternalTeaser from 'components/ExternalTeaser';
import styles from './petition-links-field.scss';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

const PetitionLinksField = React.createClass({

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

      const value = this.state.value.trim();
      let links = helper.value;

      if (value) {
        // Remove any protocol from the URL. In the teaser, the URL will be
        // displayed without the protocol, and the link to it will be a relative
        // protocol URL.
        const protocolFreeURL = stripProtocolFromURL(value);

        // Specific validation for the link field.
        const error = getLinkInputErrors(protocolFreeURL, links, config);

        if (error) {
          helper.error = error;
          return;
        }

        helper.error = false;

        links.push({ url: protocolFreeURL });
        helper.onChange(links); // Update redux-form value
        this.setState({ value: '' }); // Clear input value

        // Fetch open graph data for the last link
        this.props.fetchOpenGraph(protocolFreeURL).then(({ openGraph }) => {
          const newValue = { url: protocolFreeURL, og: openGraph };
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
    const links = helper.value || [];

    return (
      <div>
        <ul className={styles.items}>
          {links.length > 0 && links.map((link, index) => (
            <li key={index} className={styles.item}>
              <RemovableItem action={() => this.handleLinkRemoved(index, link.url)}>
                <ExternalTeaser {...link} />
              </RemovableItem>
            </li>
          ))}
        </ul>

        {links.length < config.maxItems &&
          <input
            className={getClassname('input', fieldIsInvalid(helper))}
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
