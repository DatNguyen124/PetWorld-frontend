import { FunctionComponent, useState, useEffect } from "react";
import CustomerDetails from "../components/CustomerDetails";
import OrderItems from "../components/OrderItems";
import "./CheckOut.css";
import { useNavigate } from "react-router-dom";
import { useShoppingContext } from "../context/shoppingContext";
import { formatCurrency } from "../util/common/formatCurrency";
import { Link } from "react-router-dom";
import axios from "axios";
import authService from "../services/auth.service";
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

type Item = {
  id: number;
  qty: number;
  user_id: number;
  price: number;
};
const CheckOut: FunctionComponent = () => {
  const [users, setUsers] = useState<User>();
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const {
    cartItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeCartItem,
    clearCart,
  } = useShoppingContext();

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

  // get item shopping_cart that stored in localstorage and send to server
  const handlePlaceOrder = () => {
    const currentShoppingCart = authService.getCurrentShoppingCart();
    const extractedData = currentShoppingCart.map((item: Item) => ({
      id: item.id,
      qty: item.qty,
      user_id: item.user_id,
    }));
    const totalPrice = currentShoppingCart.reduce(
      (total: number, item: Item) => total + item.qty * item.price,
      0
    );
    console.log(extractedData);
    const result = {
      extractedData,
      totalPrice,
    };
    axios
      .post("http://localhost:8080/api/transaction", {
        extractedData,
        totalPrice,
      })
      .then(
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
    // <div className="check-out">
    //   <header className="header8">
    //     <div className="pawprint-1-wrapper5">
    //       <img
    //         className="pawprint-1-icon8"
    //         loading="lazy"
    //         alt=""
    //         src="/pawprint-1@2x.png"
    //       />
    //     </div>
    //     <div className="navigation2">
    //       <div className="home-menu1">
    //         <div className="home-link2">
    //           <h1 className="petworld8">PetWorld</h1>
    //         </div>
    //         <h3 className="home8">Home</h3>
    //       </div>
    //     </div>
    //     <div className="about-menu1">
    //       <h3 className="about-us8">About us</h3>
    //     </div>
    //     <div className="service-menu1">
    //       <h3 className="service8">Service</h3>
    //     </div>
    //     <div className="search9">
    //       <div className="search-bar2">
    //         <input
    //           className="search-box8"
    //           placeholder="Im searching for?"
    //           type="text"
    //         />
    //         <div className="search10">
    //           <img className="icon-search8" alt="" src="/icon-search@2x.png" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="account1">
    //       <div className="account-info4">
    //         <div className="account-image1">
    //           <img
    //             className="image-1-icon8"
    //             loading="lazy"
    //             alt=""
    //             src="/image-1@2x.png"
    //           />
    //         </div>
    //         <b className="my-account8">My Account</b>
    //       </div>
    //     </div>
    //     <div className="cart8">
    //       <img
    //         className="shopping-cart-1-icon8"
    //         loading="lazy"
    //         alt=""
    //         src="/shoppingcart-1@2x.png"
    //       />
    //       <div className="cart-label2">
    //         <b className="cart9">Cart</b>
    //       </div>
    //     </div>
    //   </header>
    //   <div className="checkout-menu">
    //     <h1 className="check-out1">Check Out</h1>
    //   </div>
    //   <section className="checkout-content">
    //     <div className="checkout-form">
    //
    //     </div>
    //     <div className="order">
    //       <div className="order-details">
    //         <b className="order-summary">Order Summary</b>
    //         <div className="edit-cart">Edit Cart</div>
    //       </div>
    //       <OrderItems />
    //     </div>
    //   </section>
    // </div>
    <div>
      {!successful && (
        <div className="row" style={{ marginTop: "15px" }}>
          {users && (
            <CustomerDetails
              first_name={users.first_name}
              last_name={users.last_name}
              email={users.email}
              phone_number={users.phone_number}
              city={users.city}
              country={users.country}
              postcode={users.postcode}
              address={users.address_line1}
            />
          )}

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={`data:image/png;base64,${item.base64String}`}
                        className="img-fluid rounded"
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>
                      {item.qty}
                      <button
                        type="button"
                        className="btn btn-sm btn-primary ms-3 me-1"
                        onClick={() => decreaseQty(item.id)}
                      >
                        <strong>-</strong>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => increaseQty(item.id)}
                      >
                        <strong>+</strong>
                      </button>
                    </td>
                    <td>{formatCurrency(item.price * item.qty)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger btn-remove"
                        onClick={() => removeCartItem(item.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="col-md-12">
            <span className="float-end me-2">
              <strong>Total: {formatCurrency(totalPrice)}</strong>
            </span>
          </div>
          <div className="col-md-12 mt-5">
            <Link to="/" className="btn btn-sm btn-primary float-start">
              Continue shopping
            </Link>
            <button
              className="btn btn-sm btn-success float-end me-2 d-block"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                clearCart();
                //navigate("/products");
                handlePlaceOrder();
              }}
            >
              Place Order
            </button>
          </div>
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
    </div>
  );
};

export default CheckOut;
