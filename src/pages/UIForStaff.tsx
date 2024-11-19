import { FunctionComponent } from "react";
import UserDropdown from "../components/UserDropdown";
import SellerTable from "../components/SellerTable";
import "./UIForStaff.css";

const UIForStaff: FunctionComponent = () => {
  return (
    <div className="ui-for-staff">
      <header className="header2">
        <div className="pawprint-1-container">
          <img
            className="pawprint-1-icon2"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="nav">
          <div className="home-link">
            <div className="petworld-wrapper">
              <h1 className="petworld2">PetWorld</h1>
            </div>
            <h2 className="home2">Home</h2>
          </div>
        </div>
        <div className="about">
          <h2 className="about-us2">About us</h2>
        </div>
        <div className="service-link">
          <h2 className="service2">Service</h2>
        </div>
        <div className="search-input">
          <div className="search-box2">
            <input
              className="im-searching-for1"
              placeholder="Im searching for?"
              type="text"
            />
          </div>
        </div>
        <div className="search-button">
          <div className="search2">
            <img
              className="icon-search2"
              loading="lazy"
              alt=""
              src="/icon-search@2x.png"
            />
          </div>
        </div>
        <div className="account">
          <div className="account-info2">
            <div className="account-details1">
              <img
                className="image-1-icon2"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account2">My Account</b>
          </div>
        </div>
        <div className="cart-button">
          <img
            className="shopping-cart-1-icon2"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-wrapper">
            <b className="cart2">Cart</b>
          </div>
        </div>
      </header>
      <main className="user-menu">
        <UserDropdown />
        <section className="content1">
          <div className="sellers-list">
            <div className="sellers-header">
              <div className="sellers-title">
                <h1 className="list-of-sellers">{`List of Sellers `}</h1>
              </div>
              <div className="create-account-button1">
                <div className="login-frame2">
                  <b className="pending-posts1">PENDING POSTS</b>
                </div>
              </div>
            </div>
            <div className="seller-details">
              <div className="my-profile2">
                <div className="table-labels">
                  <div className="label-row">
                    <div className="seller-name-image">#</div>
                  </div>
                  <div className="label-row1">
                    <div className="seller-name1">Seller name</div>
                  </div>
                  <div className="label-row2">
                    <div className="image1">Image</div>
                  </div>
                  <div className="label-row3">
                    <div className="title1">Title</div>
                  </div>
                  <div className="label-row4">
                    <div className="reference-id1">Reference ID</div>
                  </div>
                  <div className="label-row5">
                    <div className="price1">Price</div>
                  </div>
                  <div className="label-row6">
                    <div className="status1">Status</div>
                  </div>
                  <div className="label-row7">
                    <div className="created-on1">Created On</div>
                  </div>
                  <input className="empty-row" type="text" />
                </div>
                <SellerTable
                  emptyCell="1"
                  sellerNamePlaceholder="John Weak"
                  alaskanMalamuteSledDog1="/alaskanmalamutesleddog-1@2x.png"
                  locationPlaceholder="Alaska"
                  pETSMOJ3B="PETSMOJ3B"
                  pricePlaceholder="700$"
                  aPPROVED="APPROVED"
                  prop="03-06-2024"
                  pM="05:12 PM"
                />
                <SellerTable
                  emptyCell="2"
                  sellerNamePlaceholder="Jack White"
                  alaskanMalamuteSledDog1="/britishshorthair1-1@2x.png"
                  locationPlaceholder="British Shorthair Cat"
                  pETSMOJ3B="PETSCAY7A"
                  pricePlaceholder="500$"
                  aPPROVED="REJECTED"
                  prop="15-04-2024"
                  pM="08:12 AM"
                  propFlex="0.5385"
                  propPadding="var(--padding-43xl) var(--padding-20xl)"
                  propWidth="calc(100% - 13px)"
                  propFlex1="0.8935"
                  propPadding1="var(--padding-40xl) var(--padding-4xs)"
                  propPadding2="var(--padding-50xl) var(--padding-mid)"
                />
                <div className="seller-table">
                  <div className="frame">
                    <div className="div1">3</div>
                  </div>
                  <textarea
                    className="seller-table-child"
                    placeholder="Jack White"
                    rows={8}
                    cols={9}
                  />
                  <div className="frame-div">
                    <img
                      className="icon1"
                      loading="lazy"
                      alt=""
                      src="/202301231036531832546-2@2x.png"
                    />
                  </div>
                  <textarea
                    className="seller-table-item"
                    placeholder="Mix Colours Pug"
                    rows={8}
                    cols={9}
                  />
                  <div className="peptdyztjt-container">
                    <div className="peptdyztjt1">PEPTDYZTJT</div>
                  </div>
                  <textarea
                    className="seller-table-inner"
                    placeholder="500$"
                    rows={8}
                    cols={9}
                  />
                  <div className="rejected-wrapper">
                    <div className="rejected">REJECTED</div>
                  </div>
                  <div className="am-container">
                    <div className="am2">
                      <p className="p1">02-02-2023</p>
                      <p className="am3">08:12 AM</p>
                    </div>
                  </div>
                  <div className="edit-button-wrapper">
                    <div className="edit-button">
                      <div className="login-frame3">
                        <div className="remove">REMOVE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination1">
                <div className="next-button">
                  <div className="next-details">
                    <div className="empty-pagination">
                      <div className="empty-cell">1</div>
                      <div className="empty-cell1">2</div>
                      <div className="empty-cell2">...</div>
                    </div>
                  </div>
                  <div className="nextframe">
                    <div className="next1">Next</div>
                    <div className="nextarrow-container">
                      <img
                        className="nextarrow-icon1"
                        loading="lazy"
                        alt=""
                        src="/nextarrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UIForStaff;
