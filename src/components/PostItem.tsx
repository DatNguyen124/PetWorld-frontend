import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PostItem.css";

export type PostItemType = {
  className?: string;
  postImage?: string;
  frame23Placeholder?: string;
  alaskanMalamuteSledDog1?: string;
  frame25Placeholder?: string;
  pETSMOJ3B?: string;
  frame27Placeholder?: string;
  pENDING?: string;
  prop?: string;
  pM?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const PostItem: FunctionComponent<PostItemType> = ({
  className = "",
  postImage,
  frame23Placeholder,
  alaskanMalamuteSledDog1,
  frame25Placeholder,
  pETSMOJ3B,
  frame27Placeholder,
  pENDING,
  prop,
  pM,
  propFlex,
  propPadding,
  propWidth,
  propFlex1,
  propPadding1,
  propPadding2,
}) => {
  const frameTextareaStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const alaskanMalamuteSledDog1Icon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameTextarea1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      padding: propPadding1,
    };
  }, [propFlex1, propPadding1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={`post-item1 ${className}`}>
      <div className="post-image-wrapper">
        <div className="post-image">{postImage}</div>
      </div>
      <textarea
        className="frame-textarea"
        placeholder={frame23Placeholder}
        rows={8}
        cols={9}
        style={frameTextareaStyle}
      />
      <div className="alaskan-malamute-sled-dog-1-wrapper">
        <img
          className="alaskan-malamute-sled-dog-1-icon1"
          loading="lazy"
          alt=""
          src={alaskanMalamuteSledDog1}
          style={alaskanMalamuteSledDog1Icon1Style}
        />
      </div>
      <textarea
        className="post-item-child1"
        placeholder={frame25Placeholder}
        rows={8}
        cols={9}
        style={frameTextarea1Style}
      />
      <div className="petsmoj3b-wrapper">
        <div className="petsmoj3b1">{pETSMOJ3B}</div>
      </div>
      <textarea
        className="post-item-child2"
        placeholder={frame27Placeholder}
        rows={8}
        cols={9}
      />
      <div className="pending-container" style={frameDiv1Style}>
        <div className="pending1">{pENDING}</div>
      </div>
      <div className="pm-wrapper">
        <div className="pm2">
          <p className="p4">{prop}</p>
          <p className="pm3">{pM}</p>
        </div>
      </div>
      <div className="approve-button-group">
        <div className="approve-button1">
          <div className="login-frame12">
            <div className="approve1">APPROVE</div>
          </div>
        </div>
        <div className="reject-button1">
          <div className="login-frame13">
            <div className="reject1">REJECT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
