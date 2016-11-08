import React from 'react';
import ReactDOM from 'react-dom';
import styles from './circleprogressbar.scss';
import { setting } from 'settings';
import ProgressBar from 'progressbar.js';

const CircleProgressBar = React.createClass({

  getDefaultProps: () => ({
    percentage: 0,
    animated: false,
    size: 'small',
    color: setting('colors.primary'),
    trailColor: setting('colors.greyLite'),
    aria: {}
  }),

  restart () {
    this.spinPercentage += 0.5;

    this.progressBar.animate(this.spinPercentage);
  },

  infiniteSpin () {
    this.progressBar.animate(this.spinPercentage, null, this.restart);
  },

  componentDidMount () {
    this.initProgressBar();
    if (this.props.percentage > 0) {
      this.updateProgressBar(this.props.percentage);
    }

    if (this.props.isSpinner) {
      this.spinPercentage = 0.25;
      this.interval = setInterval(this.infiniteSpin, 1000);
    }
  },

  componentDidUpdate (prevProps) {
    if (prevProps.percentage !== this.props.percentage) {
      this.updateProgressBar(this.props.percentage);
    }
  },

  componentWillUnmount () {
    this.progressBar.destroy();

    if (this.interval) {
      clearInterval(this.interval);
    }
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
