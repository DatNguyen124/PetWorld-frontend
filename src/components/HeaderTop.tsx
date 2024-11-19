import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import "./Header2.css";

export type Header2Type = {
  className?: string;

  /** Style props */
  headerNavigationMargin?: CSSProperties["margin"];

  /** Action props */
  onNavigationLinksContainerClick?: () => void;
  onNavigationLinksContainerClick1?: () => void;
};

const HeaderTop: FunctionComponent<Header2Type> = ({
  className = "",
  headerNavigationMargin,
  onNavigationLinksContainerClick,
  onNavigationLinksContainerClick1,
}) => {
  const petWorldStyle: CSSProperties = useMemo(() => {
    return {
      margin: headerNavigationMargin,
    };
  }, [headerNavigationMargin]);

  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/user-main-page");
  }, [navigate]);

  const onCartButtonContainerClick = useCallback(() => {
    navigate("/cart-view");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us-page");
  }, [navigate]);

  return (
    <header className={`header13 ${className}`}>
      <div className="frame1">
        <div className="frame2">
          <div className="logo2">
            <img
              className="pawprint-1-icon12"
              loading="lazy"
              alt=""
              src="/pawprint-12@2x.png"
            />
            <div className="petworld13" style={petWorldStyle}>
              PetWorld
            </div>
          </div>
        </div>
        <nav className="header-navigation">
          <div
            className="navigation-items"
            onClick={onNavigationLinksContainerClick}
          >
            <b className="home13">Home</b>
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
        <div className="user-actions4">
          <div className="login-button2" onClick={onLoginButtonContainerClick}>
            <img
              className="image-1-icon11"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <b className="login-register1">My Profile</b>
          </div>
          <div className="cart-button2" onClick={onCartButtonContainerClick}>
            <img
              className="shopping-cart-1-icon11"
              loading="lazy"
              alt=""
              src="/shoppingcart-1@2x.png"
            />
            <b className="cart12">Cart</b>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
