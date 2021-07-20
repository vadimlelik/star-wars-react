import React from 'react'
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';

export default function PersonPhoto({ personPhoto, personName }) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
    </>
  )
}
PersonPhoto.prototype = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string
}
