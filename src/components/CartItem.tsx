import React from "react";
import { useShoppingContext } from "../context/shoppingContext";
import { formatCurrency } from "../util/common/formatCurrency";

type CartItemProps = {
  id: number;
  title: string;
  price: number;
  qty: number;
  base64String: string;
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
const CartItem = ({ id, title, price, qty, base64String }: CartItemProps) => {
  const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext();

  return (
    <tr>
      <td>
        <img
          src={`data:image/png;base64,${base64String}`}
          className="img-fluid rounded"
          alt="Product 1"
        />
      </td>
      <td>
        <span className="item-name">{title}</span>
      </td>
      <td>
        <span className="item-quantity">
          {formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {qty}
        </span>
        <button
          type="button"
          className="btn btn-sm btn-primary ms-4 me-1"
          onClick={() => decreaseQty(id)}
        >
          <strong>-</strong>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => increaseQty(id)}
        >
          <strong>+</strong>
        </button>
      </td>
      <td>
        <span className="item-price">{formatCurrency(qty * price)}</span>
      </td>
      <td>
        <button
          className="btn btn-sm btn-danger btn-remove"
          onClick={() => removeCartItem(id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
