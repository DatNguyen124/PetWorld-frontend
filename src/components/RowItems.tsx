import { FunctionComponent } from "react";
import "./RowItems.css";

export type RowItemsType = {
  className?: string;
};

const RowItems: FunctionComponent<RowItemsType> = ({ className = "" }) => {
  return (
    <div className={`row-items1 ${className}`}>
      <div className="wrapper1">
        <img
          className="icon2"
          loading="lazy"
          alt=""
          src="/202301231036531832546-2@2x.png"
        />
      </div>
      <textarea
        className="row-items-child"
        placeholder="Mix Colours Pug"
        rows={8}
        cols={9}
      />
      <div className="peptdyztjt-frame">
        <div className="peptdyztjt2">PEPTDYZTJT</div>
      </div>
      <textarea
        className="row-items-item"
        placeholder="500$"
        rows={8}
        cols={9}
      />
      <textarea
        className="row-items-inner"
        placeholder="74"
        rows={8}
        cols={9}
      />
    </div>
  );
};

export default RowItems;
