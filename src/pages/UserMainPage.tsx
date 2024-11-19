import { FunctionComponent } from "react";
import UserRow from "../components/UserRow";
import UserActions from "../components/UserActions";
import MyProfile from "../components/MyProfile";
import "./UserMainPage.css";
import Header1 from "../components/Header1";
import HeaderTop from "../components/HeaderTop";
import Header2 from "../components/Header2";
const UserMainPage: FunctionComponent = () => {
  return (
    <div className="user-main-page">
      <section className="user-info-parent">
        <div className="user-info1">
          <UserRow userRowPadding="0px var(--padding-7xs) 0px var(--padding-8xs)" />
          <div className="profile-menu-items-parent">
            <div className="profile-menu-items">
              <div className="profile-menu-link">
                <div className="profile-link-details">
                  <img
                    className="profile-1-icon"
                    loading="lazy"
                    alt=""
                    src="/profile-1@2x.png"
                  />
                </div>
                <div className="my-profile">My Profile</div>
              </div>
            </div>
            <UserActions />
          </div>
        </div>
        <div className="greeting-wrapper">
          <div className="greeting">
            <h1 className="hello-jack">Hello Jack,</h1>
            <div className="profile-navigation">
              <div className="profile-options">
                <MyProfile
                  profile1="/profile-1-1@2x.png"
                  mYPROFILE="MY PROFILE"
                />
                <MyProfile
                  profile1="/creditcard-2@2x.png"
                  mYPROFILE="PAYMENT METHODS"
                  propAlignSelf="stretch"
                  propWidth="unset"
                  propPadding="var(--padding-8xl) var(--padding-30xl) var(--padding-2xs) var(--padding-29xl)"
                  propPadding1="0px var(--padding-29xl) 0px var(--padding-32xl)"
                  propWidth1="167px"
                />
              </div>
              <div className="order-navigation">
                <div className="order-options">
                  <MyProfile
                    profile1="/package-2@2x.png"
                    mYPROFILE="YOUR ORDERS"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propPadding="var(--padding-8xl) var(--padding-50xl) var(--padding-2xs) var(--padding-49xl)"
                    propPadding1="0px var(--padding-9xl) 0px var(--padding-12xl)"
                    propWidth1="127px"
                  />
                  <MyProfile
                    profile1="/pawprint-1-1@2x.png"
                    mYPROFILE="MANAGE PETS"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propPadding="var(--padding-8xl) var(--padding-30xl) var(--padding-2xs) var(--padding-29xl)"
                    propPadding1="0px var(--padding-29xl) 0px var(--padding-32xl)"
                    propWidth1="167px"
                  />
                </div>
                <MyProfile
                  profile1="/location-2@2x.png"
                  mYPROFILE="ADDRESSES"
                  propAlignSelf="unset"
                  propWidth="266px"
                  propPadding="var(--padding-8xl) var(--padding-50xl) var(--padding-2xs) var(--padding-49xl)"
                  propPadding1="0px var(--padding-9xl) 0px var(--padding-12xl)"
                  propWidth1="127px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserMainPage;
