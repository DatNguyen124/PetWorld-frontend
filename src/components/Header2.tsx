import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header2.css";
import React from "react";
import CartItem from "./CartItem";
import { useShoppingContext } from "../context/shoppingContext";
import { formatCurrency } from "../util/common/formatCurrency";
import AuthService from "../services/auth.service";
const Header2 = () => {
  const { cartItems, cartQty, totalPrice } = useShoppingContext();
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("login-register-page");
  }, [navigate]);

  const onMyAccountClick = useCallback(() => {
    navigate("my-profile-page");
  }, [navigate]);

  const onDogPageClick = useCallback(() => {
    navigate("/dog-page");
  }, [navigate]);

  const onCatPageClick = useCallback(() => {
    navigate("/cat-page");
  }, [navigate]);

  const onFishPageClick = useCallback(() => {
    navigate("/fish-page");
  }, [navigate]);

  const onBirdPageClick = useCallback(() => {
    navigate("/bird-page");
  }, [navigate]);
  return (
    <header className="header13">
      <div className="frame1">
        <div className="frame2">
          <div className="logo2">
            <img
              className="pawprint-1-icon12"
              loading="lazy"
              alt=""
              src="/pawprint-12@2x.png"
            />
            <div className="petworld13">PetWorld</div>
          </div>
        </div>
        <nav className="header-navigation">
          <div className="navigation-items">
            <b className="home13" onClick={onHomeClick}>
              Home
            </b>
          </div>
          <div className="navigation-items1" onClick={onAboutUsClick}>
            <b className="about-us12">About us</b>
          </div>
          <div className="navigation-items2">
            <b className="service12">Service</b>
          </div>
        </nav>
      </div>
      <div className="frame3">
        <div className="frame4">
          <div className="search-bar5">
            <input
              className="search-box11"
              placeholder="Im searching for?"
              type="text"
            />
            <div className="search13">
              <img className="icon-search11" alt="" src="/icon-search@2x.png" />
            </div>
          </div>
        </div>

        {currentUser ? (
          <div className="user-actions4">
            <div className="login-button2" onClick={onMyAccountClick}>
              <img
                className="image-1-icon11"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <b className="login-register1">My Account</b>
            </div>
          </div>
        ) : (
          <div className="user-actions4">
            <div
              className="login-button2"
              onClick={onLoginButtonContainerClick}
            >
              <img
                className="image-1-icon11"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <b className="login-register1">Login / Register</b>
            </div>
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light pink-navbar">
        <div className="container-fluid">
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownCart"
                  data-bs-auto-close="outside"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">
                    {cartQty}
                  </span>
                </a>

                <ul
                  className="dropdown-menu dropdown-menu-end cart-dropdown"
                  aria-labelledby="navbarDropdownCart"
                >
                  <li>
                    <h3 className="dropdown-item">Your Cart</h3>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          {cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </li>

                  <li>
                    <span className="float-start ms-2">
                      <strong>Total: {formatCurrency(totalPrice)}</strong>
                    </span>
                    <Link
                      to="/check-out"
                      className="btn btn-sm btn-success float-end me-2"
                    >
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header10">
        <div className="sale">
          <b className="sale1">SALE</b>
          <img
            className="downward-arrow-1-icon"
            alt=""
            src="/downwardarrow-1@2x.png"
          />
        </div>
        <div className="dog" onClick={onDogPageClick}>
          <b className="dog1">DOG</b>
          <img
            className="downward-arrow-1-icon1"
            alt=""
            src="/downwardarrow-1@2x.png"
          />
        </div>
        <div className="cat" onClick={onCatPageClick}>
          <b className="cat1">CAT</b>
          <img
            className="downward-arrow-2-icon"
            alt=""
            src="/downwardarrow-2@2x.png"
          />
        </div>
        <div className="fish" onClick={onFishPageClick}>
          <b className="fish1">FISH</b>
          <img
            className="downward-arrow-3-icon"
            alt=""
            src="/downwardarrow-2@2x.png"
          />
        </div>
        <div className="bird" onClick={onBirdPageClick}>
          <b className="bird1">BIRD</b>
          <img
            className="downward-arrow-4-icon"
            alt=""
            src="/downwardarrow-1@2x.png"
          />
        </div>
      </div>
    </header>
    // <nav className="navbar navbar-expand-lg navbar-light pink-navbar">
    //   <div className="container-fluid ">
    //     <div className="frame1">
    //       <div className="frame2">
    //         <div className="logo2">
    //           <img
    //             className="pawprint-1-icon12"
    //             loading="lazy"
    //             alt=""
    //             src="/pawprint-12@2x.png"
    //           />
    //           <div className="petworld13">PetWorld</div>
    //         </div>
    //       </div>
    //       <nav className="header-navigation">
    //         <b className="home13" onClick={onHomeClick}>
    //           Home
    //         </b>

    //         <div className="navigation-items1" onClick={onAboutUsClick}>
    //           <b className="about-us12">About us</b>
    //         </div>
    //         <div className="navigation-items2">
    //           <b className="service12">Service</b>
    //         </div>
    //       </nav>
    //     </div>
    //     <div className="frame3">
    //       <div className="frame4">
    //         <div className="search-bar5">
    //           <input
    //             className="search-box11"
    //             placeholder="Im searching for?"
    //             type="text"
    //           />
    //           <div className="search13">
    //             <img
    //               className="icon-search11"
    //               alt=""
    //               src="/icon-search@2x.png"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="user-actions4">
    //         <div
    //           className="login-button2"
    //           onClick={onLoginButtonContainerClick}
    //         >
    //           <img
    //             className="image-1-icon11"
    //             loading="lazy"
    //             alt=""
    //             src="/image-1@2x.png"
    //           />
    //           <b className="login-register1">Login / Register</b>
    //         </div>
    //       </div>

    //       {/* <Link className="navbar-brand" to="/">
    //       <strong>NXB DEV DEMO</strong>
    //     </Link>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <Link className="nav-link" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/products">
    //             Products
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div> */}
    //     </div>
    //     <div className="ml-auto">
    //       <ul className="navbar-nav">
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdownCart"
    //             data-bs-auto-close="outside"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <i className="fas fa-shopping-cart"></i>
    //             <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">
    //               {cartQty}
    //             </span>
    //           </a>

    //           <ul
    //             className="dropdown-menu dropdown-menu-end cart-dropdown"
    //             aria-labelledby="navbarDropdownCart"
    //           >
    //             <li>
    //               <h3 className="dropdown-item">Your Cart</h3>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <div className="table-responsive">
    //                 <table className="table">
    //                   <tbody>
    //                     {cartItems.map((item) => {
    //                       return <CartItem key={item.id} {...item} />;
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </li>

    //             <li>
    //               <span className="float-start ms-2">
    //                 <strong>Total: {formatCurrency(totalPrice)}</strong>
    //               </span>
    //               <Link
    //                 to="/checkout"
    //                 className="btn btn-sm btn-success float-end me-2"
    //               >
    //                 Checkout
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header2;
