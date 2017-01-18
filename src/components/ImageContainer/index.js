import React from 'react';
import styles from './image-container.scss';
import Image from 'components/Image';

const getPaddingForImage = (attrs = {}) => (attrs.h / attrs.w) * 100;

const getMaxWidthForImage = (maxHeight = 0, attrs = {}) => Math.ceil((maxHeight / attrs.h) * attrs.w);

const ImageContainer = (props) => (
  <div style={props.maxHeight ? { maxWidth: getMaxWidthForImage(props.maxHeight, props.attrs) } : {}}>
    <div className={styles.frame} style={{ paddingTop: getPaddingForImage(props.attrs) + '%' }}>
      <div className={styles.inner}>
        <Image {...props} />
      </div>
    </div>
  </div>
);

export default ImageContainer;
