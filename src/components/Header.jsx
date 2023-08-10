import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css';
import Logo from '../assets/planet.png';

export default function Header() {
  return (
    <nav className={`${Style.Nav}`}>
      <Link className={`${Style.Link} ${Style.AppLogo}`} to="/">
        <img width="40px" alt="" srcSet={Logo} />
        Space X
      </Link>
      <ul className={`${Style.NavItems}`}>
        <li><Link className={`${Style.Link}`} to="/rockets">Rockets</Link></li>
        <li><Link className={`${Style.Link}`} to="/missions">Missions</Link></li>
        <li><Link className={`${Style.Link}`} to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  );
}
