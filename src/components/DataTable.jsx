import React from "react";

const DataTable = ({ data, selectedIds, handleCheckboxChange }) => (
  <table>
    <thead>
      <tr>
        <th>Select</th>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Email</th>
        <th>Blood Group</th>
      </tr>
    </thead>
    <tbody>
      {data.map((user) => (
        <tr key={user.id}>
          <td>
            <input
              type="checkbox"
              checked={selectedIds.includes(user.id)}
              onChange={(e) => handleCheckboxChange(e.target.checked, user.id)}
            />
          </td>
          <td>{user.id}</td>
          <td>{`${user.firstName} ${user.lastName}`}</td>

          <td>{user.age}</td>
          <td>{user.weight}</td>
          <td>{user.email}</td>
          <td>{user.bloodGroup}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
