import { FunctionComponent } from "react";
import "./Header.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header9 ${className}`}>
      <div className="pawprint-1-wrapper6">
        <img
          className="pawprint-1-icon9"
          loading="lazy"
          alt=""
          src="/pawprint-1@2x.png"
        />
      </div>
      <div className="navigation-wrapper">
        <div className="navigation3">
          <div className="home-nav">
            <h1 className="petworld9">PetWorld</h1>
          </div>
          <h2 className="home9">Home</h2>
        </div>
      </div>
      <div className="about-us-wrapper3">
        <h2 className="about-us9">About us</h2>
      </div>
      <div className="service-wrapper3">
        <h2 className="service9">Service</h2>
      </div>
      <div className="search-container-wrapper">
        <div className="search-container1">
          <input
            className="search-box9"
            placeholder="Im searching for?"
            type="text"
          />
          <div className="search11">
            <img className="icon-search9" alt="" src="/icon-search@2x.png" />
          </div>
        </div>
      </div>
      <div className="account-container-wrapper">
        <div className="account-container">
          <div className="account-info5">
            <img
              className="image-1-icon9"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <b className="my-account9">My Account</b>
        </div>
      </div>
      <div className="shopping-cart-1-parent4">
        <img
          className="shopping-cart-1-icon9"
          loading="lazy"
          alt=""
          src="/shoppingcart-1@2x.png"
        />
        <div className="cart-link1">
          <b className="cart10">Cart</b>
        </div>
      </div>
    </header>
  );
};

export default Header;
