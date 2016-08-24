import React from 'react';
import IconBullet from 'components/IconBullet';

export default ({ error, valid }) => (
  <div>
    {error &&
      <IconBullet
        id={'Close'}
        modifier={'error'}
      />
    }
    {valid &&
      <IconBullet
        id={'Checkmark'}
        modifier={'success'}
      />
    }
  </div>
);
