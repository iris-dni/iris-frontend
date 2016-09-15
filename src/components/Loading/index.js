import React from 'react';
import CircleProgressBar from 'components/CircleProgressBar';
import styles from './loading.scss';

const Loading = React.createClass({

  getInitialState () {
    return { percentage: 75 };
  },

  tick () {
    this.setState({ percentage: this.state.percentage + 125 });
  },

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount () {
    clearInterval(this.interval);
  },

  render () {
    const { isLoading, children, onServer } = this.props;

    if (onServer || (__CLIENT__ && isLoading) || !children) {
      return (
        <div
          className={styles.root}
          aria-busy='true'>
          <CircleProgressBar
            percentage={this.state.percentage}
            animated
          />
        </div>
      );
    }

    return children;
  }
});

export default Loading;
