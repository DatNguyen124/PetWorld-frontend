import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./SellerTable.css";

export type SellerTableType = {
  className?: string;
  emptyCell?: string;
  sellerNamePlaceholder?: string;
  alaskanMalamuteSledDog1?: string;
  locationPlaceholder?: string;
  pETSMOJ3B?: string;
  pricePlaceholder?: string;
  aPPROVED?: string;
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

const SellerTable: FunctionComponent<SellerTableType> = ({
  className = "",
  emptyCell,
  sellerNamePlaceholder,
  alaskanMalamuteSledDog1,
  locationPlaceholder,
  pETSMOJ3B,
  pricePlaceholder,
  aPPROVED,
  prop,
  pM,
  propFlex,
  propPadding,
  propWidth,
  propFlex1,
  propPadding1,
  propPadding2,
}) => {
  const sellerNameStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const alaskanMalamuteSledDog1Icon2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const locationStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      padding: propPadding1,
    };
  }, [propFlex1, propPadding1]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={`seller-table1 ${className}`}>
      <div className="table-header2">
        <div className="empty-cell3">{emptyCell}</div>
      </div>
      <textarea
        className="seller-name2"
        placeholder={sellerNamePlaceholder}
        rows={8}
        cols={9}
        style={sellerNameStyle}
      />
      <div className="breed">
        <img
          className="alaskan-malamute-sled-dog-1-icon2"
          loading="lazy"
          alt=""
          src={alaskanMalamuteSledDog1}
          style={alaskanMalamuteSledDog1Icon2Style}
        />
      </div>
      <textarea
        className="location"
        placeholder={locationPlaceholder}
        rows={8}
        cols={9}
        style={locationStyle}
      />
      <div className="reference">
        <div className="petsmoj3b2">{pETSMOJ3B}</div>
      </div>
      <textarea
        className="price4"
        placeholder={pricePlaceholder}
        rows={8}
        cols={9}
      />
      <div className="status2" style={statusStyle}>
        <div className="approved">{aPPROVED}</div>
      </div>
      <div className="time1">
        <div className="pm4">
          <p className="p5">{prop}</p>
          <p className="pm5">{pM}</p>
        </div>
      </div>
      <div className="actions">
        <div className="edit-button1">
          <div className="login-frame14">
            <div className="remove3">REMOVE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerTable;
