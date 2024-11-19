import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./UserActions.css";

export type UserActionsType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const UserActions: FunctionComponent<UserActionsType> = ({
  className = "",
  propAlignSelf,
  propFlex,
}) => {
  const userActionsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={`user-actions2 ${className}`} style={userActionsStyle}>
      <div className="action-icons1">
        <div className="frame-parent12">
          <div className="package-1-wrapper">
            <img
              className="package-1-icon1"
              loading="lazy"
              alt=""
              src="/package-1@2x.png"
            />
          </div>
          <div className="your-orders1">Your orders</div>
        </div>
      </div>
      <div className="action-icons2">
        <div className="frame-parent13">
          <div className="location-1-container">
            <img
              className="location-1-icon1"
              loading="lazy"
              alt=""
              src="/location-1@2x.png"
            />
          </div>
          <div className="addresses1">Addresses</div>
        </div>
      </div>
      <div className="action-icons3">
        <div className="frame-parent14">
          <div className="credit-card-1-container">
            <img
              className="credit-card-1-icon1"
              loading="lazy"
              alt=""
              src="/creditcard-1@2x.png"
            />
          </div>
          <div className="payment-methods1">Payment Methods</div>
        </div>
      </div>
      <div className="action-icons4">
        <div className="frame-parent15">
          <div className="pawprint-2-container">
            <img
              className="pawprint-2-icon2"
              loading="lazy"
              alt=""
              src="/pawprint-2@2x.png"
            />
          </div>
          <div className="manage-pets2">Manage Pets</div>
        </div>
      </div>
      <div className="logout-button-parent">
        <div className="logout-button">
          <input className="logout-11" type="checkbox" />
        </div>
        <div className="logout1">Logout</div>
      </div>
    </div>
  );
};

export default UserActions;
