import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./EmailAddress.css";

export type EmailAddressType = {
  className?: string;
  emailAddress?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const EmailAddress: FunctionComponent<EmailAddressType> = ({
  className = "",
  emailAddress,
  propLeft,
  propLeft1,
}) => {
  const emailAddressStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const usernameFrameStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={`email-address1 ${className}`} style={emailAddressStyle}>
      <TextField
        className="username-frame1"
        color="primary"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
        style={usernameFrameStyle}
      />
      <div className="email-address2">{emailAddress}</div>
      <div className="required11">REQUIRED</div>
    </div>
  );
};

export default EmailAddress;
