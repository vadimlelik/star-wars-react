import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeConcurrentRequest, changeHTTP } from '@utils/network';

export default function PersonFilms({ personFilms }) {
  const [filmsName, setFilmsName] = useState([])

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url))
      const response = await makeConcurrentRequest(filmsHTTPS)
      setFilmsName(response)
    })();
  }, [])

  return (
    <div>
      <ul>
        {filmsName.map(({ title, episode_id }) =>
          <li key={episode_id}>
            <span>Episode{episode_id}</span>
            <span>:</span>
            <span>{title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
PersonFilms.prototype = {
  personFilms: PropTypes.array
}