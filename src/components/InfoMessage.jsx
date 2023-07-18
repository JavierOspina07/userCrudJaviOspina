import "./styles/InfoMessage.css";
import { useState } from "react";

const InfoMessage = ({
  closeInfo,
  setCloseInfo,
  deletedUserName,
  addedUserName,
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
          {deletedUserName ? "Delete user" : "User added"}
        </h2>
        <p className="info__message">
          {deletedUserName
            ? `User ${deletedUserName} has been removed`
            : `User ${addedUserName} has been added`
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
