import React from 'react';
import settings from 'settings';
import domOnlyProps from 'form/domOnlyProps';
import fieldIsInvalid from 'form/fieldIsInvalid';
import getLinkInputErrors from 'form/getLinkInputErrors';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';
import Icon from 'components/Icon';
import ExternalTeaser from 'components/ExternalTeaser';
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

      const value = this.state.value.trim();
      let links = helper.value;

      if (value) {
        // Remove any protocol from the URL. In the teaser, the URL will be
        // displayed without the protocol, and the link to it will be a relative
        // protocol URL.
        const PROTOCOL_REGEX = new RegExp(/^(https?:\/\/)/i);
        const protocolFreeURL = value.replace(PROTOCOL_REGEX, '').toLowerCase();

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
        <div className={styles['teasers-preview-wrapper']}>
          {links.length > 0 && links.map((link, index) => (
            <div key={index} className={styles['teaser-wrapper']}>
              <ExternalTeaser {...link} />

              <button
                className={styles['remove-link-button']}
                type='button'
                onClick={() => this.handleLinkRemoved(index, link.url)}
              >
                <Icon
                  size={'smaller'}
                  id={'Close'}
                  modifier={'invert'}
                />

                <span className={styles.hidden}>
                  {settings.petitionFields.links.removeLinkLabel}
                </span>
              </button>
            </div>
          ))}
        </div>

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
