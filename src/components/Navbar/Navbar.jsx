import React from 'react';
import { useTranslation } from "react-i18next";
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();

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
    </nav>
  );
}
