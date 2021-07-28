import React, { useEffect, useState, Suspense } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import styles from './PersonPage.module.css';
import PersonLinkBack from '../../components/PersonLinkBack/PersonLinkBack';
import UILoading from '@ui/UILoading';


const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setpersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setpersonFilms] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeDate = useSelector(state => state.favoriteReducer);


  useEffect(() => {
    (async () => {
      const id = match.params.id

      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)

      setpersonId(id)

      if (res) {
        setErrorApi(false);
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Name', data: res.name },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id))

        res.films.length && setpersonFilms(res.films)

      } else {
        setErrorApi(true);
      }
    })();

  }, [])




  return (
    <>

      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name} >{personName}</span>
        <div className={styles.container} >
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            setPersonFavorite={setPersonFavorite}
            personFavorite={personFavorite}

          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (<Suspense fallback={<UILoading />} >
            <PersonFilms personFilms={personFilms} />
          </Suspense>)
          }

        </div>
      </div>
    </>
  )
}
PersonPage.prototype = {
  setErrorApi: PropTypes.func,
  match: PropTypes.object,
}

export default withErrorApi(PersonPage)