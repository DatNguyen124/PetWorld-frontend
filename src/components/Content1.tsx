import { FunctionComponent } from "react";
import "./Content1.css";
import { useShoppingContext } from "../context/shoppingContext";
export type Content1Type = {
  className?: string;
  image: string;
  type: string;
  title: string;
  breed: string;
  price: number;
  id: number;
  color: string;
  date_of_birth: string;
  first_name: string;
  user_id: number;
  microchiped: string;
  vaccinated: string;
  wormed_flead: string;
  health_checked: string;
  advertisement_type: string;
  contact_preference: string;
};

type ProductItem = {
  id: number;
  type: string;
  title: string;
  breed: string;
  base64String: string;
  price: number;
  user_id: number;
};

const Content1: FunctionComponent<Content1Type> = ({
  className = "",
  image,
  type,
  title,
  breed,
  price,
  id,
  color,
  date_of_birth,
  first_name,
  user_id,
  microchiped,
  vaccinated,
  wormed_flead,
  health_checked,
  advertisement_type,
  contact_preference,
}) => {
  const productItem = {
    id: id,
    type: type,
    title: title,
    breed: breed,
    base64String: image,
    price: price,
    user_id: user_id,
  };
  const { addCartItem } = useShoppingContext();
  return (
    <section className={`content3 ${className}`}>
      <div className="pet-details-header-parent">
        <div className="pet-details-header">
          <h1 className="pets-details1">Pets Details</h1>
        </div>
        <div className="pet-info">
          <div className="create-account4">
            <div className="pet-overview">
              <div className="pug-parent">
                <h1 className="pug">{title}</h1>
                <div className="listing-id-peptdyztjt">Pet id :{id}</div>
              </div>
            </div>
            <div className="separator">
              <div className="separator-child" />
            </div>
            <div className="pet-details1">
              <div className="frame-parent23">
                <div className="pet-image-wrapper">
                  <img
                    className="pet-image-icon"
                    loading="lazy"
                    alt=""
                    src={`data:image/png;base64,${image}`}
                  />
                </div>
                <div className="more-info-parent">
                  <div className="more-info">More Info</div>
                  <div className="frame-parent24">
                    <div className="pet-color-mix-colours-adverti-wrapper">
                      <div className="pet-color-mix-container">
                        <p className="pet-color-mix">Pet color: {color}</p>
                        <p className="advertiser-individual">
                          Health Check :{health_checked}
                        </p>
                        <p className="seller-id-at13">
                          Microchiped :{microchiped} <br />
                          Wormed Flead :{wormed_flead}
                        </p>
                        <p className="pets-in-litter">Vaccine : {vaccinated}</p>

                        <p className="dob-07-01-2023">DOB:{date_of_birth}</p>
                      </div>
                    </div>

                    <div className="description">
                      Description : <br /> {advertisement_type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owner-info">
            <div className="owner-details">
              <div className="jack-w-parent">
                <div className="jack-w">Seller Name : {first_name}</div>
                <b className="owner-location">${price}</b>
              </div>
              <div className="add-to-cart-button-wrapper">
                <button
                  className="add-to-cart-button"
                  onClick={() => addCartItem(productItem)}
                >
                  <img
                    className="shopping-cart-2-icon"
                    alt=""
                    src="/shoppingcart-2@2x.png"
                  />
                  <b className="add-to-cart">Add to Cart</b>
                </button>
              </div>
            </div>
            <div className="additional-info">
              <div className="separator1" />
              <div className="description1">{contact_preference}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content1;
