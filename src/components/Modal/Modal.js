import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={`
        ${styles.modal} 
        ${styles.close} 
        ${props.open && styles.open}  
      `}>
        <div className={`
          ${styles.closeIcon}
          ${props.closeIconInvert && styles.closeIconInvert}
          `} onClick={props.onClose}>
          <IoIosClose />
        </div>
        {props.children}
      </div>
    </React.Fragment>
  )
}


Modal.propTypes = {
  open: PropTypes.bool,
  closeIconInvert: PropTypes.bool,
  onClose: PropTypes.func
}

export default Modal;

