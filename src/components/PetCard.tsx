import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FirstName.css";
import { Form, Link } from "react-router-dom";
import "./PetCard.css";
export type FirstNameType = {
  breed?: string;
  price?: number;
  image?: string;
  id?: number;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const PetCard: FunctionComponent<FirstNameType> = ({
  id,
  breed,
  price,
  image,
  propMarginTop,
  propPadding,
  propWidth,
}) => {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="card card-course-item">
            <img
              className="card-img-top"
              src={`data:image/png;base64,${image}`}
              alt="{name}"
            />
            <div className="card-body">
              <h5 className="card-title">{breed}</h5>
              <p className="card-text">${price}</p>
              <Link to={`/products/${id}`}> Buy Pet</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
