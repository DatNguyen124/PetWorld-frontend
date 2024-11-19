import { useEffect, Component, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ManagingPets from "./pages/ManagingPets";
import HomePage from "./pages/HomePage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import CreateNewAccount from "./pages/CreateNewAccount";
import UserMainPage from "./pages/UserMainPage";
import StaffUIForConfirmSellerPe from "./pages/StaffUIForConfirmSellerPe";
import UIForStaff from "./pages/UIForStaff";
import DogPage from "./pages/DogPage";
import AboutUsPage from "./pages/AboutUsPage";
import UploadPets from "./pages/UploadPets";
import PaymentMethod from "./pages/PaymentMethod";
import MyProfilePage from "./pages/MyProfilePage";
import PetsDetails from "./pages/PetsDetails";
import CartView from "./pages/CartView";
import CheckOut from "./pages/CheckOut";
import AuthService from "./services/auth.service";
//import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseImageUpload from "./util/config/FirebaseImageUpload";
import CatPage from "./pages/CatPage";
import FishPage from "./pages/FishPage";
import BirdPage from "./pages/BirdPage";
import { Switch } from "@mui/material";
import Header2 from "./components/Header2";
import IUser from "./types/user.type";
import ProtectedRoute from "./components/ProtectedRoutes";
import Header1 from "./components/Header1";
import ManagePetDetails from "./pages/ManagePetDetails";
import AdminRoute from "./components/adminRoute";
type State = {
  isUser: boolean;
  isAdmin: boolean;
  User: IUser | undefined;
};
function App() {
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const currentUser = AuthService.getCurrentUser();
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/login-register-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-new-account":
        title = "";
        metaDescription = "";
        break;
      case "/user-main-page":
        title = "";
        metaDescription = "";
        break;
      case "/staff-ui-for-confirm-seller-pets":
        title = "";
        metaDescription = "";
        break;
      case "/ui-for-staff":
        title = "";
        metaDescription = "";
        break;
      case "/dog-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/upload-pets":
        title = "";
        metaDescription = "";
        break;
      case "/payment-method":
        title = "";
        metaDescription = "";
        break;
      case "/my-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/pets-details":
        title = "";
        metaDescription = "";
        break;
      case "/cart-view":
        title = "";
        metaDescription = "";
        break;
      case "/check-out":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Set up route for website
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/login-register-page" element={<LoginRegisterPage />} />
      <Route path="/create-new-account" element={<CreateNewAccount />} />

      <Route
        path="/staff-ui-for-confirm-seller-pets"
        element={<AdminRoute element={<StaffUIForConfirmSellerPe />} />}
      />

      <Route
        path="/user-main-page"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<UserMainPage />} />
        }
      />
      <Route
        path="/upload-pets"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<UploadPets />} />
        }
      />
      <Route
        path="/payment-method"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<PaymentMethod />} />
        }
      />
      <Route
        path="/my-profile-page"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<MyProfilePage />} />
        }
      />
      <Route
        path="/manage-pet/:productId"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<ManagePetDetails />} />
        }
      />
      <Route
        path="/manage-pets"
        element={
          <ProtectedRoute roles={"ROLE_USER"} element={<ManagingPets />} />
        }
      />
      <Route path="/ui-for-staff" element={<UIForStaff />} />
      <Route path="/dog-page" element={<DogPage />} />
      <Route path="/cat-page" element={<CatPage />} />
      <Route path="/fish-page" element={<FishPage />} />
      <Route path="/bird-page" element={<BirdPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/pets-details" element={<PetsDetails />} />
      <Route path="/cart-view" element={<CartView />} />
      <Route path="/check-out" element={<CheckOut />} />
      {/* <Route path="/test" element={<FirebaseImageUpload />} /> */}
      <Route path="/products/:productId" element={<PetsDetails />} />
    </Routes>
  );
}

export default App;
