import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setValueAsync} from "../../redux/reducers/basicSlice";

export default function About() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [state, setState] = useState('');
  const params = useParams().word;
  const value = useSelector((state) => state.basic.value)

  useEffect(() => {
    dispatch(setValueAsync('About'))
  }, [dispatch])

  useEffect(() => {
    setState(params);
  }, [params])

  return (
    <>
      <h2>{t('about.title')}</h2>

      <p>{t('about.result', { result: state })}</p>
      <p>Value: {value}</p>
    </>
  );
}
