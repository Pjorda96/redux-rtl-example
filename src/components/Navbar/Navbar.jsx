import React  from 'react';
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const value = useSelector((state) => state.basic.value)
  const { error, inProgress } = useSelector((state) => state.basic)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('navbar.home')}</Link>
        </li>
        <li>
          <Link to="/about/word">{t('navbar.about')}</Link>
        </li>
        <li>
          <Link to="/users">{t('navbar.users')}</Link>
        </li>
      </ul>

      <p>This page: {value}</p>
      <p>Error: {error || 'all OK'}</p>
      { inProgress && <p>In progress</p> }
    </nav>
  );
}
