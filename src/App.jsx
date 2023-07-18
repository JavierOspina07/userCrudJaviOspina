import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import useFetch from "./hook/useFetch";
import InfoMessage from "./components/InfoMessage";
import useDarkMode from './components/useDarkMode'
import { useState, useEffect } from "react";

function App() {
  /* comportamientos de la visualizacion de la informacion */
  const [closeInfo, setCloseInfo] = useState(true);
  const [closeForm, setCloseForm] = useState(true);
  const [updateInfo, setUpdateInfo] = useState();
  /* manejo del baseUrl */
  const baseUrl = "https://users-crud.academlo.tech";
  const [deletedUserName, setDeletedUserName] = useState();
  /* modificaciones en el modal de agregar, eliminar, actualizar usuario */
  const [addedUserName, setAddedUserName] = useState();
  const [updateUserName, setUpdateUserName] = useState();
  /* Darkmode */
  const [darkMode, setDarkMode] = useDarkMode();
  // estos son los mismos del useFetch pero los nombres depende del contexto ↓
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(
      baseUrl,
      setCloseForm
    ); /* el setCloseForm: al no ser useFetch un componente se debe pasar como callback */

  /* visualizacion del formulario */
  const handleOpenForm = () => {
    setCloseForm(false);
  };
  /* visualizacion de mensajes informativos */
  const showDeleteMessage = (userName) => {
    setDeletedUserName(userName);
    setAddedUserName();
    setUpdateUserName();
    setCloseInfo(false);
  };

  const showAddMessage = (userName) => {
    setAddedUserName(userName);
    setDeletedUserName();
    setUpdateUserName();
    setCloseInfo(false);
  };

  const showUpdateMessage = (userName) => {
    setUpdateUserName(userName);
    setDeletedUserName();
    setAddedUserName();
    setCloseInfo(false);
  };
  /* Manipulacion para Darkmode */
  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  /* mostar usuarios en la pantalla */

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  return (
    <div className="users">
      <div className="users__header">
        <h1 className="users__title">Users</h1>
        <button
          onClick={handleOpenForm}
          className="users__form-btn formuser__btn-open-form"
        >
          Open Form
        </button>
        <div className="wrapper">
        <input
          type="checkbox"
          id="hide-checkbox"
          defaultChecked={darkMode}
          onChange={handleToggleDarkMode}
        />
        <label htmlFor="hide-checkbox" className="toggle">
          <span className="toggle-button">
            <span className="crater crater-1"></span>
            <span className="crater crater-2"></span>
            <span className="crater crater-3"></span>
            <span className="crater crater-4"></span>
            <span className="crater crater-5"></span>
            <span className="crater crater-6"></span>
            <span className="crater crater-7"></span>
          </span>
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
          <span className="star star-4"></span>
          <span className="star star-5"></span>
          <span className="star star-6"></span>
          <span className="star star-7"></span>
          <span className="star star-8"></span>
        </label>
      </div>
      </div>

      <InfoMessage
        closeInfo={closeInfo}
        setCloseInfo={setCloseInfo}
        deletedUserName={deletedUserName}
        addedUserName={addedUserName}
        updateUserName={updateUserName}
      />

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
        showAddMessage={showAddMessage}
        showUpdateMessage={showUpdateMessage}
      />

      <div className="users__list">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
            closeInfo={closeInfo}
            setCloseInfo={setCloseInfo}
            showDeleteMessage={showDeleteMessage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
