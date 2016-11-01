import React from 'react';
import Postmate from 'postmate';
import { debounce } from 'lodash/function';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
import ImageContainer from 'components/ImageContainer';
import PetitionWidgetByline from 'widgets/components/PetitionWidgetByline';
import PetitionWidgetTitle from 'widgets/components/PetitionWidgetTitle';
import PetitionWidgetProgress from 'widgets/components/PetitionWidgetProgress';
import PetitionWidgetStats from 'widgets/components/PetitionWidgetStats';
import PetitionWidgetSupportButton from 'widgets/components/PetitionWidgetSupportButton';

const PetitionWidget = React.createClass({

  emitWidgetSize (handshake) {
    handshake.then(parent => {
      parent.emit('resize');
    });
  },

  componentDidMount () {
    const handshake = new Postmate.Model({
      height: () => this._widget.scrollHeight
    });

    this.emitWidgetSizeRef = debounce(
      this.emitWidgetSize.bind(this, handshake),
      250
    );
    window.addEventListener('resize', this.emitWidgetSizeRef);

    this.emitWidgetSize(handshake);
  },

  componentWillUnmount () {
    window.removeEventListener('resize', this.emitWidgetSizeRef);
  },

  render () {
    const {
      id,
      title,
      link,
      byline,
      image,
      info,
      stats,
      progress
    } = this.props;

    return (
      <article
        ref={(c) => (this._widget = c)}
        className={styles.root}>
        {image &&
          <div className={styles.upper}>
            <ImageContainer
              {...image}
              attrs={{ w: 800, h: 400 }}
            />
          </div>
        }
        <div className={styles.content}>
          <PetitionWidgetByline text={byline} />
          <PetitionWidgetTitle
            title={title}
            link={link}
          />
          <div className={styles.info}>
            <PetitionWidgetProgress {...progress} />
            <PetitionWidgetStats {...stats} />
          </div>
          <PetitionWidgetSupportButton link={link} />
          <WidgetBranding />
        </div>
      </article>
    );
  }
});

export default PetitionWidget;
