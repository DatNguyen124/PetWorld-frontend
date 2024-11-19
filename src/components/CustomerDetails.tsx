import { ChangeEvent, FunctionComponent } from "react";
import "./CustomerDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FirstName from "./FirstName";
export type CustomerDetailsType = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  postcode: string;
  address: string;
  city: string;
  country: string;
};

const CustomerDetails: FunctionComponent<CustomerDetailsType> = ({
  first_name,
  last_name,
  email,
  phone_number,
  postcode,
  address,
  city,
  country,
}) => {
  const [firstName, setFirstName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  return (
    <div className="customer-details">
      <div className="customer-info">
        <h2 className="shipping" style={{ marginLeft: "850px" }}>
          Shipping
        </h2>
      </div>
      <div className="last-name-input3">
        <div className="last-name-fields">
          <div className="last-name75">
            <input className="last-name76" value={first_name} readOnly />
          </div>
          <div className="last-name77">
            <input
              className="last-name78"
              value={last_name}
              readOnly
              type="text"
            />
          </div>
        </div>
        <div className="last-name-fields1">
          <div className="last-name79">
            <input
              className="last-name80"
              value={phone_number}
              readOnly
              type="text"
            />
          </div>
          <div className="last-name81">
            <input className="last-name84" value={email} readOnly type="text" />
          </div>
        </div>
        <div className="last-name83">
          <input className="last-name84" value={address} readOnly type="text" />
        </div>
        <div className="last-name-fields2">
          <div className="last-name85">
            <input className="last-name86" value={city} readOnly type="text" />
          </div>
          <div className="last-name87">
            <input
              className="last-name88"
              value={country}
              readOnly
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="payment-input">
        <div className="payment-fields">
          <div className="last-name89">
            <input
              className="last-name90"
              value={postcode}
              readOnly
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
