import { FunctionComponent } from "react";
import RowItems1 from "./RowItems1";
import RowItems from "./RowItems";
import ActionItems from "./ActionItems";
import "./PetListContainer.css";

export type PetListContainerType = {
  className?: string;
  image?: string;
  type?: string;
  title?: string;
  breed?: string;
  price?: number;
  id?: number;
  color?: string;
};

const PetListContainer: FunctionComponent<PetListContainerType> = ({
  className,
  image,
  type,
  title,
  breed,
  price,
  id,
  color,
}) => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center border-bottom py-2">
        <div className="col-1">
          <img
            src={`data:image/png;base64,${image}`}
            alt="Alaska"
            className="img-fluid"
          />
        </div>
        <div className="col-2">
          <span>{title}</span>
        </div>
        <div className="col-2">
          <span>{type}</span>
        </div>
        <div className="col-2">
          <span>${[price]}</span>
        </div>
        {/* <div className="col-1">
          <span>20</span>
        </div> */}
        <div className="col-1">
          <input type="checkbox" />
        </div>
        {/* <div className="col-2">
          <span>03-06-2024 05:12 PM</span>
        </div> */}
        <div className="col-1">
          <button className="btn btn-link text-danger p-0">REMOVE</button>
        </div>
      </div>
    </div>
  );
  {
    /* <RowItems1
              alaskanMalamuteSledDog1="/alaskanmalamutesleddog-1@2x.png"
              petOriginPlaceholder="Alaska"
              pETSMOJ3B="PETSMOJ3B"
              rowItemPlaceholder="700$"
              rowItemTwoPlaceholder="20"
            /> */
  }
  {
    /* <RowItems1
              alaskanMalamuteSledDog1="/britishshorthair1-1@2x.png"
              petOriginPlaceholder="British Shorthair Cat"
              pETSMOJ3B="PETSCAY7A"
              rowItemPlaceholder="500$"
              rowItemTwoPlaceholder="140"
              propWidth="calc(100% - 13px)"
              propFlex="0.8935"
              propPadding="var(--padding-40xl) var(--padding-4xs)"
            /> */
  }
  {
    /* <RowItems />
            <RowItems />
            <RowItems />
            <RowItems />
            <RowItems /> */
  }

  {
    /* <div className="time">
                <div className="pm">
                  <p className="p3">03-06-2024</p>
                  <p className="pm1">05:12 PM</p>
                </div>
              </div> */
  }
  {
    /* <div className="edit1">
                <div className="editbutton1">
                  <div className="login-frame8">
                    <div className="edit2">EDIT</div>
                  </div>
                </div>
                <div className="removebutton1">
                  <div className="login-frame9">
                    <div className="remove2">REMOVE</div>
                  </div>
                </div>
              </div> */
  }

  {
    /* <ActionItems prop="15-04-2024" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" />
            <ActionItems prop="02-02-2023" /> */
  }

  {
    /* <div className="bottom">
          <div className="footer">
            <div className="blank">
              <div className="footer-space">1</div>
              <div className="footer-space1">2</div>
              <div className="footer-space2">...</div>
            </div>
          </div>
          <div className="next-page1">
            <div className="next2">Next</div>
            <div className="nextarrow-frame">
              <img
                className="nextarrow-icon2"
                loading="lazy"
                alt=""
                src="/nextarrow@2x.png"
              />
            </div>
          </div>
        </div> */
  }
};

export default PetListContainer;
