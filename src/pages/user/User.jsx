import React from "react";
import UserDetails from "../../components/userDetails/UserDetails";
import UserUpdate from "../../components/userUpdate/UserUpdate";

import "./User.scss";

function User() {
  return (
    <div className="user">
      <div className="user__header">
        <h2 className="user__title">Edit User</h2>
        <button className="user__create-button">Create</button>
      </div>
      <div className="user__body">
        <UserDetails />
        <UserUpdate />
      </div>
    </div>
  );
}

export default User;
