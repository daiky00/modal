import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const ModalMedia = (props) => {
  return (
    <React.Fragment>
      { props.image && <header className={styles.media} style={{background: `url(${props.image})  center center / cover no-repeat`}}>
        <div className={styles.mediaWrapper}>
          {props.title && <h3 className={styles.title}>{props.title}</h3>}
          {props.subtitle && <h4 className={styles.subtitle}>{props.subtitle}</h4> }
        </div>
      </header> }
    </React.Fragment>
  )
}

ModalMedia.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default ModalMedia;