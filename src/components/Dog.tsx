import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Dog.css";

export type DogType = {
  type?: string;
  price?: number;
  image?: string;
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Dog: FunctionComponent<DogType> = ({
  className = "",
  type,
  price,
  image,
  propWidth,
  propMinWidth,
}) => {
  const dogStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className={`dog2 ${className}`} style={dogStyle}>
      <img src={`data:image/png;base64,${image}`} />
      <div className="dog-inner">
        <div className="frame-parent17">
          <div className="mix-colour-pug-parent">
            <b className="mix-colour-pug">Mix Colour Pug</b>
            <div className="reference-id-peptdyztjt">{type}</div>
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginLeft: "200px", fontSize: "150%" }}
            >
              Buy Pet
            </a>
          </div>
          <div className="div10">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
