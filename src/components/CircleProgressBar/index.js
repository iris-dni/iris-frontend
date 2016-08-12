import React from 'react';
import ReactDOM from 'react-dom';
import styles from './circleprogressbar.scss';
import settings from 'settings';
import ProgressBar from 'progressbar.js';

const CircleProgressBar = React.createClass({

  getDefaultProps () {
    return {
      percentage: 0,
      animated: false,
      size: 'small',
      color: settings.colors.primary,
      trailColor: settings.colors.greyLite
    };
  },

  componentDidMount () {
    this.initProgressBar();
    this.updateProgressBar(this.props.percentage);
  },

  initProgressBar () {
    let canvasElement = ReactDOM.findDOMNode(this.refs.canvas);

    this.progressBar = new ProgressBar.Circle(canvasElement, {
      strokeWidth: 10,
      easing: 'easeInOut',
      duration: 800,
      color: this.props.color,
      trailColor: this.props.trailColor,
      trailWidth: 10,
      svgStyle: {
        width: '100%',
        display: 'block',
        strokeLinecap: 'round'
      }
    });
  },

  updateProgressBar (percentage) {
    let progress = percentage / 100;

    if (this.props.animated) {
      this.progressBar.animate(progress);
    } else {
      this.progressBar.set(progress);
    }
  },

  render () {
    return (
      <div className={styles.root}>
        <div className={styles[this.props.size]} ref='canvas'></div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default CircleProgressBar;

