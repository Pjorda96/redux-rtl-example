import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();
  const [state, setState] = useState('');

  const params = useParams().word;

  useEffect(() => {
    setState(params);
  }, [params])

  return (
    <>
      <h2>{t('about.title')}</h2>

      <p>{t('about.result', { result: state })}</p>
    </>
  );
}
