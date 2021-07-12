export const getApiResourse = async (url) => {
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

// getApiResourse(`${SWAPI_ROOT}${SWAPI_PEPLE}`).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResourse(`${SWAPI_ROOT}${SWAPI_PEPLE}`);
//   console.log(body);
// })();
