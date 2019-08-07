import React from 'react';
import styles from './Modal.module.scss';

const ModalActions = props => {
  return (
    <React.Fragment>
      <footer className={styles.actions}>
        {props.children}
      </footer>
    </React.Fragment>
  )
}

export default ModalActions;