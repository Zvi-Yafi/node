import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileIndex from "./components/fileIndex";
import Index from "./components/index.js";
import Info from "./components/Info";
import Show from "./components/Show";
import Delete from "./components/Delete";
import Rename from "./components/Rename";
import Copy from "./components/Copy";
import ShowFile from "./components/ShowFile";
import { useState } from "react";

function App() {
  const url = window.location.href.split("/")[3];
  console.log(url);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path={`/${url}`} element={<FileIndex />}>
            <Route path={`/${url}/info`} element={<Info />} />
            <Route path={`/${url}/show`} element={<Show />} />
            <Route path={`/${url}/delete`} element={<Delete />} />
            <Route path={`/${url}/rename`} element={<Rename />} />
            <Route path={`/${url}/showfile`} element={<ShowFile />} />
            <Route path={`/${url}/copy`} element={<Copy />} />
          </Route>
          <Route path={url && `/${url}/:file`} element={<FileIndex />}>
            <Route path={url && `/${url}/:file/info`} element={<Info />} />
            <Route path={url && `/${url}/:file/show`} element={<Show />} />
            <Route path={url && `/${url}/:file/delete`} element={<Delete />} />
            <Route path={url && `/${url}/:file/rename`} element={<Rename />} />
            <Route path={url && `/${url}/:file/copy`} element={<Copy />} />
          </Route>
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
