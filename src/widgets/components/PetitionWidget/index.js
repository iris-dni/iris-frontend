import React from 'react';
import Postmate from 'postmate';
import { debounce } from 'lodash/function';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
import ImageContainer from 'components/ImageContainer';
import PetitionTags from 'components/PetitionTags';
import PetitionWidgetByline from 'widgets/components/PetitionWidgetByline';
import PetitionWidgetTitle from 'widgets/components/PetitionWidgetTitle';
import PetitionWidgetProgress from 'widgets/components/PetitionWidgetProgress';
import PetitionWidgetStats from 'widgets/components/PetitionWidgetStats';
import PetitionWidgetSupportButton from 'widgets/components/PetitionWidgetSupportButton';
import getWidgetHeight from 'widgets/helpers/getWidgetHeight';

const PetitionWidget = React.createClass({

  emitWidgetSize (handshake) {
    handshake.then(parent => {
      parent.emit('resize');
    });
  },

  componentDidMount () {
    const handshake = new Postmate.Model({
      height: () => getWidgetHeight(this._widget)
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
    return (
      <article
        ref={(c) => (this._widget = c)}
        className={styles.root}>
        {this.props.image && this.props.image.src &&
          <div className={styles.upper}>
            <ImageContainer
              {...this.props.image}
              attrs={{ w: 800, h: 400 }}
              srcSet={[300, 600, 800, 1200, 1600]}
              sizes={'(min-width: 800px) 800px, 100vw'}
            />
          </div>
        }
        <div className={styles.content}>
          <div className={styles.tags}>
            <PetitionTags {...this.props.tags} isTeaser />
          </div>
          <PetitionWidgetByline text={this.props.byline} />
          <PetitionWidgetTitle
            title={this.props.title}
            link={this.props.link}
          />
          <div className={styles.info}>
            <PetitionWidgetProgress {...this.props.progress} />
            <PetitionWidgetStats {...this.props.stats} />
          </div>
          <PetitionWidgetSupportButton link={this.props.link} />
          <WidgetBranding />
        </div>
      </article>
    );
  }
});

export default PetitionWidget;
