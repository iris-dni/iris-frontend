import React from 'react';
import domOnlyProps from 'form/domOnlyProps';

export default ({ config, helper }) => {
  return (
    <div>
      <label htmlFor={config.name}>{config.label}</label>
      <em>{config.hint}</em>
      <div>
        <config.element
          id={config.name}
          // pass props from config e.g. type, placeholder, maxlength
          {...config.html}
          // domOnlyProps required with latest react and redux-form 5.x
          // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
          {...domOnlyProps(helper)}
        />
        {helper.touched && helper.error && <strong>{helper.error}</strong>}
      </div>
    </div>
  );
};
