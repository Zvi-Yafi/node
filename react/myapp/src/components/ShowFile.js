import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ShowFile = () => {
    const [data, setData] = useState([]);
    console.log(data);

    const size = (f) => {
      const a = f.split(".");
      return a[a.length - 1];
    };
    const size1 = (f) => {
      const a = f.split(".");
      return a[a.length - 2];
    };
    async function getPost() {
      const res = await fetch(`http://localhost:5002/folder/showfile`);
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    async function getPost1(f) {
      const res = await fetch(`http://localhost:5002/folder/${f}`);
      const data = await res.text();
      setData(data);
    }
    useEffect(() => {
      getPost();
    }, []);
  return (
    <div>
    <h1 style={{ backgroundColor: "lightgreen" }}>
      View all files in a folder
    </h1>
    { data &&
      data.map((files, idx) => (
        <Card
          style={{
            margin: "10px",
            width: "15rem",
            border: "1px solid black",
            display: "inline-block",
          }}
          key={idx}
        >
          {size(files) === "html" ? (
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/103/103077.png"
              style={{ width: "71%" }}
            />
          ) : size(files) === "css" ? (
            <Card.Img
              variant="top"
              style={{ width: "71%" }}
              src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-css-file-document-icon-png-image_927823.jpg"
            />
          ) : (
            <Card.Img
              variant="top"
              style={{ width: "71%" }}
              src="https://iconarchive.com/download/i103422/paomedia/small-n-flat/folder.ico"
            />
          )}
          <Card.Body>
            <Card.Title>{size1(files) ? size1(files) : "folder"}</Card.Title>
            <Button
              variant="primary"
              href={files}
              onClick={() => {
                return( 
                  getPost1(files))
              }}
            >
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      ))}
  </div>
  )
}

export default ShowFile