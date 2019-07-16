import React from "react";

const Table = ({ empData, deleteHandler, editHandler }) => {
  return (
    <table border="2" className="table" width="100%">
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Role</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>
      </thead>
      <tbody>
        {empData.length > 0 ? (
          empData.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td><button className="btn btn-success" onClick={() => deleteHandler(emp.id)}>Delete</button></td>
                <td><button className="btn btn-success" onClick={() => editHandler(emp)}>Edit</button></td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
