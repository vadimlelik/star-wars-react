import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import {withErrorApi} from '@hoc-healpers/withErrorApi'
import { getApiResource } from '@utilits/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
      const res = await getApiResource(url);

      if (res) {
          const peopleList = res.results.map(({ name, url }) => {
              const id = getPeopleId(url);
              const img = getPeopleImage(id);
  
              return {
                  id,
                  name,
                  img
              }
          })
          
          setPeople(peopleList);
          setErrorApi(false);
      } else {
          setErrorApi(true);
      }
  }

  useEffect(() => {
      getResource(API_PEOPLE);
  }, []);

  return (
      <>
          <h1>Navigation</h1>
          {people && <PeopleList people={people} />}
      </>
  )
}
PeoplePage.prototype ={
  setErrorApi:PropTypes.func
}

export default withErrorApi(PeoplePage);