import React from 'react';
import domOnlyProps from 'form/domOnlyProps';
import FormLabel from 'components/FormLabel';
import FormError from 'components/FormError';
import IconBullet from 'components/IconBullet';
import styles from './text-field.scss';

const getClassname = (element, error) => {
  return [
    styles[element || 'input'],
    styles[error ? 'invalid' : 'valid']
  ].join(' ');
};

export default ({ config, helper }) => {
  const hasError = helper.touched && helper.error;
  const isValid = helper.touched && !helper.error;

  return (
    <div className={styles.root}>
      <FormLabel
        fieldId={config.name}
        label={config.label}
        hint={config.hint}
      />
      <div className={styles.wrapper}>
        <config.element
          className={getClassname(config.element, hasError)}
          id={config.name}
          // pass props from config e.g. type, placeholder, maxlength
          {...config.html}
          // domOnlyProps required with latest react and redux-form 5.x
          // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
          {...domOnlyProps(helper)}
        />
        {hasError &&
          <FormError text={helper.error} />
        }
        <div className={styles.icon}>
          {hasError &&
            <IconBullet
              id={'X'}
              modifier={'error'}
            />
          }
          {isValid &&
            <IconBullet
              id={'Checkmark'}
              modifier={'success'}
            />
          }
        </div>
      </div>
    </div>
  );
};
