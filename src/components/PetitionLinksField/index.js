import React from 'react';
import styles from './petition-links-field.scss';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getLinkInputErrors from 'form/getLinkInputErrors';
import getFieldClassname from 'form/getFieldClassname';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import RemovableItem from 'components/RemovableItem';
import ExternalTeaser from 'components/ExternalTeaser';
import FormValidation from 'components/FormValidation';

const PetitionLinksField = React.createClass({

  getInitialState: () => ({ value: '' }),

  componentWillMount () {
    const { helper } = this.props;
    const links = wrapPetitionLinks(helper.value);
    helper.onChange(links);
  },

  handleChange (e) {
    const { config, formId, revalidateForm } = this.props;

    this.setState({ value: e.target.value });

    // Remove error if field is empty
    if (!e.target.value) {
      revalidateForm(formId, { [config.name]: false });
    }
  },

  handleLinkAdded (e) {
    const {
      helper, config, formId,
      touchField, revalidateForm
    } = this.props;

    // Clearer naming
    const fieldId = config.name;

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
        // Specific validation for the link field.
        const error = getLinkInputErrors(value, links, config);

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
          links.push({ url: value });
          // Fetch open graph data for the last link
          this.props.fetchOpenGraph(value).then(({ openGraph }) => {
            // Add OG data to array item
            links[links.length - 1] = {
              url: value,
              og: openGraph
            };
            // Change form field
            helper.onChange(links);
            // Focus next field if maxLength reached
            if (links.length === config.maxItems) {
              const nextField = document.querySelector('input#title');
              nextField.focus();
            }
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
    const { value, loading } = this.state;
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
          <div className={styles.wrapper}>
            <input
              ref={'input'}
              className={getFieldClassname(
                styles, 'input', loading ? false : fieldIsInvalid(helper)
              )}
              id={config.name}
              {...config.html}
              {...domOnlyProps(helper)}
              value={value}
              onChange={this.handleChange}
              onKeyPress={this.handleLinkAdded}
              onBlur={this.handleLinkAdded}
            />
            {fieldIsInvalid(helper) &&
              <FormValidation config={config} helper={helper} />
            }
          </div>
        }
      </div>
    );
  }
});

export default PetitionLinksField;
