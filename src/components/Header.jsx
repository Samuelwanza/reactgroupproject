import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Header.module.css';

export default function Header() {
  return (
    <nav className={`${Style.Nav}`}>
      <Link className={`${Style.Link} ${Style.AppLogo}`} to="/">Bookstore CMS</Link>
      <ul className={`${Style.NavItems}`}>
        <li><Link className={`${Style.Link}`} to="/">Books</Link></li>
        <li><Link className={`${Style.Link}`} to="/categories">Category</Link></li>
      </ul>
    </nav>
  );
}
