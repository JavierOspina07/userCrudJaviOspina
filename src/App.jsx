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

  console.log(users);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

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
      <InfoMessage closeInfo={closeInfo} />
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="users__list">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
