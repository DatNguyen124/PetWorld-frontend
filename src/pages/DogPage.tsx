import {
  FunctionComponent,
  useEffect,
  useState,
  ChangeEvent,
  useCallback,
} from "react";
import Header2 from "../components/Header2";
import FrameComponent1 from "../components/FrameComponent1";
import Dog from "../components/Dog";

import "./DogPage.css";
import axios from "axios";
import AuthService from "../services/auth.service";
import { Container, Row } from "react-bootstrap";
import { Buffer } from "buffer";
import PetCard from "../components/PetCard";
import { useShoppingContext } from "../context/shoppingContext";
import { useNavigate, Link } from "react-router-dom";
type ProductItem = {
  id: number;
  type: string;
  title: string;
  breed: string;
  base64String: string;
  user_id: number;
  price: number;
  admin_checked: string;
  available: string;
};

// type Pet = {
//   id: number
//   name: string
//   price: number
//   thumbnail: string
// }
const DogPage: FunctionComponent = () => {
  const { addCartItem } = useShoppingContext();
  const [pets, setPets] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const currentUser = AuthService.getCurrentUser();
  const [image, setImage] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [condition, setCondition] = useState("latest");
  const bufferToBase64 = (bufferObj: {
    type: "Buffer";
    data: number[];
  }): string => {
    const buffer = Buffer.from(bufferObj.data);
    return buffer.toString("base64");
  };

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       // Retrieve the stored user data from local storage
  //       const storedUserData = localStorage.getItem("user");
  //       if (!storedUserData) {
  //         setError("No user data found in local storage");
  //         return;
  //       }

  //       const parsedUserData = JSON.parse(storedUserData);
  //       if (!parsedUserData || !parsedUserData.id) {
  //         setError("Stored user data is invalid");
  //         return;
  //       }

  //       const storedUserId = parsedUserData.id;
  //       console.log(storedUserId);
  //       // Fetch users from the database
  //       const response = await axios.get("http://localhost:8080/api/showPet"); // Replace with your actual API endpoint
  //       const response_users = response.data;
  //       console.log(response_users);
  //       // Find the user with the matching email
  //       const matchedPets = response_users.filter(
  //         (pet: any) => pet.pet_type === "dog"
  //       );
  //       if (matchedPets) {
  //         setPets(matchedPets);
  //       } else {
  //         setError("No matching user found in the database");
  //       }
  //     } catch (error) {
  //       setError("Error fetching user data");
  //     }
  //   };

  //   fetchUser();
  // }, []);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get<ProductItem[]>(
          "http://localhost:8080/api/showPet"
        );
        const response_pet = response.data.filter(
          (pet: ProductItem) =>
            pet.type.toLowerCase() === "dog" &&
            pet.admin_checked.toLowerCase() === "true" &&
            pet.available.toLowerCase() === "true"
        );

        if (condition === "lowToHigh" || condition === "highToLow") {
          response_pet.sort((a, b) => {
            return condition === "lowToHigh"
              ? a.price - b.price
              : b.price - a.price;
          });
        }
        if (condition === "latest" || condition === "oldest") {
          response_pet.sort((a, b) => {
            return condition === "latest" ? b.id - a.id : a.id - b.id;
          });
        }
        if (condition === "atoz" || condition === "ztoa") {
          response_pet.sort((a, b) => {
            return condition === "atoz"
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);
          });
        }

        //const

        setPets(response_pet);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [condition]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result?.toString().split(",")[1];
      if (base64String) {
        setBase64Image(base64String);
        setImage(reader.result?.toString() || null);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // const navigate = useNavigate();
  // const handleViewDetail = useCallback(()=>{
  //   navigate("/")
  // })

  const handleConditionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCondition(e.target.value);
    console.log(condition);
  };
  return (
    <div className="dog-page">
      <div className="mb-3" style={{ marginLeft: "100px", marginTop: "100px" }}>
        <label htmlFor="sortOrder" className="form-label">
          Sort by Price:
        </label>
        <select
          id="sortOrder"
          className="form-select"
          value={condition}
          onChange={handleConditionChange}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
          <option value="atoz">Name : A - Z</option>
          <option value="ztoa">Name : Z - A</option>
        </select>
      </div>
      <section className="dog-page-inner">
        <div className="frame-parent">
          <div className="dog-parent">
            {pets.map((pet) => {
              return (
                <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img
                      src={`data:image/png;base64,${pet.base64String}`}
                      className="card-img-top"
                      alt={pet.type}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{pet.title}</h5>
                      <p className="card-text">${pet.price}</p>
                      <a
                        href="#"
                        className="btn btn-sm btn-success"
                        onClick={() => addCartItem(pet)}
                      >
                        <i className="fas fa-shopping-cart"></i>Add to Cart
                      </a>
                      <Link
                        to={`/products/${pet.id}`}
                        style={{ marginLeft: "100px" }}
                      >
                        {" "}
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>

    // <div className="row">
    //   <h3>Products</h3>
    //   {pets.map((pet) => {
    //     return (
    //       <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
    //         <div className="card">
    //           <img
    //             src={`data:image/png;base64,${pet.base64String}`}
    //             className="card-img-top"
    //             alt={pet.title}
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">{pet.title}</h5>
    //             <p className="card-text">${pet.price}</p>
    //             <a
    //               href="#"
    //               className="btn btn-sm btn-success"
    //               onClick={() => addCartItem(pet)}
    //             >
    //               <i className="fas fa-shopping-cart"></i>Add to Cart
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default DogPage;
