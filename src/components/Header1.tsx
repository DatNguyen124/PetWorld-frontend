import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import "./Header1.css";
import { useNavigate } from "react-router-dom";

// export type Header1Type = {
//   className?: string;
// };

const Header1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDogPageClick = useCallback(() => {
    navigate("/dog-page");
  }, [navigate]);

  const onCatPageClick = useCallback(() => {
    navigate("/cat-page");
  }, [navigate]);

  const onFishPageClick = useCallback(() => {
    navigate("/fish-page");
  }, [navigate]);

  const onBirdPageClick = useCallback(() => {
    navigate("/bird-page");
  }, [navigate]);

  return (
    <div className="header10">
      <div className="sale">
        <b className="sale1">SALE</b>
        <img
          className="downward-arrow-1-icon"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
      <div className="dog" onClick={onDogPageClick}>
        <b className="dog1">DOG</b>
        <img
          className="downward-arrow-1-icon1"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
      <div className="cat" onClick={onCatPageClick}>
        <b className="cat1">CAT</b>
        <img
          className="downward-arrow-2-icon"
          alt=""
          src="/downwardarrow-2@2x.png"
        />
      </div>
      <div className="fish" onClick={onFishPageClick}>
        <b className="fish1">FISH</b>
        <img
          className="downward-arrow-3-icon"
          alt=""
          src="/downwardarrow-2@2x.png"
        />
      </div>
      <div className="bird" onClick={onBirdPageClick}>
        <b className="bird1">BIRD</b>
        <img
          className="downward-arrow-4-icon"
          alt=""
          src="/downwardarrow-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Header1;
