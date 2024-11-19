import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <div className={`header12 ${className}`}>
      <div className="logo1">
        <div className="petworld12">PetWorld</div>
        <img
          className="pawprint-1-icon12"
          loading="lazy"
          alt=""
          src="/pawprint-12@2x.png"
        />
      </div>
      <button className="home11" onClick={() => onButtonClick("/")}>
        <b className="home12">Home</b>
      </button>
      <div className="about-us11">
        <span
          className="about-us-txt-container"
          onClick={() => onButtonClick("/about-us-page")}
        >
          <b>About</b>
          <span>{` `}</span>
          <b>us</b>
        </span>
      </div>
      <b className="service11">Service</b>
      <div className="search-bar4">
        <div className="search-bar-child" />
        <div className="search-1-wrapper">
          <img className="search-1-icon" alt="" src="/search-1@2x.png" />
        </div>
        <div className="im-searching-for5">Im searching for?</div>
      </div>
    </div>
  );
};

export default MainHeader;
