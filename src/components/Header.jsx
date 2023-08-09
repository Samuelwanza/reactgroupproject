/* eslint-disable linebreak-style */
import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Header.module.css";

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
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? `${Style.Link}` : isActive ? `${Style.Link} ${Style.active}` : `${Style.Link}`
            }
            exact
            to="/rockets"
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
            isPending ? `${Style.Link}` : isActive ? `${Style.Link} ${Style.active}` : `${Style.Link}`
          }
            exact
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
            isPending ? `${Style.Link}` : isActive ? `${Style.Link} ${Style.active}` : `${Style.Link}`
          }
            exact
            to="/profile"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
