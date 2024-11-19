import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
  useState,
  useEffect,
} from "react";
import "./FrameComponent.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
export type FrameComponentType = {
  className?: string;
  isAdmin?: boolean;
  /** Style props */
  headerNavigationMargin?: CSSProperties["margin"];

  /** Action props */
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  isAdmin,
  headerNavigationMargin,
}) => {
  const petWorldStyle: CSSProperties = useMemo(() => {
    return {
      margin: headerNavigationMargin,
    };
  }, [headerNavigationMargin]);

  const navigate = useNavigate();

  const onMyProfileClick = useCallback(() => {
    navigate("/my-profile-page");
  }, [navigate]);

  const onOrderClick = useCallback(() => {
    navigate("/check-out");
  }, [navigate]);

  const onPaymentMethodClick = useCallback(() => {
    navigate("/payment-method");
  }, [navigate]);

  const onManagePetClick = useCallback(() => {
    navigate("/manage-pets");
  }, [navigate]);

  const onLogoutClick = useCallback(() => {
    navigate("/");
    AuthService.logout();
  }, [navigate]);

  const onUploadPetClick = useCallback(() => {
    navigate("/upload-pets");
  }, [navigate]);

  const onAdminClick = useCallback(() => {
    navigate("/staff-ui-for-confirm-seller-pets");
  }, [navigate]);

  return (
    <div className={`profile-link-container-parent ${className}`}>
      <div className="profile-link-container">
        <div className="profile-link">
          <div className="profile-1-wrapper">
            <img
              className="profile-1-icon2"
              loading="lazy"
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
          <div className="my-profile4" onClick={onMyProfileClick}>
            My Profile
          </div>
          {isAdmin && (
            <div>
              <div className="profile-1-wrapper">
                <img
                  className="profile-1-icon2"
                  loading="lazy"
                  alt=""
                  src="/profile-1@2x.png"
                />
              </div>
              <div className="my-profile4" onClick={onAdminClick}>
                Admin
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="user-actions1">
        <div className="order-address">
          <div className="order-address-container">
            <div className="order-address-items">
              <img
                className="package-1-icon"
                loading="lazy"
                alt=""
                src="/package-1@2x.png"
              />
            </div>
            <div className="your-orders" onClick={onOrderClick}>
              Your orders
            </div>
          </div>
        </div>
        <div className="order-address1">
          <div className="frame-parent11">
            <div className="location-1-wrapper">
              <img
                className="pawprint-2-icon"
                loading="lazy"
                alt=""
                src="/pawprint-2@2x.png"
              />
            </div>
            <div className="addresses" onClick={onUploadPetClick}>
              Upload Pets
            </div>
          </div>
        </div>
        <div className="payment-pets">
          <div className="payment-container">
            <div className="payment-items">
              <div className="payment-method2">
                <div className="credit-card-1-wrapper">
                  <img
                    className="credit-card-1-icon"
                    loading="lazy"
                    alt=""
                    src="/creditcard-1@2x.png"
                  />
                </div>
                <div className="payment-methods" onClick={onPaymentMethodClick}>
                  Payment Methods
                </div>
              </div>
            </div>
            <div className="manage-pets">
              <div className="manage-pets-container" />
              <div className="manage-pets-link">
                <div className="pawprint-2-wrapper">
                  <img
                    className="pawprint-2-icon"
                    loading="lazy"
                    alt=""
                    src="/pawprint-2@2x.png"
                  />
                </div>
                <div className="manage-pets1" onClick={onManagePetClick}>
                  Manage Pets
                </div>
              </div>
            </div>
          </div>
          <div className="logout-container-wrapper">
            <div className="logout-container">
              <div className="logout-link"></div>
              <div className="logout" onClick={onLogoutClick}>
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
