import { useEffect, useState } from 'react';
import { getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResourse = async (url) => {
    const res = await getApiResourse(`${url}`);
    const peopleList = res.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    setPeople(peopleList);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return <></>;
};

export default PeoplePage;
