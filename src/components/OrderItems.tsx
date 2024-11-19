import { FunctionComponent } from "react";
import "./OrderItems.css";

export type OrderItemsType = {
  className?: string;
};

const OrderItems: FunctionComponent<OrderItemsType> = ({ className = "" }) => {
  return (
    <div className={`order-items ${className}`}>
      <div className="items-label">
        <h3 className="items">2 ITEMS</h3>
      </div>
      <div className="item-list">
        <div className="items-container">
          <div className="item">
            <img
              className="british-shorthair-1-2-icon1"
              loading="lazy"
              alt=""
              src="/britishshorthair1-1@2x.png"
            />
            <div className="item-placeholder">
              <img
                className="icon3"
                loading="lazy"
                alt=""
                src="/202301231036531832546-2@2x.png"
              />
            </div>
            <div className="alaskan-malamute-sled-dog-2-wrapper">
              <img
                className="alaskan-malamute-sled-dog-2-icon1"
                loading="lazy"
                alt=""
                src="/alaskanmalamutesleddog-1@2x.png"
              />
            </div>
          </div>
          <div className="item-info">
            <div className="item-info-fields">
              <div className="british-shorthair-cat1">
                British Shorthair Cat
              </div>
              <div className="seller-jack-white2">{`Seller:  Jack White  `}</div>
              <div className="contact-849483893213">{`Contact:  +84948389321 `}</div>
              <b className="item-empty">$500</b>
            </div>
            <div className="item-info-fields1">
              <div className="mix-colour-pug2">Mix Colour Pug</div>
              <div className="seller-jack-white3">{`Seller:  Jack White  `}</div>
              <div className="contact-849483893214">{`Contact:  +84948389321 `}</div>
              <b className="b1">$500</b>
            </div>
            <div className="item-info-fields2">
              <div className="alaska2">Alaska</div>
              <div className="seller-john-weak1">Seller: John Weak</div>
              <div className="contact-849483893215">{`Contact:  +84948389321 `}</div>
              <b className="b2">$700</b>
            </div>
          </div>
        </div>
      </div>
      <div className="order-total">
        <div className="total-fields">
          <h3 className="subtotal1">Subtotal</h3>
          <div className="total-empty">$1700</div>
        </div>
        <div className="total-fields1">
          <h3 className="total-usd">Total (USD)</h3>
          <b className="b3">$1700</b>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
