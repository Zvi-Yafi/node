import React, { useEffect, useState } from 'react'

const Show = () => {
    const [data, setData] = useState([]);
    const url = window.location.href.split('/')[3]

    async function getPost() {
      const res = await fetch(`http://localhost:5002/${url}/show`);
      const data = await res.text();
      setData(data);
    }
    useEffect(() => {
      getPost();
    }, []);
  return (
    <div style={{width:'50%' , textAlign:'center',margin:'200px'}}>{data && data}</div>
  )
}

export default Show