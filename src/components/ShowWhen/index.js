import React from 'react';
import Rezponsive from 'rezponsive';
import {
  mediaQueries,
  serverMediaQueries
} from 'helpers/getMediaQueries';

const AddMQs = (WrappedComponent) => (props) => (
  <WrappedComponent
    {...props}
    mq={mediaQueries}
    serverMedia={serverMediaQueries[props.when || 'medium']}
  />
);

const Loading = ({ children, currentMedia, when }) => (
  currentMedia && currentMedia[when]
    ? children
    : <div />
);

export default AddMQs(Rezponsive(Loading));
