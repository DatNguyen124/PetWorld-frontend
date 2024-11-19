import { Component, FunctionComponent, useEffect, useState } from "react";
import UserRow from "../components/UserRow";
import UserActions from "../components/UserActions";
import FirstName from "../components/FirstName";
import "./MyProfilePage.css";
import Header1 from "../components/Header1";
import HeaderTop from "../components/HeaderTop";
import axios from "axios";
import IUser from "../types/user.type";
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import Header2 from "../components/Header2";
import FrameComponent from "../components/FrameComponent";
import { Formik, Field, Form, ErrorMessage } from "formik";
import UserProfile from "../services/user-profile";
import * as Yup from "yup";

type Props = {};

type State = {
  redirect: string | null;
  userReady: boolean;
  currentUser: IUser & { accessToken: string };
};
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
const MyProfilePage: FunctionComponent = () => {
  const [users, setUsers] = useState<User>();
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const updateUserField = (field: keyof User, value: any) => {
    if (users) {
      setUsers({
        ...users,
        [field]: value,
      });
    }
  };

  const initialValues = users
    ? {
        email: users.email,
        first_name: users.first_name,
        last_name: users.last_name,
        phone_number: users.phone_number,
        address_line1: users.address_line1,
        address_line2: users.address_line2,
        city: users.city,
        state_province: users.state_province,
        country: users.country,
        postcode: users.postcode,
      }
    : {
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state_province: "",
        country: "",
        postcode: "",
      };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
  });

  const handleRegister = (formValue: {
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    address_line1: string;
    address_line2: string;
    city: string;
    state_province: string;
    country: string;
    postcode: string;
  }) => {
    const {
      email,
      first_name,
      last_name,
      phone_number,
      address_line1,
      address_line2,
      city,
      state_province,
      country,
      postcode,
    } = formValue;

    const user_id = AuthService.getCurrentUser().id;

    setMessage("");
    setSuccessful(false);

    UserProfile.updateInfo(
      user_id,
      email,
      first_name,
      last_name,
      phone_number,
      address_line1,
      address_line2,
      city,
      state_province,
      country,
      postcode
    ).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      }
    );
  };

  const logOut = () => {
    AuthService.logout();
  };

  // this function re-render when reload page
  // this function get data from server to show user information
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
        if (!parsedUserData || !parsedUserData.id) {
          setError("Stored user data is invalid");
          return;
        }
        parsedUserData.roles.includes("ROLE_ADMIN")
          ? setAdmin(true)
          : setAdmin(false);
        const storedEmail = parsedUserData.id;

        // Fetch users from the database
        const response = await axios.get("http://localhost:8080/users"); // Replace with your actual API endpoint
        const response_users = response.data;

        // Find the user with the matching email
        const matchedUser = response_users.find(
          (user: any) => user.id === storedEmail
        );
        if (matchedUser) {
          setUsers(matchedUser);
          setUserEmail(matchedUser.email);
        } else {
          setError("No matching user found in the database");
        }
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetchUser();
  }, []);

  const handleChange = () => {};
  return (
    <div>
      {/* <Header2 /> */}
      <main className="user-dropdown-group">
        <div className="user-dropdown">
          <div className="dropdown-items">
            <UserRow />
            <FrameComponent isAdmin={admin} />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
          enableReinitialize
        >
          <Form>
            {!successful && (
              <div className="form-row" style={{ marginTop: "100px" }}>
                <div
                  className="hello-jack-wrapper"
                  style={{
                    marginLeft: "450px",
                    marginTop: "300px",
                    fontSize: "300%",
                  }}
                >
                  <strong className="hello-jack1">
                    Hello ,{users?.first_name}
                  </strong>
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="email">Email </label>
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    value={userEmail}
                    readOnly
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="address_line1">Address Line1</label>
                  <Field
                    name="address_line1"
                    type="text"
                    className="form-control"
                    placeholder={users?.address_line1}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="address_line2">Address Line 2 </label>
                  <Field
                    name="address_line2"
                    type="text"
                    className="form-control"
                    placeholder={users?.address_line2}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="first_name">First Name </label>
                  <Field
                    name="first_name"
                    type="text"
                    className="form-control"
                    placeholder={users?.first_name}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="last_name">Last Name </label>
                  <Field
                    name="last_name"
                    type="text"
                    className="form-control"
                    placeholder={users?.last_name}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="phone_number">Phone Number </label>
                  <Field
                    name="phone_number"
                    type="text"
                    className="form-control"
                    placeholder={users?.phone_number}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="city">City </label>
                  <Field
                    name="city"
                    type="text"
                    className="form-control"
                    placeholder={users?.city}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="state_province">State / Province </label>
                  <Field
                    name="state_province"
                    type="text"
                    className="form-control"
                    placeholder={users?.state_province}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="country">Country </label>
                  <Field
                    name="country"
                    type="text"
                    className="form-control"
                    placeholder={users?.country}
                  />
                </div>

                <div
                  className="form-group col-md-6"
                  style={{ marginLeft: "300px" }}
                >
                  <label htmlFor="postcode">PostCode </label>
                  <Field
                    name="postcode"
                    type="text"
                    className="form-control"
                    placeholder={users?.postcode}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-custom"
                  style={{ marginLeft: "300px", marginTop: "50px" }}
                >
                  Update
                </button>
              </div>
            )}
            {message && (
              <div
                className="form-group"
                style={{ marginTop: "100px", marginLeft: "400px" }}
              >
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </main>

      {/* <div className="user-profile">
        <div className="user-profile-child" />
        <div className="user-profile-item" />
        <div className="my-profile">My Profile</div>
        <img className="profile-1-icon" alt="" src="/profile-1@2x.png" />
      </div>
      <img className="user-1-icon" alt="" src="/user-1@2x.png" />
      <b className="user-name">{users?.first_name}</b>
      <div className="your-orders">
        <div className="your-orders1">Your orders</div>
        <img className="package-1-icon" alt="" src="/package-1@2x.png" />
      </div>
      <div className="address4">
        <div className="addresses">Addresses</div>
        <img className="location-1-icon" alt="" src="/location-1@2x.png" />
      </div>
      <div className="payment">
        <div className="payment-methods">Payment Methods</div>
        <img className="credit-card-1-icon" alt="" src="/creditcard-1@2x.png" />
      </div>
      <div className="logout">
        <a href="/login-register-page" className="nav-link" onClick={logOut}>
          {" "}
          Log out
        </a>
        <img className="logout-1-icon" alt="" src="/logout-1@2x.png" />
      </div>
      <div className="payment1">
        <div className="manage-pets">Manage Pets</div>
        <img className="pawprint-2-icon" alt="" src="/pawprint-2@2x.png" />
      </div> */}
    </div>
  );
};
export default MyProfilePage;
