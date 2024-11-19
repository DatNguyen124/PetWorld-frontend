import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ConfirmPasswordPair.css";

export type ConfirmPasswordPairType = {
  className?: string;
  lastName?: string;
  lastNamePlaceholder?: string;
  lastNamePlaceholder1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding2?: CSSProperties["padding"];
};

const ConfirmPasswordPair: FunctionComponent<ConfirmPasswordPairType> = ({
  className = "",
  lastName,
  lastNamePlaceholder,
  lastNamePlaceholder1,
  propPadding,
  propPadding1,
  propWidth,
  propPadding2,
}) => {
  const confirmPasswordPairStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const lastNameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const lastName1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const lastName2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div
      className={`confirm-password-pair ${className}`}
      style={confirmPasswordPairStyle}
    >
      <div className="confirm-password-duo">
        <div className="last-name38">{lastName}</div>
      </div>
      <div className="last-name-parent3">
        <div className="last-name39" style={lastNameStyle}>
          <input
            className="last-name40"
            placeholder={lastNamePlaceholder}
            type="text"
            style={lastName1Style}
          />
        </div>
        <div className="last-name41" style={lastName2Style}>
          <input
            className="last-name42"
            placeholder={lastNamePlaceholder1}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordPair;
