import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <marquee width="100%" height="25px" direction="right">
        WebSite under developement
      </marquee>
      <Outlet />
    </div>
  );
};

export default AppLayout;
