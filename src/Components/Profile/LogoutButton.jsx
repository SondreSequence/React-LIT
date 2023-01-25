import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LogoutButton() {
  function handleClearLocalStorage() {
    localStorage.clear();
  }

  return (
    <Link to="/login">
      <button
        className="btn btn-info all-button mt-5"
        onClick={handleClearLocalStorage}
      >
        Logout
      </button>
    </Link>
  );
}

export default LogoutButton;
