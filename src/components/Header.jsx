import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Header.module.css';

function getLinkClassName({ isActive, isPending }) {
  let className = Style.Link;

  if (!isPending) {
    className = isActive ? `${className} ${Style.active}` : className;
  }

  return className;
}

export default function Header() {
  return (
    <nav className={`${Style.Nav}`}>
      <NavLink
        className={`${Style.Link} ${Style.AppLogo}`}
        activeClassName={Style.active}
        exact
        to="/"
      >
        Space X
      </NavLink>
      <ul className={`${Style.NavItems}`}>
        <li>
          <NavLink className={getLinkClassName} exact to="/rockets">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClassName} exact to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClassName} exact to="/profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
