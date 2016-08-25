import React from 'react';
import FormMessage from 'components/FormMessage';

export default ({ error, valid, message }) => (
  <div>
    {(error || valid) &&
      <FormMessage
        text={message}
        modifier={error ? 'error' : 'default'}
      />
    }
  </div>
);
