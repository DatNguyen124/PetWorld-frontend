import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent19 ${className}`}>
      <div className="profile-icon-wrapper">
        <div className="profile-icon">
          <div className="profile-1-container">
            <img
              className="profile-1-icon5"
              loading="lazy"
              alt=""
              src="/profile-1@2x.png"
            />
          </div>
          <div className="my-profile-wrapper">
            <div className="my-profile9">My Profile</div>
          </div>
        </div>
      </div>
      <div className="orders-icon-wrapper">
        <div className="orders-icon">
          <div className="package-1-container">
            <img
              className="package-1-icon2"
              loading="lazy"
              alt=""
              src="/package-1@2x.png"
            />
          </div>
          <div className="your-orders3">Your orders</div>
        </div>
      </div>
      <div className="frame-parent20">
        <div className="addresses-icon-wrapper">
          <div className="addresses-icon">
            <div className="location-1-frame">
              <img
                className="location-1-icon2"
                loading="lazy"
                alt=""
                src="/location-1@2x.png"
              />
            </div>
            <div className="addresses2">Addresses</div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="payment-icon-parent">
            <div className="payment-icon" />
            <div className="frame-parent22">
              <div className="credit-card-1-frame">
                <img
                  className="credit-card-1-icon2"
                  alt=""
                  src="/creditcard-1@2x.png"
                />
              </div>
              <div className="payment-methods2">Payment Methods</div>
            </div>
          </div>
          <div className="pets-icon-wrapper">
            <div className="pets-icon">
              <div className="pawprint-2-frame">
                <img
                  className="pawprint-2-icon4"
                  alt=""
                  src="/pawprint-2@2x.png"
                />
              </div>
              <div className="manage-pets3">Manage Pets</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper4">
        <div className="logout-icon-parent">
          <div className="logout-icon">
            <input className="logout-13" type="checkbox" />
          </div>
          <div className="logout3">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
