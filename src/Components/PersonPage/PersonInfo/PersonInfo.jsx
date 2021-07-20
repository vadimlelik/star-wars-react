import React from 'react'
import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';


export default function PersonInfo({ personInfo }) {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(({ title, data }) => (
            data && (
              <li className={styles.item__list} key={title}><span className={styles.item__title}>{title}:{data}</span> </li>
            )
          ))}
        </ul>
      </div>
    </>
  )
}
PersonInfo.prototype = {
  personInfo: PropTypes.array,

}
