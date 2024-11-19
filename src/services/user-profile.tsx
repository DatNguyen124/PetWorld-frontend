import axios from "axios";

const API_URL = "http://localhost:8080/api/";
class userProfile {
  updateInfo(
    user_id: number,
    email: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    address_line1: string,
    address_line2: string,
    city: string,
    state_province: string,
    country: string,
    postcode: string
  ) {
    return axios.post(API_URL + "updateUserInfo", {
      user_id,
      email,
      first_name,
      last_name,
      phone_number,
      address_line1,
      address_line2,
      city,
      state_province,
      country,
      postcode,
    });
  }
}

export default new userProfile();
