import { FunctionComponent, useState, useCallback, Component } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";
import "./SignIn.css";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import { Formik, Field, Form, ErrorMessage } from "formik";
// export type SignInType = {
//   className?: string;
// };
type Props = {};

type State = {
  redirect: string | null;
  password: string;
  loading: boolean;
  message: string;
  email: string;
};
// const SignIn: FunctionComponent<SignInType> = ({ className = "" }) => {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const navigate = useNavigate();
//   const handleShowPasswordClick = () => {
//     setShowPassword(!showPassword);
//   };

//   const onLoginButtonClick = useCallback(() => {
//     navigate("/user-main-page");
//   }, [navigate]);

//   return (
//     <div className={`sign-in1 ${className}`}>
//       <TextField
//         className="username-frame"
//         color="primary"
//         size="medium"
//         placeholder="Email"
//         variant="outlined"
//         type="email"
//         sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
//       />
//       <TextField
//         className="password-frame"
//         color="primary"
//         placeholder="Password"
//         variant="filled"
//         type={showPassword ? "text" : "password"}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton
//                 onClick={handleShowPasswordClick}
//                 aria-label="toggle password visibility"
//               >
//                 <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//         sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
//       />
//       <div className="email-address">Email address:</div>
//       <div className="password">Password:</div>
//       <button className="login-button1" onClick={onLoginButtonClick}>
//         <div className="login-frame10" />
//         <b className="sign-in2">SIGN IN</b>
//       </button>
//       <div className="forgotpass">
//         <div className="forgot-your-password">FORGOT YOUR PASSWORD?</div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

export default class SignIn extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      redirect: null,
      email: "",
      password: "",
      loading: false,
      message: "",
      //showPassword: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  // handleShowPasswordClick = () => {
  //   this.setState((prevState) => ({
  //     showPassword: !prevState.showPassword,
  //   }));
  // };

  // onLoginButtonClick = () => {
  //   this.props.navigate("/user-main-page");
  // };

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      this.setState({ redirect: "/user-main-page" });
    }
  }

  componentWillUnmount() {
    window.location.reload();
  }

  // condition require email and password to login
  validationSchema() {
    return Yup.object().shape({
      email: Yup.string().required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    });
  }

  handleLogin(formValue: { email: string; password: string }) {
    const { email, password } = formValue;

    this.setState({
      message: "",
      loading: true,
    });

    AuthService.login(email, password).then(
      () => {
        this.setState({
          redirect: "/my-profile-page",
        });
        // if login complete -> jump to /"my-profile-page"
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    //const { showPassword } = this.state;

    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    const { loading, message } = this.state;

    const initialValues = {
      email: "",
      password: "",
    };

    return (
      // <div className={`sign-in1 ${className}`}>
      //   <TextField
      //     className="username-frame"
      //     color="primary"
      //     size="medium"
      //     placeholder="Email"
      //     variant="outlined"
      //     type="email"
      //     sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
      //   />
      //   <TextField
      //     className="password-frame"
      //     color="primary"
      //     placeholder="Password"
      //     variant="filled"
      //     type={showPassword ? "text" : "password"}
      //     InputProps={{
      //       endAdornment: (
      //         <InputAdornment position="end">
      //           <IconButton
      //             onClick={this.handleShowPasswordClick}
      //             aria-label="toggle password visibility"
      //           >
      //             <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
      //           </IconButton>
      //         </InputAdornment>
      //       ),
      //     }}
      //     sx={{ "& .MuiInputBase-root": { height: "49px" }, width: "406px" }}
      //   />
      //   <div className="email-address">Email address:</div>
      //   <div className="password">Password:</div>
      //   <button className="login-button1" onClick={this.onLoginButtonClick}>
      //     <div className="login-frame10" />
      //     <b className="sign-in2">SIGN IN</b>
      //   </button>
      //   <div className="forgotpass">
      //     <div className="forgot-your-password">FORGOT YOUR PASSWORD?</div>
      //   </div>
      // </div>

      <div className="col-md-12">
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleLogin}
        >
          <Form>
            <div className="form-group" style={{ marginTop: "500px" }}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className="form-control-sm"
                style={{ marginRight: "500px" }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div
              className="form-group"
              style={{ marginRight: "550px", marginTop: "25px" }}
            >
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className="form-control-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-custom "
                disabled={loading}
                style={{ marginRight: "450px", marginTop: "50px" }}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    );
  }
}
