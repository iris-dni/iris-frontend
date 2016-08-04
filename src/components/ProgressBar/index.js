import React from 'react';
import styles from './progress-bar.scss';

const ProgressBar = React.createClass({
  componentDidMount () {
    if (this.props.animate) {
      setTimeout(() => this.setState({
        loading: false }),
      150);
    }
  },

  getInitialState: () => ({
    loading: true
  }),

  render () {
    const appliedClass = this.state.loading
      ? styles.loading
      : styles.finished;

    return (
      <span aria-hidden className={styles.root}>
        <span
          className={appliedClass}
          style={{ width: `${this.props.percentage}%` }}
        />
      </span>
    );
  }
});

export default ProgressBar;
