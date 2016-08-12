import React from 'react';
import styles from './petitionmetric.scss';
import CircleProgressBar from 'components/CircleProgressBar';
import Icon from 'components/Icon';

const PetitionMetric = React.createClass({

  render () {
    let { icon, figure, caption, percentage } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.progress}>
          <CircleProgressBar percentage={percentage} size='small'>
            <Icon id={icon} size='small' />
          </CircleProgressBar>
        </div>
        <dl className={styles.text}>
          <dt className={styles.caption}>
            {caption}
          </dt>
          <dd className={styles.figure}>
            {figure}
          </dd>
        </dl>
      </div>
    );
  }
});

export default PetitionMetric;
