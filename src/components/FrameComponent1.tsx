import { FunctionComponent } from "react";
import Dog from "./Dog";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`dogs-parent ${className}`}>
      <div className="dogs1">Dogs</div>
      <div className="dog-group">
        <div className="dog3">
          <img
            className="image-icon1"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="dog-child">
            <div className="alaska-parent">
              <b className="alaska">Alaska</b>
              <div className="reference-id-petsmoj3b">
                Reference ID: PETSMOJ3B
              </div>
              <div className="alaska-description">
                <div className="beautiful-alaska-with">
                  Beautiful Alaska with good strength and adaptability to cold
                  climates.
                </div>
              </div>
              <div className="div11">$700</div>
            </div>
          </div>
        </div>
        <Dog />
        <Dog propWidth="unset" propMinWidth="unset" />
        <Dog propWidth="unset" propMinWidth="unset" />
      </div>
    </div>
  );
};

export default FrameComponent1;
