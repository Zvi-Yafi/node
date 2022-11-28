import React, { useState } from "react";

const Rename = () => {
  const [data, setData] = useState("");
  const url = window.location.href.split('/')[3]

  const rename = async () => {
    await fetch(`http://localhost:5002/${url}/rename`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({"name":data}),
    });
  };
  return (
    <div>
       <h1>rename file</h1>
      <h3>Enter a new name for the file</h3>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() => {
          rename();
        }}
      > 
        שלח
      </button>
      <h3 style={{color:'red'}}>Please don't forget to add the file type</h3>
    </div>
  ); 
};

export default Rename;
