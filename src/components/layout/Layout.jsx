import React from "react";
import { BrowserRouter} from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import Routesss from "../Routesss";
import "./Layout.css"
import TopNav from "../topnav/TopNav";

const Layout = () => {
  return (
    <BrowserRouter>
     
        <div className="layout">
          <SideBar/>
              <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">
                  <Routesss />
                </div>
              </div>
        </div>
  
    </BrowserRouter>
  );
};

export default Layout;
