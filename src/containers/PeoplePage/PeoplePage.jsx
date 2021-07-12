import { useEffect, useState } from 'react';
import { getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import {getPeopleId,getPeopleIMg} from '../../services/getPeopleData'

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResourse = async (url) => {
    const res = await getApiResourse(`${url}`);
    const peopleList = res.results.map(({ name, url }) => {
      const id =  getPeopleId(url)
      const img = getPeopleIMg(id)
      console.log(img);
      console.log(id);
      return {
        id,
        name,
        img,
      };
    });


    setPeople(peopleList);
  };

  useEffect(() => {
    getResourse(API_PEOPLE);
  }, []);

  return <>
    {people && (
      <ul>
        {people.map(({id, name,img }) => {
          return (<li key={id} >
            <img src={img} alt={name} />
            <p>{name}</p>
          </li>)
        })}
      </ul>)
    }
  </>;
};

export default PeoplePage;
