import './page.css'
import './data.css'
import React from "react";

const UserTable = props => (
  <table className='users' >
    <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Money</th>
          <th>Actions</th>
        </tr>
    </thead>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.money}</td>
          <td >
            <button
              onClick={() => {
                props.editRow(user);
              }}
              className="click"
            >
              Edit
            </button>
            <button
              onClick={() => props.deleteUser(user.id)}
              className="click"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
  </table>
);

export default UserTable;

