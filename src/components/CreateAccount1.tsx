import { FunctionComponent } from "react";
import ConfirmPasswordPair from "./ConfirmPasswordPair";
import GroupComponent from "./GroupComponent";
import "./CreateAccount1.css";

export type CreateAccount1Type = {
  className?: string;
};

const CreateAccount1: FunctionComponent<CreateAccount1Type> = ({
  className = "",
}) => {
  return (
    <section className={`create-account3 ${className}`}>
      <div className="upload-pets-wrapper">
        <h1 className="upload-pets1">Upload Pets</h1>
      </div>
      <div className="info-fields-parent">
        <div className="info-fields">
          <div className="information2">
            <div className="first-name-row">
              <div className="first-name-input">
                <div className="first-name-field">
                  <div className="first-name-parent">
                    <div className="first-name6">Pets Type</div>
                    <div className="first-name-frame">
                      <div className="first-name7">
                        <div className="first-name8">Choose Pets Type</div>
                        <img
                          className="downward-arrow-2-icon1"
                          alt=""
                          src="/downwardarrow-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="last-name-row">
                    <div className="last-name46">Pets Breed</div>
                    <div className="last-name-input2">
                      <div className="last-name47">
                        <img
                          className="downward-arrow-3-icon1"
                          alt=""
                          src="/downwardarrow-3@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-row">
                  <div className="email-input">
                    <div className="last-name48">Pets Title</div>
                    <div className="email-field">
                      <div className="last-name-frame">
                        <div className="last-name49">
                          <input
                            className="last-name50"
                            placeholder="Pets Title"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="email">Location</div>
                    </div>
                  </div>
                  <div className="confirm-email-input">
                    <div className="last-name51">Pets Color</div>
                    <div className="confirm-email-field">
                      <div className="last-name52">
                        <div className="confirm-email-input-box">
                          <div className="last-name53">Choose Pets Color</div>
                        </div>
                        <img
                          className="downward-arrow-3-icon2"
                          alt=""
                          src="/downwardarrow-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="email-input1">
              <div className="email1">
                <input className="email2" placeholder="Location" type="text" />
              </div>
              <div className="phone-numbers">
                <div className="phone-number-trio">
                  <div className="phone">Price</div>
                  <div className="phone-wrapper">
                    <div className="phone1">
                      <input
                        className="phone2"
                        placeholder="Price  of the pet"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="phone-number-trio1">
                  <div className="phone3">Seller Phone</div>
                  <div className="phone-container">
                    <div className="phone4">
                      <div className="phone5">+84948389321</div>
                    </div>
                  </div>
                </div>
                <div className="phone-number-trio2">
                  <div className="phone6">Seller Name</div>
                  <div className="phone-wrapper1">
                    <div className="phone7">
                      <input
                        className="phone8"
                        placeholder="Jack"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="password-label">
              <div className="pass">Description:</div>
            </div>
            <textarea
              className="pass1"
              placeholder="Please enter description about the pet"
              rows={9}
              cols={51}
            />
            <div className="confirm-password1">
              <div className="confirm-password-fields">
                <div className="confirm-password-pair-parent">
                  <div className="confirm-password-pair1">
                    <div className="last-name54">Advertisement Type</div>
                    <div className="last-name55">Contact Preference</div>
                  </div>
                  <div className="confirm-password-set-wrapper">
                    <div className="confirm-password-set">
                      <div className="last-name56">
                        <input
                          className="last-name57"
                          placeholder="Advertisement Type (Sale, Adoption, or Stud)"
                          type="text"
                        />
                      </div>
                      <div className="last-name58">
                        <input
                          className="last-name59"
                          placeholder="Email or Phone or Email and Phone"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ConfirmPasswordPair
                  lastName="Weight"
                  lastNamePlaceholder="Date of Birth"
                  lastNamePlaceholder1="Weight"
                />
                <ConfirmPasswordPair
                  lastName="Female"
                  lastNamePlaceholder="0 - 10"
                  lastNamePlaceholder1="0 - 10"
                  propPadding="unset"
                  propPadding1="var(--padding-3xs) var(--padding-lg) var(--padding-sm)"
                  propWidth="120px"
                  propPadding2="var(--padding-3xs) var(--padding-mid) var(--padding-sm)"
                />
              </div>
              <div className="last-name60">
                <input
                  className="last-name61"
                  placeholder="Attach URL for video"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="confirm-password-field">
            <div className="last-name62">
              <div className="last-name63">
                Click/Drag to upload pets image of size below 2MB. Recommended
                resolution 640 x 460px [Maximum 15 Pictures]
              </div>
            </div>
          </div>
          <div className="create-account-button-containe">
            <div className="create-account-button5">
              <div className="login-frame15">
                <b className="upload-pet2">UPLOAD PET</b>
              </div>
            </div>
          </div>
        </div>
        <div className="last-name64">
          <div className="last-name-label-group">
            <div className="last-name-label1">
              <div className="last-name65">Microchiped</div>
            </div>
            <div className="input-icons">
              <div className="icon-pair">
                <img
                  className="dry-clean-1-icon"
                  loading="lazy"
                  alt=""
                  src="/dryclean-1@2x.png"
                />
                <div className="last-name66">Yes</div>
              </div>
              <div className="icon-pair1">
                <img
                  className="dry-clean-2-icon"
                  loading="lazy"
                  alt=""
                  src="/dryclean-1@2x.png"
                />
                <div className="last-name67">No</div>
              </div>
            </div>
          </div>
          <div className="last-name-inner">
            <GroupComponent lastName="Vaccinated" />
          </div>
          <div className="last-name-child">
            <div className="group-div">
              <div className="last-name68">Wormed/Flead</div>
              <div className="input-fields1">
                <div className="input-icons1">
                  <div className="icon-pair2">
                    <img
                      className="dry-clean-4-icon"
                      loading="lazy"
                      alt=""
                      src="/dryclean-1@2x.png"
                    />
                    <div className="last-name69">Yes</div>
                  </div>
                  <div className="icon-pair3">
                    <img
                      className="dry-clean-3-icon"
                      loading="lazy"
                      alt=""
                      src="/dryclean-1@2x.png"
                    />
                    <div className="last-name70">No</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GroupComponent
            lastName="Health Check"
            propAlignSelf="unset"
            propWidth="177px"
            propPadding="0px 0px var(--padding-10xs)"
          />
        </div>
      </div>
      <div className="last-name71">Video (URL)</div>
      <div className="last-name72">DOB</div>
      <div className="last-name73">Litter Type</div>
      <div className="last-name74">Male</div>
    </section>
  );
};

export default CreateAccount1;
