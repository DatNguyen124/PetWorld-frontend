import { FunctionComponent } from "react";
import CreateAccount from "../components/CreateAccount";
import MainHeader from "../components/MainHeader";
import Header1 from "../components/Header1";
import "./CreateNewAccount.css";
import HeaderTop from "../components/HeaderTop";
import Header2 from "../components/Header2";
const CreateNewAccount: FunctionComponent = () => {
  return (
    <div className="create-new-account">
      {/*  GO TO CreateAccount component */}
      <CreateAccount />
      <b className="create-account">Create Account</b>
      {/* <Header2 />
      <Header1 /> */}
    </div>
  );
};

export default CreateNewAccount;
