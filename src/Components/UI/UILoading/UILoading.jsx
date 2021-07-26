import React, { useState, useEffect } from 'react'
import styles from './UILoading.module.css';
import loaderGrey from './img/loader-grey.svg';
import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';

export default function UILoading({ theme = 'white' }) {
  const [loaderIcon, setloaderIcon] = useState(null)

  useEffect(() => {
    switch (theme) {
      case 'black': setloaderIcon(loaderBlack); break;
      case 'white': setloaderIcon(loaderWhite); break;
      case 'Grey': setloaderIcon(loaderGrey); break;
      default: setloaderIcon(loaderBlack)
    }
  }, [theme])

  return (
    <img
      className={styles.loader}
      src={loaderIcon}
      alt="Loader" />
  )
}
