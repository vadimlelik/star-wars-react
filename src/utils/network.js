import {
  HTTPS,
  HTTP
} from '@constants/api'

/**
 * Отправляет запрос feth
 * @param {string} url url для запросов 
 * @returns {Promise} Promise с результатом запроса  
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log('Could not fetch', res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

/**
 * Изменяет HTTP на HTTPS 
 * @param {string} url -url для изменения 
 * @returns это url с HTTPS
 */


export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url
  return result
}

// getApiResourse(`${SWAPI_ROOT}${SWAPI_PEPLE}`).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResourse(`${SWAPI_ROOT}${SWAPI_PEPLE}`);
//   console.log(body);
// })();