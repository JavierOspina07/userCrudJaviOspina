import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./styles/FormUser.css";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  closeForm,
  setCloseForm,
  showAddMessage,
  showUpdateMessage,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    updateInfo
      ? /* Update */ (updateUserById("/users", updateInfo.id, data),
        setUpdateInfo())
      : /* Create */
        createNewUser("/users", data);

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    // Llamada a showInfoMessage para mostrar el mensaje de InfoMessage

    !updateInfo
      ? showAddMessage(`${data.first_name} ${data.last_name}`)
      : showUpdateMessage(`${data.first_name} ${data.last_name}`)
      
  };

  const handleCloseForm = () => {
    setCloseForm(true);
  };

  return (
    <div
      onClick={handleCloseForm}
      className={`formuser-countainer ${closeForm && "close-form"}`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="formuser"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="formuser__title">
          {updateInfo ? "Update" : "New User"}
        </h2>
        <div onClick={handleCloseForm} className="formuser__close">
          x
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="first_name">
            First Name
          </label>
          <input
            {...register("first_name")}
            className="formuser__input"
            type="text"
            id="first_name"
            placeholder="Ex: Carlos Alberto"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="last_name">
            Last Name
          </label>
          <input
            {...register("last_name")}
            className="formuser__input"
            type="text"
            id="last_name"
            placeholder="Ex: Gonzalez Alvarez"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            className="formuser__input"
            type="email"
            id="email"
            placeholder="ej@example.com"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            className="formuser__input"
            type="password"
            id="password"
            placeholder="alphanumeric"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="birthday">
            Birthday
          </label>
          <input
            {...register("birthday")}
            className="formuser__input"
            type="date"
            id="birthday"
          />
        </div>
        <button className="formuser__btn">
          {updateInfo ? "Update this user" : "Add a new user"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
