import { FunctionComponent } from "react";
import "./EndPage1.css";

export type EndPage1Type = {
  className?: string;
};

const EndPage1: FunctionComponent<EndPage1Type> = ({ className = "" }) => {
  return (
    <section className={`end-page1 ${className}`}>
      <div className="end-page-inner">
        <div className="frame-parent18">
          <div className="petworld-parent">
            <b className="petworld14">PetWorld</b>
            <div className="petworld-is-one1">
              PetWorld is one of Vietnam’s leading online pet shops. Pet owners
              can browse and buy from a vast range of competitively priced pet
              food and supplies and have them shipped right to your door
              anywhere in Vietnam.
            </div>
          </div>
          <div className="help-support-parent">
            <b className="help-support1">{`Help & Support`}</b>
            <div className="help-links">
              <div className="track-your-order1">Track your order</div>
              <div className="other-links">
                <div className="delivery-return1">{`Delivery & Return`}</div>
                <div className="contact-us1">Contact Us</div>
                <div className="faqs1">FAQs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame5">
        <div className="frame6">
          <div className="quick-links2">
            <b className="quick-links3">Quick Links</b>
            <div className="quick-link-items">
              <div className="dogs2">Dogs</div>
              <div className="cats1">Cats</div>
              <div className="birds1">Birds</div>
              <div className="fish4">Fish</div>
            </div>
          </div>
          <div className="get-in-touch2">
            <b className="get-in-touch3">Get In Touch</b>
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-email">012-788-9999</div>
                <img
                  className="image-2-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
              <div className="contact-details1">
                <div className="servicepetworldcom1">service@petworld.com</div>
                <img
                  className="image-3-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-31@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndPage1;
