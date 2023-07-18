import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import useFetch from "./hook/useFetch";
import InfoMessage from "./components/InfoMessage";
import { useState, useEffect } from "react";

function App() {
  const [closeInfo, setCloseInfo] = useState(true);
  const [closeForm, setCloseForm] = useState(true);
  const [updateInfo, setUpdateInfo] = useState();
  const baseUrl = "https://users-crud.academlo.tech";
  // estos son los mismos del useFetch pero los nombres depende del contexto ↓
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(
      baseUrl,
      setCloseForm
    ); /* el setCloseForm: al no ser useFetch un componente se debe pasar como callback */

  useEffect(() => {
    getAllUsers("/users");
  }, []); 

  const [deletedUserName, setDeletedUserName] = useState();
  const [addedUserName, setAddedUserName] = useState(); 
  const [updateUserName, setUpdateUserName] = useState()

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  const showDeleteMessage = (userName) => {
    setDeletedUserName(userName);
    setAddedUserName(); 
    setCloseInfo(false); 
  };

  const showInfoMessage = (userName) => {
    setAddedUserName(userName);
    setDeletedUserName();
    setCloseInfo(false); 
  };

  const showInfoMessageupdate = (userName) => { 
    setUpdateUserName(userName);
    setCloseInfo(false)
   }



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
        showInfoMessage ={showInfoMessage}
        showInfoMessageupdate ={showInfoMessageupdate}
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
