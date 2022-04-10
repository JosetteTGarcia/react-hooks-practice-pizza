import React from "react";

function Pizza({pizza, handleClick}) {
  const { id, topping, size, vegetarian } = pizza;

  const sendIdToApp= () => {
    handleClick(id)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={sendIdToApp}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
 