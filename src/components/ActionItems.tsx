import { FunctionComponent } from "react";
import "./ActionItems.css";

export type ActionItemsType = {
  className?: string;
  prop?: string;
};

const ActionItems: FunctionComponent<ActionItemsType> = ({
  className = "",
  prop,
}) => {
  return (
    <div className={`action-items ${className}`}>
      <div className="action-items-inner">
        <div className="square-1-parent">
          <img className="square-1-icon" alt="" src="/square-1@2x.png" />
          <img
            className="check-1-icon"
            loading="lazy"
            alt=""
            src="/check-1@2x.png"
          />
        </div>
      </div>
      <div className="am-frame">
        <div className="am4">
          <p className="p2">{prop}</p>
          <p className="am5">08:12 AM</p>
        </div>
      </div>
      <div className="editbutton-parent">
        <div className="editbutton">
          <div className="login-frame6">
            <div className="edit">EDIT</div>
          </div>
        </div>
        <div className="removebutton">
          <div className="login-frame7">
            <div className="remove1">REMOVE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionItems;
