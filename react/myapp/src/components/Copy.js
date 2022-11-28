import React, { useState } from "react";

const Copy = () => {
  const [data, setData] = useState('');
  const url = window.location.href.split('/')[3]



  const copy = () => {
   fetch(`http://localhost:5002/${url}/copy`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({"name":data}),
    });

  };

  return (
    <div>
      <h1>copy file</h1>
      <h3>Enter a new name for the file</h3>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() => {
          copy();
        }}
      > 
        שלח
      </button>
      <h3 style={{color:'red'}}>Please don't forget to add the file type</h3>
    </div>
  ); 
};

export default Copy;
