import "./styles/InfoMessage.css";

const InfoMessage = ({
  closeInfo,
  setCloseInfo,
  deletedUserName,
  addedUserName,
  updateUserName,
}) => {
  const handleCloseInfo = () => {
    setCloseInfo(true);
  };
  
  return (
    <div
      onClick={handleCloseInfo}
      className={`info ${closeInfo && "close__info"}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="info-countainer">
        <div onClick={handleCloseInfo} className="info__close-btn">
          x
        </div>
        <h2 className="info__title">
          {deletedUserName 
            ? "User deleted" 
            : addedUserName
            ? "User added"  
            : updateUserName
            ? "User updated"
            : ""
          }
        </h2>
        <p className="info__message">
          {deletedUserName
            ? `User ${deletedUserName} has been removed`
            : addedUserName
            ? `User ${addedUserName} has been added`
            : updateUserName
            ? `User ${updateUserName} has been updated`
            : ""
          }
        </p>
        <button onClick={handleCloseInfo} className="info__btn">
          Accept
        </button>
      </div>
    </div>
  );
};

export default InfoMessage;
