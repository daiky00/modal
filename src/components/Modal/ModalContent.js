import React from 'react';
import styles from './Modal.module.scss';

const ModalContent = props => {
  return (
    <React.Fragment>
      <main className={styles.content}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default ModalContent;