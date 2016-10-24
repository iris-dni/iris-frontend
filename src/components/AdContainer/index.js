import React from 'react';
import settings from 'settings';

const AdContainer = ({currentCity = {}, type}) => (
  <div
    id={`ad-slot--${type}`}
    className={`ad-slot ad-slot--${type}`}
    data-city-tags={`${currentCity && currentCity.tags && currentCity.tags.join(',') || ''}`}
    data-label={settings.adZoneLabel}
    /* The idea here is to have your ad service use the `data-label`
       and apply it before the injected iFrame. Then this div can be
       :empty and not display until it actually has an ad.
    */
  />
);

export default AdContainer;
