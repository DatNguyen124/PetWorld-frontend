import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./MyProfile.css";

export type MyProfileType = {
  className?: string;
  profile1?: string;
  mYPROFILE?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const MyProfile: FunctionComponent<MyProfileType> = ({
  className = "",
  profile1,
  mYPROFILE,
  propAlignSelf,
  propWidth,
  propPadding,
  propPadding1,
  propWidth1,
}) => {
  const myProfileStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const myProfile1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const mYPROFILEStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`my-profile5 ${className}`} style={myProfileStyle}>
      <div className="my-profile6" style={myProfile1Style}>
        <div className="my-profile-inner" style={frameDivStyle}>
          <div className="frame-wrapper3">
            <div className="ellipse-parent">
              <div className="frame-child" />
              <img className="profile-1-icon3" alt="" src={profile1} />
            </div>
          </div>
        </div>
        <div className="my-profile7" style={mYPROFILEStyle}>
          {mYPROFILE}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
