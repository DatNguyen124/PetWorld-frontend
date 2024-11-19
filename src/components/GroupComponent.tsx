import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;
  lastName?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  lastName,
  propAlignSelf,
  propWidth,
  propPadding,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const inputElementsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`last-name-label-parent ${className}`}
      style={groupDivStyle}
    >
      <div className="last-name-label">
        <div className="last-name43">{lastName}</div>
      </div>
      <div className="input-fields">
        <div className="input-field">
          <div className="input-wrapper">
            <div className="input-elements" style={inputElementsStyle}>
              <img
                className="dry-clean-5-icon"
                loading="lazy"
                alt=""
                src="/dryclean-1@2x.png"
              />
            </div>
            <div className="last-name44">Yes</div>
          </div>
        </div>
        <div className="input-elements1">
          <img
            className="dry-clean-6-icon"
            loading="lazy"
            alt=""
            src="/dryclean-1@2x.png"
          />
          <div className="last-name45">No</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
