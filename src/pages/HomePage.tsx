import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import HeaderTop from "../components/HeaderTop";
import SHOPBYCATEGORY from "../components/SHOPBYCATEGORY";
import "./HomePage.css";
import Header2 from "../components/Header2";
const HomePage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <div className="wallpaper">
        <img
          className="dcxc355vmaabb5d-1-icon"
          alt=""
          src="/dcxc355vmaabb5d-1@2x.png"
        />
      </div>
      <SHOPBYCATEGORY />
    </div>
  );
};

export default HomePage;
