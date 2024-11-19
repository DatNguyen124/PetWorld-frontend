import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./RowItems1.css";

export type RowItems1Type = {
  className?: string;
  alaskanMalamuteSledDog1?: string;
  petOriginPlaceholder?: string;
  pETSMOJ3B?: string;
  rowItemPlaceholder?: string;
  rowItemTwoPlaceholder?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
};

const RowItems1: FunctionComponent<RowItems1Type> = ({
  className = "",
  alaskanMalamuteSledDog1,
  petOriginPlaceholder,
  pETSMOJ3B,
  rowItemPlaceholder,
  rowItemTwoPlaceholder,
  propWidth,
  propFlex,
  propPadding,
}) => {
  const alaskanMalamuteSledDog1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const petOriginStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  return (
    <div className={`row-items ${className}`}>
      <div className="pet-breed-row">
        <img
          className="alaskan-malamute-sled-dog-1-icon"
          loading="lazy"
          alt=""
          src={alaskanMalamuteSledDog1}
          style={alaskanMalamuteSledDog1IconStyle}
        />
      </div>
      <textarea
        className="pet-origin"
        placeholder={petOriginPlaceholder}
        rows={8}
        cols={9}
        style={petOriginStyle}
      />
      <div className="pet-identifier">
        <div className="petsmoj3b">{pETSMOJ3B}</div>
      </div>
      <textarea
        className="row-item"
        placeholder={rowItemPlaceholder}
        rows={8}
        cols={9}
      />
      <textarea
        className="row-item-two"
        placeholder={rowItemTwoPlaceholder}
        rows={8}
        cols={9}
      />
    </div>
  );
};

export default RowItems1;
