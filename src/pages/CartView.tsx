import { FunctionComponent } from "react";
import CartContent from "../components/CartContent";
import "./CartView.css";

const CartView: FunctionComponent = () => {
  return (
    <div className="cart-view">
      <header className="header7">
        <div className="pawprint-1-wrapper4">
          <img
            className="pawprint-1-icon7"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="home-navigation-wrapper">
          <div className="home-navigation1">
            <div className="home-links3">
              <h2 className="petworld7">PetWorld</h2>
            </div>
            <h3 className="home7">Home</h3>
          </div>
        </div>
        <div className="about-navigation">
          <h3 className="about-us7">About us</h3>
        </div>
        <div className="service-navigation">
          <h3 className="service7">Service</h3>
        </div>
        <div className="search-input-wrapper">
          <div className="search-input1">
            <input
              className="search-box7"
              placeholder="Im searching for?"
              type="text"
            />
            <div className="search8">
              <img className="icon-search7" alt="" src="/icon-search@2x.png" />
            </div>
          </div>
        </div>
        <div className="account-link-container">
          <div className="account-link2">
            <div className="account-image">
              <img
                className="image-1-icon7"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account7">My Account</b>
          </div>
        </div>
        <div className="shopping-cart-1-parent3">
          <img
            className="shopping-cart-1-icon7"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-link">
            <b className="cart7">Cart</b>
          </div>
        </div>
      </header>
      <CartContent />
    </div>
  );
};

export default CartView;
