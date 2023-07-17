import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUserById(`/users`, user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpenForm();
  };

  return (
      <div className="user-profile">
        <article className="user-profile__info">
          <h2 className="user-profile__name">{`${user.first_name} ${user.last_name}`}</h2>
          <hr className="user-profile__divider" />
          <ul className="user-profile__details">
            <li className="user-profile__detail">
              <span className="user-profile__label">Email: </span>
              <span className="user-profile__value">{user.email}</span>
            </li>
            <li className="user-profile__detail">
              <span className="user-profile__label">Birthday: </span>
              <span className="user-profile__value">{user.birthday}</span>
            </li>
          </ul>
          <hr className="user-profile__divider" />
          <footer className="user-profile__footer">
            <button
              className="user-profile__delete-btn"
              onClick={handleDelete}
            >
              <i className="bx bx-trash bx-sm bx-tada-hover" ></i>
            </button>
            <button
              className="user-profile__update-btn"
              onClick={handleUpdate}
            >
              <i className="bx bxs-pencil bx-sm bx-tada-hover"></i>
            </button>
          </footer>
        </article>
      </div>
  );
};

export default UserCard;
