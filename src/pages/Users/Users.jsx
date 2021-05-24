import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setValueAsync} from "../../redux/reducers/basicSlice";
import { Link } from "react-router-dom";

export default function Users() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const users = useSelector((state) => state.info.users)
  const { error, inProgress } = useSelector((state) => state.info)

  useEffect(() => {
    dispatch(setValueAsync('Users'));
  })

  function List() {
    if (error) return <p>{error}</p>;
    if (inProgress) return <p>In progress</p>;

    if (users && !users.length) return <p>Nothing to show</p>

    return (
      <ul>
        {
          users.map(el => (
            <li key={el.id}>{el.name}</li>
          ))
        }
      </ul>
    )
  }

  return (
    <>
      <h2>{t('users.title')}</h2>

      <List />

      {users && !users.length && <Link to="/">{t('users.getUsers')}</Link>}
    </>
  );
}
