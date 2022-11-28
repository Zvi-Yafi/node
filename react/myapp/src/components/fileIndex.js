import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";

const FileIndex = () => {
  const url = window.location.href.split("/")[3];
  const url1 = window.location.href.split(".")[1];
  const url2 = window.location.href.split("/")[4];
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        {url1 ? (
         url !='folder'? <>
            <Nav.Item>
              <Nav.Link href={`/${url}/info`}>info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/${url}/show`} eventKey="link-1">
                Show
              </Nav.Link>
            </Nav.Item>
          </>:<>
            <Nav.Item>
              <Nav.Link href={`/${url}/${url2}/info`}>info</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/${url}/${url2}/show`} eventKey="link-1">
                Show
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link href={`/${url}/showfile`}>show file</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={`/${url}/info`} eventKey="link-1">
                info
              </Nav.Link>
            </Nav.Item>
          </>
        )}

        <Nav.Item>
          <Nav.Link href={`/${url}/rename`} eventKey="link-2">
            Rename
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`/${url}/copy`} eventKey="link-3">
            Copy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`/${url}/delete`} eventKey="link-4">
            Delete
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </div>
  );
};

export default FileIndex;
