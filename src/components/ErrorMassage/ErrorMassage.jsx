import React from 'react';
import styles from './ErrorMassage.module.csss';


const ErrorMassage = () => {
  return<>
  <p className={styles.text}> The Dark side of the force has won <br/>
    We cannot display data. <br/>
    Come back when fix everything.
  </p>
  </>
}

export default ErrorMassage;