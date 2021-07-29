import React from 'react'
import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';
import PropTypes from 'prop-types';

const ChooseSide = () => {
  const isTheme = useTheme()
  return (
    <div>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>LIGHT</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>DARK</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>NEITRAL</button>
    </div>
  )
}
ChooseSide.prototype = {
  // text: PropTypes.string
}

export default ChooseSide

