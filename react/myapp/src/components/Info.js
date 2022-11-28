import React, { useEffect, useState } from "react";

const Info = () => {
  const url = window.location.href.split("/")[3];
  const [data, setData] = useState([]);
  async function GetPost() {
    const res = await fetch(`http://localhost:5002/${url}/info`);
    const data = await res.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    GetPost();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {data && (
        <ol>
          {Object.entries(data).map((item, idx) => (
            <li key={idx}>
              {item[0]} : {item[1]}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Info;
