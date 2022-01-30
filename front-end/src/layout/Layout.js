import React from "react";
import "./Layout.css";
import Menu from "./Menu";
import Routes from "./Routes";


/**
 * Defines the main layout of the application.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 side-bar bg-dark">
          <Menu />
        </div>

        <div className="col main-area">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;
