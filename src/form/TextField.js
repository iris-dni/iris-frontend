import React from 'react';
import settings from 'settings';
import domOnlyProps from 'form/domOnlyProps';

export default ({ config, helper }) => {
  return (
    <div>
      <label htmlFor={config.name}>
        {settings.petitionFields[config.name].label}
      </label>
      <em>
        {settings.petitionFields[config.name].hint}
      </em>
      <div>
        <config.type
          id={config.name}
          type='text'
          placeholder={settings.petitionFields[config.name].placeholder}
          // domOnlyProps required with latest react and redux-form 5.x
          // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
          {...domOnlyProps(helper)}
        />
        {helper.touched && helper.error && <strong>{helper.error}</strong>}
      </div>
    </div>
  );
};
