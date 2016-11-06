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
    const {
      helper, config, formId,
      touchField, revalidateForm
    } = this.props;
    const { name } = config;

    // Clearer naming
    const fieldId = name;

    // Get field value and sanitise
    const value = this.state.value.trim();

    // Get links array
    const links = helper.value;

    // Set field as 'touched'
    touchField(formId, fieldId);

    // Key-presses we are interested in for validation
    if (e.key === 'Enter' || e.type === 'blur') {
      // Disable form submitting when pressing ENTER
      e.preventDefault();

      if (value) {
        // Remove any protocol from the URL for testing validation
        const protocolFreeURL = stripProtocolFromURL(value);

        // Specific validation for the link field.
        const error = getLinkInputErrors(protocolFreeURL, links, config);

        if (error) {
          // Blur the field
          helper.onBlur();
          // Set error if given
          revalidateForm(formId, {
            [fieldId]: error
          });
        } else {
          // Clear input value
          this.setState({ value: '' });
          // Push the link to the array
          links.push({ url: protocolFreeURL });
          // Fetch open graph data for the last link
          this.props.fetchOpenGraph(value).then(({ openGraph }) => {
            // Add OG data to array item
            links[links.length - 1] = {
              url: value,
              og: openGraph
            };
            // Change form field
            helper.onChange(links);
          });
        }
      } else {
        revalidateForm(formId, { [fieldId]: false });
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
