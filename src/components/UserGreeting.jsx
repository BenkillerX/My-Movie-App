import React from 'react';


function UserGreeting(props) {
  const statusClass = props.isLoggedIn ? 'login' : 'logout';

  return (
    <h2 className={`greeting ${statusClass}`}>
      {props.isLoggedIn ? `Welcome ${props.username}` : 'Please log in'}
    </h2>
  );
}

export default UserGreeting;
