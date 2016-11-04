import React from 'react';
import settings from 'settings';

const AdSlot = ({ tags, type }) => (
  <div
    id={`ad-slot--${type}`}
    className={`ad-slot ad-slot--${type}`}
    data-ad-tags={tags}
    data-ad-label={settings.adZoneLabel}
    /* The idea here is to have your ad service use the `data-label`
       and apply it before the injected iFrame. Then this div can be
       :empty and not display until it actually has an ad.
    */
  />
);

export default AdSlot;
