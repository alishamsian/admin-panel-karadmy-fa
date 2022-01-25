import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Routes from "../Routes";
import "./Layout.css"
import TopNav from "../topnav/TopNav";
const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={(props) =>(
        <div className="layout">
          <SideBar {...props} />
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Routes />
                </div>
              </div>
        </div>
      )} />
    </BrowserRouter>
  );
};

export default Layout;
