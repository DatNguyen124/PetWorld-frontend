import { FunctionComponent } from "react";
import "./CartContent.css";

export type CartContentType = {
  className?: string;
};

const CartContent: FunctionComponent<CartContentType> = ({
  className = "",
}) => {
  return (
    <section className={`cart-content ${className}`}>
      <div className="cart-header">
        <div className="cart-title-parent">
          <div className="cart-title">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="product-header">
            <div className="product-columns">
              <div className="column-titles">
                <div className="products">Products</div>
                <div className="price-quantity">
                  <div className="quantity">Quantity</div>
                  <div className="total-price">Total Price</div>
                </div>
              </div>
            </div>
            <div className="product-items">
              <div className="product-two">
                <div className="product-two-details">
                  <div className="product-two-image">
                    <img
                      className="british-shorthair-1-2-icon"
                      loading="lazy"
                      alt=""
                      src="/britishshorthair1-1@2x.png"
                    />
                    <div className="product-two-info">
                      <div className="british-shorthair-cat">
                        British Shorthair Cat
                      </div>
                      <div className="seller-jack-white">{`Seller:  Jack White  `}</div>
                      <div className="contact-84948389321">{`Contact:  +84948389321 `}</div>
                    </div>
                  </div>
                  <div className="quantity-control-two">
                    <div className="quantity-buttons-two">
                      <input className="minus-plus" type="checkbox" />
                      <div className="quantity-two">1</div>
                      <div className="minus-plus1">
                        <img
                          className="plus-1-icon"
                          loading="lazy"
                          alt=""
                          src="/plus-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="spacer-two">
                    <div className="empty-two">$500</div>
                  </div>
                  <div className="remove-product-two">
                    <div className="removebutton2">
                      <div className="login-frame16">
                        <div className="remove4">REMOVE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-row">
                <div className="product-details">
                  <div className="product-image">
                    <img
                      className="product-one-image"
                      loading="lazy"
                      alt=""
                      src="/202301231036531832546-2@2x.png"
                    />
                  </div>
                  <div className="product-info">
                    <div className="mix-colour-pug1">Mix Colour Pug</div>
                    <div className="seller-jack-white1">{`Seller:  Jack White  `}</div>
                    <div className="contact-849483893211">{`Contact:  +84948389321 `}</div>
                  </div>
                </div>
                <div className="quantity-control">
                  <div className="quantity-buttons">
                    <input className="minus-button" type="checkbox" />
                    <div className="quantity1">1</div>
                    <div className="plus-button">
                      <img
                        className="plus-1-icon1"
                        alt=""
                        src="/plus-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="spacer">
                  <div className="empty">$500</div>
                </div>
                <div className="remove-product">
                  <div className="removebutton3">
                    <div className="login-frame17">
                      <div className="remove5">REMOVE</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-row1">
                <div className="alaskan-malamute-sled-dog-2-parent">
                  <img
                    className="alaskan-malamute-sled-dog-2-icon"
                    loading="lazy"
                    alt=""
                    src="/alaskanmalamutesleddog-1@2x.png"
                  />
                  <div className="alaska-group">
                    <div className="alaska1">Alaska</div>
                    <div className="seller-john-weak">{`Seller:  John Weak  `}</div>
                    <div className="contact-849483893212">{`Contact:  +84948389321 `}</div>
                  </div>
                </div>
                <div className="product-row-inner">
                  <div className="frame-parent25">
                    <input className="frame-input" type="checkbox" />
                    <div className="div12">1</div>
                    <div className="plus-1-wrapper">
                      <img
                        className="plus-1-icon2"
                        alt=""
                        src="/plus-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper2">
                  <div className="div13">$700</div>
                </div>
                <div className="removebutton-wrapper">
                  <div className="removebutton4">
                    <div className="login-frame18">
                      <div className="remove6">REMOVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-footer">
          <div className="price-summary">
            <div className="price-labels">
              <div className="subtotal">Subtotal</div>
              <div className="total-label">$1700</div>
            </div>
            <div className="price-labels1">
              <b className="total">Total</b>
              <b className="b">$1700</b>
            </div>
          </div>
          <div className="upload-pet3">
            <div className="upload-button">
              <b className="checkout">CHECKOUT</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContent;
