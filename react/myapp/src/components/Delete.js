import React, { useState } from "react";

const Delete = () => {
  const url = window.location.href.split("/")[3];
  const [hide, setHide] = useState(false);

  const remove = () => {
    fetch(`http://localhost:5002/${url}/delete`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <h1>Delete file</h1>

      <button
        onClick={() => {
          setHide(!hide);
        }}
      >
        delete
      </button>
      {hide && (
        <>
          <h1 style={{ color: "red" }}>are you sure</h1>
           <button onClick={()=>{
            remove()
           }}>yes</button>
           <button onClick={()=>{
            setHide(false)
           }}>no</button>
        </>
      )}
    </div>
  );
};

export default Delete;
