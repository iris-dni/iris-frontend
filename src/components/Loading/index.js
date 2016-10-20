import React from 'react';
import CircleProgressBar from 'components/CircleProgressBar';
import styles from './loading.scss';

const Loading = React.createClass({
  render () {
    const { isLoading, children, onServer } = this.props;

    if (onServer || (__CLIENT__ && isLoading) || !children) {
      return (
        <div
          className={styles.root}
          aria-busy='true'>
          <CircleProgressBar isSpinner />
        </div>
      );
    }

    return children;
  }
});

export default Loading;
