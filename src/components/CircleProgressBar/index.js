import React from 'react';
import ReactDOM from 'react-dom';
import styles from './circleprogressbar.scss';
import settings from 'settings';
import ProgressBar from 'progressbar.js';

const CircleProgressBar = React.createClass({

  getDefaultProps: () => ({
    percentage: 0,
    animated: false,
    size: 'small',
    color: settings.colors.primary,
    trailColor: settings.colors.greyLite,
    aria: {}
  }),

  componentDidMount () {
    this.initProgressBar();
    if (this.props.percentage > 0) {
      this.updateProgressBar(this.props.percentage);
    }
  },

  componentDidUpdate (prevProps) {
    if (prevProps.percentage !== this.props.percentage) {
      this.updateProgressBar(this.props.percentage);
    }
  },

  componentWillUnmount () {
    this.progressBar.destroy();
  },

  initProgressBar () {
    const canvasElement = ReactDOM.findDOMNode(this.refs.canvas);
    const strokeWidth = this.props.size === 'small' ? 14 : 8;

    this.progressBar = new ProgressBar.Circle(canvasElement, {
      strokeWidth: strokeWidth,
      easing: 'easeInOut',
      duration: 800,
      color: this.props.color,
      trailColor: this.props.trailColor,
      trailWidth: strokeWidth,
      svgStyle: {
        width: '100%',
        display: 'block',
        strokeLinecap: 'round'
      }
    });
  },

  updateProgressBar (percentage) {
    const progress = percentage / 100;

    if (this.props.animated) {
      this.progressBar.animate(progress);
    } else {
      this.progressBar.set(progress);
    }
  },

  render () {
    return (
      <div className={styles[this.props.size || 'box']}>
        <div
          className={styles[this.props.size]}
          ref='canvas'
          role='progressbar'
          aria-valuenow={this.props.aria.value}
          aria-valuemin={this.props.aria.minimum}
          aria-valuemax={this.props.aria.maximum}
        />
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default CircleProgressBar;

