import React from 'react'
import { useHistory } from 'react-router'
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.svg';


export default function PersonLinkBack() {
  const history = useHistory()
  const handleGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }
  return (
    <a href='#'
      onClick={handleGoBack}
      className={styles.link}

    >
      <img className={styles.link__img} src={iconBack} alt="Go back" />
      <span>Go Back</span>
    </ a>
  )
}
