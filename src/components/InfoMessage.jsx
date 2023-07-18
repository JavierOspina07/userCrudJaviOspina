import "./styles/InfoMessage.css";
import  { useState } from 'react';


const InfoMessage = ({closeInfo}) => {
    
  return (
    <div className={`info ${closeInfo && 'close__info'}`}>      
      <div className="info-countainer">
        <div className="info__close-btn">x</div>
        <h2 className="info__title">Delete user</h2>
        <p className="info__message">
          User Javier Hernan Ospina Igua has been removed
        </p>
        <button className="info__btn">Accept</button>
      </div>
    </div>
  );
};

export default InfoMessage;
