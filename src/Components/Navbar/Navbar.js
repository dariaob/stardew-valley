import React from "react";
import AlertProvider from "./Alert/AlertContext";
import Alert from "./Alert/Alert";
import Main from "./NavbarElements";

const Navibar = () => {
  return (
      <>
      <AlertProvider value={alert}>
        <div className="container pt-3">
          <Alert/>
          <Main/>
        </div>
      </AlertProvider>
</>
)
}

export default Navibar;