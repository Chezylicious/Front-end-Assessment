import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export const UserList = (props) => {
        console.log(props);
      
        const deleteConactHandler = (id) => {
            props.getContactId(id);
        };
      
        const renderContactList = props.user.map((user) => {
          return (
            <ContactCard
            user={user}
              clickHander={deleteConactHandler}
              key={user.id}
            />
          );
        });
  return (
 <div className="main">
      <h2>
        User List
        <Link to="/add">
          <button className="ui button blue right">Add User</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
 </div>
        
)
};
