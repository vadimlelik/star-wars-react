import {
  SWAPI_PEOPLE,
  HTTPS,
  SWAPI_ROOT,
  GUDE_IMG_EXTANSION,
  URL_IMG_PERSON
} from '../constants/api'


const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')
  return id

}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
export const getPeopleIMg = id => `${URL_IMG_PERSON}/${id+GUDE_IMG_EXTANSION}`