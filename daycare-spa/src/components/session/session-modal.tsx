import React, { useState, useEffect } from "react";
import "../session/session-modal.scss";
import { useNavigate } from "react-router-dom";

const SessionModal = () => {
  const [modal, setModal] = useState(false);
  const redirect = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  const stay = () => {
    redirect("/main");
  };

  const handleLogout = () => {
    redirect("/logout");
  };

  useEffect(() => {
    toggleModal();
  }, []);

  console.log(modal);
  return (
    <div className="default">
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p className="session-p1">Your session has timed out!</p>
            <p className="session-p2">Do you want to continue?</p>
            <button className="close-modal" onClick={handleLogout}>
              Exit Application
            </button>
            <button className="stay-modal" onClick={stay}>
              Continue Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionModal;
