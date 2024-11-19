import { FunctionComponent, useCallback, useState } from "react";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Header1 from "../components/Header1";
import "./LoginRegisterPage.css";
import AuthService from "../services/auth.service";
type Props = {};

type State = {
  redirect: string | null;
  password: string;
  loading: boolean;
  message: string;
  email: string;
};

const LoginRegisterPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCreateAccountButtonClick = useCallback(() => {
    navigate("/create-new-account");
  }, [navigate]);

  return (
    <div className="login-register-page">
      <SignIn />
      <div className="new-customer">
        <b className="new-customer1">New Customer?</b>
        <button
          className="create-account-button"
          onClick={onCreateAccountButtonClick}
        >
          <div className="create-account-frame" />
          <b className="creat-account">CREATE ACCOUNT</b>
        </button>
        <div className="create-account-and-container">
          <span className="create-account-and-container1">
            <p className="create-account-and">
              Create account and you’ll be able to:
            </p>
            <ul className="check-out-faster-save-multiple">
              <li className="check-out-faster">Check out faster</li>
              <li className="save-multiple-shipping">
                Save multiple shipping address
              </li>
              <li className="access-your-order">Access your order history</li>
              <li className="track-new-order">Track new order</li>
              <li>Save items to your Wish List</li>
            </ul>
          </span>
        </div>
      </div>
      <b className="sign-in">Sign In</b>
      {/* <MainHeader />
      <Header1 /> */}
    </div>
  );
};

export default LoginRegisterPage;
