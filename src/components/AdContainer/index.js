import React from 'react';
import settings from 'settings';
import getClassNames from 'helpers/getClassNames';
import styles from './ad-container.scss';

const AdContainer = ({currentCity = {}, type}) => (
  <div
    id={`ad-slot--${type}`}
    className={getClassNames(styles, ['root', type])}
    data-city-tags={`${currentCity && currentCity.tags && currentCity.tags.join(',') || ''}`}
    data-label={settings.adZoneLabel}
    /* The idea here is to have your ad service use the `data-label`
       and apply it before the injected iFrame. Then this div can be
       :empty and not display until it actually has an ad.
    */
  />
);

export default AdContainer;
