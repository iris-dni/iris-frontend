import React from 'react';
import ReactDOM from 'react-dom';
import styles from './progress-bar.scss';
import settings from 'settings';
import ProgressBarJS from 'progressbar.js';

const ProgressBar = React.createClass({

  getDefaultProps: () => ({
    percentage: 0,
    animated: false,
    color: settings.colors.primary,
    trailColor: settings.colors.greyLite,
    aria: {}
  }),

  componentDidMount () {
    this.initProgressBar();
    this.updateProgressBar(this.props.percentage);
  },

  initProgressBar () {
    const canvasElement = ReactDOM.findDOMNode(this.refs.canvas);

    this.progressBar = new ProgressBarJS.Line(canvasElement, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1500,
      color: this.props.color,
      trailColor: this.props.trailColor,
      trailWidth: 4,
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      autoStyleContainer: false
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
      <div
        className={styles.root}
        ref='canvas'
        role='progressbar'
        aria-valuenow={this.props.aria.value}
        aria-valuemin={this.props.aria.minimum}
        aria-valuemax={this.props.aria.maximum}
      />
    );
  }
});

export default ProgressBar;
