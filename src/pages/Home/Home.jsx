import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import {useDispatch} from "react-redux";
import {setValueAsync} from "../../redux/reducers/basicSlice";
import {setUsersAsync} from "../../redux/reducers/infoSlice";

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setValueAsync('Home'))
  })

  function handleClick() {
    dispatch(setUsersAsync())
  }

  return (
    <>
      <h2>{t('home.title')}</h2>

      <button onClick={handleClick}>{t('home.trigger')}</button>
    </>
  );
}
