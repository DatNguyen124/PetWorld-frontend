import { FunctionComponent } from "react";
import "./UserDropdown.css";

export type UserDropdownType = {
  className?: string;
};

const UserDropdown: FunctionComponent<UserDropdownType> = ({
  className = "",
}) => {
  return (
    <div className={`user-dropdown1 ${className}`}>
      <div className="user-info2">
        <div className="frame-parent16">
          <div className="user-1-container">
            <img
              className="user-1-icon1"
              loading="lazy"
              alt=""
              src="/user-1@2x.png"
            />
          </div>
          <h2 className="user-name1">Peter</h2>
        </div>
      </div>
      <div className="your-orders2" />
      <div className="payment" />
      <div className="user-actions3">
        <div className="profile-link-wrapper">
          <div className="profile-link1">
            <div className="profile-info1">
              <img
                className="profile-1-icon4"
                loading="lazy"
                alt=""
                src="/profile-1@2x.png"
              />
            </div>
            <div className="my-profile8">My Profile</div>
          </div>
        </div>
        <div className="seller-link-parent">
          <div className="seller-link" />
          <div className="seller-info">
            <div className="network-1-wrapper">
              <img
                className="network-1-icon"
                loading="lazy"
                alt=""
                src="/network-1@2x.png"
              />
            </div>
            <div className="manage-sellers">Manage Sellers</div>
          </div>
        </div>
        <div className="logout-link-wrapper">
          <div className="logout-link1">
            <div className="logout-info">
              <input className="logout-12" type="checkbox" />
            </div>
            <div className="logout2">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
