import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite';
import { useEffect, useState } from 'react';
import { THEME_LIGHT, THEME_DARK, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';

import styles from './Header.module.css';
import imgDriod from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/satellite-connect.svg';


const Header = () => {
  const [icon, setIcon] = useState(imgSpaceStation)
  const isTheme = useTheme()

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT: setIcon(imgLightsaber);
        break;
      case THEME_DARK: setIcon(imgSpaceStation);
        break;
      case THEME_NEITRAL: setIcon(imgDriod);
        break;
      default: setIcon(imgSpaceStation)
    }
  }, [isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />
      <ul className={styles.list__container}>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/people/?page=1">People</NavLink></li>
        <li><NavLink to="/search" exact>Search</NavLink></li>
        <li><NavLink to="/not-found" exact>Not Found</NavLink></li>
        <li><NavLink to="/fail" exact>Fail</NavLink></li>

      </ul>
      <Favorite />
    </div>
  )
}

export default Header;
