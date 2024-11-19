import { FunctionComponent, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import EmailAddress from "./EmailAddress";
import "./CreateAccount.css";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
export type CreateAccountType = {
  className?: string;
};

const CreateAccount: FunctionComponent<CreateAccountType> = ({
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
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

  // create condition when filling the form
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  // function for post data to sv when finish the form
  const handleRegister = (formValue: {
    email: string;
    password: string;
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
      password,
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

    setMessage("");
    setSuccessful(false);

    AuthService.register(
      email,
      password,
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

  return (
    <div className={`create-account1 ${className}`}>
      {/* Using Formik and Form to collect form data */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form>
          {!successful && (
            // <div>
            //   <div>
            //     <EmailAddress emailAddress="Email address:" />
            //     <label htmlFor="email"> Email </label>
            //     <Field name="country" type="text" className="form-control" />
            //   </div>
            //   <div className="password1">
            //     <TextField
            //       className="password-frame1"
            //       color="primary"
            //       variant="outlined"
            //       type={showPassword ? "text" : "password"}
            //       InputProps={{
            //         endAdornment: (
            //           <InputAdornment position="end">
            //             <IconButton
            //               onClick={handleShowPasswordClick}
            //               aria-label="toggle password visibility"
            //             >
            //               <Icon>
            //                 {showPassword ? "visibility_off" : "visibility"}
            //               </Icon>
            //             </IconButton>
            //           </InputAdornment>
            //         ),
            //       }}
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //     <div className="required12">REQUIRED</div>
            //     <div className="password2">Password:</div>
            //   </div>

            //   <div className="confirm-pass">
            //     <div className="required13">REQUIRED</div>
            //     <div className="confirm-password">Confirm Password:</div>
            //     <TextField
            //       className="confirmpass-frame"
            //       color="primary"
            //       variant="outlined"
            //       type={showPassword ? "text" : "password"}
            //       InputProps={{
            //         endAdornment: (
            //           <InputAdornment position="end">
            //             <IconButton
            //               onClick={handleShowPasswordClick}
            //               aria-label="toggle password visibility"
            //             >
            //               <Icon>
            //                 {showPassword ? "visibility_off" : "visibility"}
            //               </Icon>
            //             </IconButton>
            //           </InputAdornment>
            //         ),
            //       }}
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="first-name4">
            //     <div className="required14">REQUIRED</div>
            //     <div className="first-name5">First Name:</div>
            //     <TextField
            //       className="firstname-frame"
            //       color="primary"
            //       variant="outlined"
            //       type="text"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="last-name36">
            //     <div className="required15">REQUIRED</div>
            //     <div className="last-name37">Last Name:</div>
            //     <TextField
            //       className="lastname-frame"
            //       color="primary"
            //       variant="outlined"
            //       type="text"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="phone-number">
            //     <div className="required16">REQUIRED</div>
            //     <div className="phone-number1">Phone Number:</div>
            //     <TextField
            //       className="phone-frame"
            //       color="primary"
            //       variant="outlined"
            //       type="tel"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <EmailAddress
            //     emailAddress="Address Line 1:"
            //     propLeft="calc(50% + 56.5px)"
            //     propLeft1="calc(50% - 220.5px)"
            //   />
            //   <div className="address-line-2">
            //     <TextField
            //       className="password-frame2"
            //       color="primary"
            //       variant="outlined"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //     <div className="address-line-21">Address Line 2:</div>
            //   </div>

            //   <div className="city">
            //     <div className="required17">REQUIRED</div>
            //     <div className="city1">City:</div>
            //     <TextField
            //       className="city2"
            //       color="primary"
            //       variant="outlined"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="state-province">
            //     <div className="required18">REQUIRED</div>
            //     <div className="state-province1">State / Province:</div>
            //     <TextField
            //       className="stateprovince"
            //       color="primary"
            //       variant="outlined"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="postcode">
            //     <div className="required19">REQUIRED</div>
            //     <div className="postcode1">Postcode:</div>
            //     <TextField
            //       className="postcode-frame"
            //       color="primary"
            //       variant="outlined"
            //       type="number"
            //       sx={{
            //         "& .MuiInputBase-root": { height: "49px" },
            //         width: "406px",
            //       }}
            //     />
            //   </div>

            //   <div className="country">
            //     <div className="required20">REQUIRED</div>
            //     <div className="country1">Country:</div>
            //     <FormControl
            //       className="country-frame"
            //       variant="outlined"
            //       sx={{
            //         borderRadius: "0px 0px 0px 0px",
            //         width: "401px",
            //         height: "43px",
            //         m: 0,
            //         p: 0,
            //         "& .MuiInputBase-root": {
            //           m: 0,
            //           p: 0,
            //           minHeight: "43px",
            //           justifyContent: "center",
            //           display: "inline-flex",
            //         },
            //         "& .MuiInputLabel-root": {
            //           m: 0,
            //           p: 0,
            //           minHeight: "43px",
            //           display: "inline-flex",
            //         },
            //         "& .MuiMenuItem-root": {
            //           m: 0,
            //           p: 0,
            //           height: "43px",
            //           display: "inline-flex",
            //         },
            //         "& .MuiSelect-select": {
            //           m: 0,
            //           p: 0,
            //           height: "43px",
            //           alignItems: "center",
            //           display: "inline-flex",
            //         },
            //         "& .MuiInput-input": { m: 0, p: 0 },
            //         "& .MuiInputBase-input": {
            //           textAlign: "left",
            //           p: "0 !important",
            //         },
            //       }}
            //     >
            //       <InputLabel color="primary">Country</InputLabel>
            //       <Select
            //         color="primary"
            //         size="medium"
            //         label="Country"
            //         disableUnderline
            //         displayEmpty
            //       >
            //         <MenuItem value="Vietnam">Vietnam</MenuItem>
            //         <MenuItem value="China">China</MenuItem>
            //         <MenuItem value="Korea">Korea</MenuItem>
            //         <MenuItem value="Japan">Japan</MenuItem>
            //         <MenuItem value="Thailand">Thailand</MenuItem>
            //         <MenuItem value="Singapore">Singapore</MenuItem>
            //         <MenuItem value="Malaysia">Malaysia</MenuItem>
            //         <MenuItem value="Indonesia">Indonesia</MenuItem>
            //       </Select>
            //       <FormHelperText />
            //     </FormControl>
            //   </div>
            // </div>

            <div className="form-row">
              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="email">Email </label>
                <Field
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="password">Password </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="confirmPassWord">Confirm Password </label>
                <Field
                  name="confirmPassWord"
                  type="confirmPassWord"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmPassWord"
                  component="div"
                  className="alert alert-danger"
                />
              </div> */}

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="address_line1">Address Line 1</label>
                <Field
                  name="address_line1"
                  type="text"
                  className="form-control"
                  placeholder="Address Line 1"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="address_line2">Address Line 2 </label>
                <Field
                  name="address_line2"
                  type="text"
                  className="form-control"
                  placeholder="Address Line 2"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="first_name">First Name </label>
                <Field
                  name="first_name"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="last_name">Last Name </label>
                <Field
                  name="last_name"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="phone_number">Phone Number </label>
                <Field
                  name="phone_number"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="city">City </label>
                <Field
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="state_province">State / Province </label>
                <Field
                  name="state_province"
                  type="text"
                  className="form-control"
                  placeholder=" State / Province"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="country">Country </label>
                <Field
                  name="country"
                  type="text"
                  className="form-control"
                  placeholder=" Country"
                />
              </div>

              <div
                className="form-group col-md-6"
                style={{ marginLeft: "400px" }}
              >
                <label htmlFor="postcode">Postcode </label>
                <Field
                  name="postcode"
                  type="text"
                  className="form-control"
                  placeholder=" Postcode"
                />
              </div>

              <button type="submit" className="btn btn-custom  btn-block">
                Create Account
              </button>
            </div>
          )}
          {message && (
            <div className="form-group">
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
    </div>
  );
};

export default CreateAccount;
