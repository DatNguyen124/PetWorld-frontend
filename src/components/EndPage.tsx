import { FunctionComponent, useCallback } from "react";
import "./EndPage.css";
import { useNavigate } from "react-router-dom";
export type EndPageType = {
  className?: string;
};

const EndPage: FunctionComponent<EndPageType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDogPageClick = useCallback(() => {
    navigate("/dog-page");
  }, [navigate]);
  const onCatPageClick = useCallback(() => {
    navigate("/cat-page");
  }, [navigate]);
  const onBirdPageClick = useCallback(() => {
    navigate("/bird-page");
  }, [navigate]);
  const onFishPageClick = useCallback(() => {
    navigate("/fish-page");
  }, [navigate]);

  return (
    <div className={`end-page ${className}`}>
      <div className="intro">
        <b className="petworld11">PetWorld</b>
        <div className="petworld-is-one">
          PetWorld is one of Vietnam’s leading online pet shops. Pet owners can
          browse and buy from a vast range of competitively priced pet food and
          supplies and have them shipped right to your door anywhere in Vietnam.
        </div>
      </div>
      <div className="quick-links">
        <b className="quick-links1">Quick Links</b>
        <div className="dogs" onClick={onDogPageClick}>
          Dogs
        </div>
        <div className="cats" onClick={onCatPageClick}>
          Cats
        </div>
        <div className="birds" onClick={onBirdPageClick}>
          Birds
        </div>
        <div className="fish3" onClick={onFishPageClick}>
          Fish
        </div>
      </div>
      <div className="helpspt">
        <b className="help-support">{`Help & Support`}</b>
        <div className="track-your-order">Track your order</div>
        <div className="delivery-return">{`Delivery & Return`}</div>
        <div className="contact-us">Contact Us</div>
        <div className="faqs">FAQs</div>
      </div>
      <div className="get-in-touch">
        <b className="get-in-touch1">Get In Touch</b>
        <div className="div9">012-788-9999</div>
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        <div className="servicepetworldcom">service@petworld.com</div>
      </div>
    </div>
  );
};

export default EndPage;
