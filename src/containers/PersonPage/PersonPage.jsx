import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonFilms from '@components/PersonPage/PersonFilms';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import styles from './PersonPage.module.css';
import PersonLinkBack from '../../components/PersonLinkBack/PersonLinkBack';


const PersonPage = ({ match, setErrorApi }) => {
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFilms, setpersonFilms] = useState(null)


  useEffect(() => {
    (async () => {
      const id = match.params.id

      const res = await getApiResource(`${API_PERSON}/${id}/`)
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

  const id = match.params.id



  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name} >{personName}</span>
        <div className={styles.container} >
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}

          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && <PersonFilms personFilms={personFilms} />}

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