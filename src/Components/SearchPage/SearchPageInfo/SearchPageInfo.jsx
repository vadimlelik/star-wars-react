import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.css';


const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people.length ? (
        <ul className={styles.list__container}> {people.map(({ id, name, img }) => {
          return (
            <li className={styles.list__item} key={id}>
              <Link to={`/people/${id}`}>
                <img className={styles.person__photo} src={img} alt={name} />
                <p className={styles.person__name}>{name}</p>
              </Link>
            </li>
          )
        })} </ul>
      ) :
        <h2 className={styles.person__comment} >No results</h2>}
    </>
  )


}

SearchPageInfo.prototype = {
  people: PropTypes.array
}
export default SearchPageInfo