import { FunctionComponent, useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import FrameComponent2 from "../components/FrameComponent2";
import "./PaymentMethod.css";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import { useShoppingContext } from "../context/shoppingContext";
import { formatCurrency } from "../util/common/formatCurrency";
import { Link } from "react-router-dom";
import axios from "axios";
import authService from "../services/auth.service";
import CustomerDetails from "../components/CustomerDetails";
import { dividerClasses } from "@mui/material";

interface User {
  email: string;
  first_name: string;
  last_name: string;
  address_line1: string;
  address_line2: string;
  postcode: string;
  phone_number: string;
  city: string;
  state_province: string;
  country: string;
}
const PaymentMethod: FunctionComponent = () => {
  const [users, setUsers] = useState<User>();
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the stored user data from local storage
        const storedUserData = localStorage.getItem("user");
        if (!storedUserData) {
          setError("No user data found in local storage");
          return;
        }

        const parsedUserData = JSON.parse(storedUserData);
        if (!parsedUserData || !parsedUserData.email) {
          setError("Stored user data is invalid");
          return;
        }

        const storedEmail = parsedUserData.email;

        // Fetch users from the database
        const response = await axios.get("http://localhost:8080/users"); // Replace with your actual API endpoint
        const response_users = response.data;

        // Find the user with the matching email
        const matchedUser = response_users.find(
          (user: any) => user.email === storedEmail
        );
        if (matchedUser) {
          setUsers(matchedUser);
        } else {
          setError("No matching user found in the database");
        }
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {users && (
        <div className="payment-method">
          {/* <header className="header4">
        <div className="pawprint-1-wrapper1">
          <img
            className="pawprint-1-icon4"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="header-inner2">
          <div className="frame-group">
            <div className="petworld-container">
              <h1 className="petworld4">PetWorld</h1>
            </div>
            <h3 className="home4">Home</h3>
          </div>
        </div>
        <div className="about-us-wrapper1">
          <h3 className="about-us4">About us</h3>
        </div>
        <div className="service-wrapper1">
          <h3 className="service4">Service</h3>
        </div>
        <div className="search-box-container">
          <div className="search-box4">
            <input
              className="im-searching-for2"
              value="Im searching for?"
              type="text"
            />
          </div>
        </div>
        <div className="search-container">
          <div className="search4">
            <img
              className="icon-search4"
              loading="lazy"
              alt=""
              src="/icon-search@2x.png"
            />
          </div>
        </div>
        <div className="header-inner3">
          <div className="frame-container">
            <div className="image-1-wrapper">
              <img
                className="image-1-icon4"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account4">My Account</b>
          </div>
        </div>
        <div className="shopping-cart-1-parent1">
          <img
            className="shopping-cart-1-icon4"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-frame">
            <b className="cart4">Cart</b>
          </div>
        </div>
      </header> */}
          <main className="frame-main">
            <div className="frame-parent1">
              <UserRow userRowPadding="0px var(--padding-base) 0px var(--padding-lg)" />
              <FrameComponent />
            </div>

            <section className="frame-wrapper">
              <div className="frame-parent2">
                {/* <div className="payment-method-wrapper">
              <h1 className="payment-method1">Payment Method</h1>
            </div> */}
                <div className="information">
                  <div className="frame-parent3">
                    {/* <div className="frame-parent4">

                  <div className="first-name-wrapper">
                    <div className="first-name">Credit Card number</div>
                  </div>

                  <div className="frame-parent5">
                    <div className="required-wrapper">
                      <div className="required">REQUIRED</div>
                    </div>
                    <div className="last-name-input">
                      <div className="last-name">Expiration</div>
                      <div className="last-name1">Expiration</div>
                    </div>
                  </div>
                  <div className="required-container">
                    <div className="required1">REQUIRED</div>
                  </div>
                </div> */}

                    {/* <div className="frame-parent6">
                  <div className="frame-wrapper1">
                    <div className="frame-parent7">
                      <div className="first-name-container">
                        <div className="first-name1">
                          <input
                            className="first-name2"
                            value="Credit Card number"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="last-name2">
                        <input
                          className="first-name3"
                          value="Expiration"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="frame-parent8">
                    <div className="last-name-wrapper">
                      <div className="last-name3">Name on card</div>
                    </div>
                    <div className="required-parent">
                      <div className="required2">REQUIRED</div>
                      <div className="last-name4">CVV</div>
                    </div>
                    <div className="required3">REQUIRED</div>
                  </div>
                </div>
                <div className="name-input-fields">
                  <div className="last-name-input1">
                    <div className="last-name5">
                      <input
                        className="last-name6"
                        value="Name on card"
                        type="text"
                      />
                    </div>
                    <div className="last-name7">
                      <input
                        className="last-name8"
                        value="CVV"
                        type="text"
                      />
                    </div>
                  </div>
                </div> */}
                  </div>

                  <div className="address-container">
                    <div className="address-fields">
                      <h1 className="billing-address">Billing Address</h1>
                      <div className="last-name-parent">
                        <div className="last-name9">First name</div>
                        <div className="required-group">
                          <div className="last-name10">Last name</div>
                        </div>
                      </div>
                      <div className="address-input">
                        <div className="short-address-input">
                          <div className="last-name11">Address</div>
                        </div>
                      </div>
                      <div className="last-name-group">
                        <div className="last-name12">
                          <input
                            className="last-name13"
                            value={users.state_province}
                            readOnly
                            type="text"
                          />
                        </div>
                        <div className="last-name14">
                          <input
                            className="last-name15"
                            value={users.postcode}
                            readOnly
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="split-address-input">
                        <div className="double-address-input">
                          <div className="last-name16">Email</div>
                          <div className="nested-address-input">
                            <div className="last-name17">
                              <input
                                className="last-name18"
                                value={users.email}
                                readOnly
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="double-address-input1">
                          <div className="last-name19">Phone number</div>
                          <div className="last-name-container">
                            <div className="last-name20">
                              <input
                                className="last-name21"
                                value={users.phone_number}
                                readOnly
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="last-name-parent1">
                        <div className="last-name22">
                          <input
                            className="last-name23"
                            value={users.first_name}
                            readOnly
                            type="text"
                          />
                        </div>
                        <div className="last-name24">
                          <input
                            className="last-name25"
                            value={users.last_name}
                            readOnly
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="last-name26">
                        <input
                          className="last-name27"
                          value={users.address_line1}
                          readOnly
                          type="text"
                        />
                      </div>
                      <div className="detailed-address-input">
                        <div className="specific-address-input">
                          <div className="last-name28">City</div>
                        </div>
                        <div className="address-requirement">
                          <div className="address-validation">
                            <div className="last-name29">Country</div>
                          </div>
                        </div>
                      </div>
                      <div className="nested-address-entry">
                        <div className="last-name30">
                          <input
                            className="last-name31"
                            value={users.city}
                            readOnly
                            type="text"
                          />
                        </div>
                        <div className="sub-address-entry">
                          <div className="last-name32">
                            <input
                              className="last-name33"
                              value={users.country}
                              readOnly
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="last-name-parent2">
                        <div className="last-name34">State/Province</div>
                        <div className="required-parent1">
                          <div className="last-name35">Postcode</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* {users && (
          <CustomerDetails
            first_name={users.first_name}
    i        last_name={users.last_name}
            email={users.email}
            phone_number={users.phone_number}
            city={users.city}
            country={users.country}
            postcode={users.postcode}
            address={users.address_line1}
          />
        )} */}
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
