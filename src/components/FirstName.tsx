import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FirstName.css";
import { Form } from "react-router-dom";

export type FirstNameType = {
  className?: string;
  firstName?: string;
  firstNamePlaceholder?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const FirstName: FunctionComponent<FirstNameType> = ({
  className = "",
  firstName,
  firstNamePlaceholder,
  propMarginTop,
  propPadding,
  propWidth,
}) => {
  const firstNameStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const firstName1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const firstName2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`first-name9 ${className}`} style={firstNameStyle}>
      <div className="first-name10">{firstName}</div>
      <div className="input-fields2">
        <div className="value-containers">
          <div className="first-name11" style={firstName1Style}>
            <input
              className="first-name12"
              type="text"
              value={firstNamePlaceholder}
              style={firstName2Style}
            />
          </div>
        </div>
        <b className="change1">CHANGE</b>
      </div>
    </div>
  );
};

export default FirstName;
