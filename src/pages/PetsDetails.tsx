import { FunctionComponent, useEffect, useState } from "react";
import Content1 from "../components/Content1";
import "./PetsDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import PetCard from "../components/PetCard";
import HeaderTop from "../components/HeaderTop";
import Header2 from "../components/Header2";

interface Pet {
  id: number;
  type: string;
  title: string;
  breed: string;
  base64String: string;
  user_id: number;
  price: number;
  color: string;
  date_of_birth: string;
  first_name: string;
  microchiped: string;
  vaccinated: string;
  wormed_flead: string;
  health_checked: string;
  advertisement_type: string;
  contact_preference: string;
}

const PetsDetails: FunctionComponent = () => {
  const { productId } = useParams<{ productId: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      if (productId === undefined) {
        console.error("Invalid productId");
        setLoading(false);
        return;
      }

      const productIdNumber = parseInt(productId, 10);

      if (isNaN(productIdNumber)) {
        console.error("productId is not a valid number");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<Pet[]>(
          "http://localhost:8080/api/showPet"
        );
        const responsePet = response.data.find(
          (pet) => pet.id === productIdNumber
        );

        setPet(responsePet || null);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [productId]);

  return (
    <div className="pets-details">
      {/* <header className="header6">
        <div className="pawprint-1-wrapper3">
          <img
            className="pawprint-1-icon6"
            loading="lazy"
            alt=""
            src="/pawprint-1@2x.png"
          />
        </div>
        <div className="navigation1">
          <div className="home-menu">
            <div className="home-link1">
              <h1 className="petworld6">PetWorld</h1>
            </div>
            <h2 className="home6">Home</h2>
          </div>
        </div>
        <div className="about-menu">
          <h2 className="about-us6">About us</h2>
        </div>
        <div className="service-menu">
          <h2 className="service6">Service</h2>
        </div>
        <div className="search6">
          <div className="search-box6">
            <input
              className="im-searching-for3"
              placeholder="Im searching for?"
              type="text"
            />
          </div>
        </div>
        <div className="search-button1">
          <div className="search7">
            <img
              className="icon-search6"
              loading="lazy"
              alt=""
              src="/icon-search@2x.png"
            />
          </div>
        </div>
        <div className="account-menu-wrapper">
          <div className="account-menu">
            <div className="account-link1">
              <img
                className="image-1-icon6"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <b className="my-account6">My Account</b>
          </div>
        </div>
        <div className="cart-menu">
          <img
            className="shopping-cart-1-icon6"
            loading="lazy"
            alt=""
            src="/shoppingcart-1@2x.png"
          />
          <div className="cart-wrapper2">
            <b className="cart6">Cart</b>
          </div>
        </div>
      </header> */}
      {/* <HeaderTop /> */}
      {pet && (
        <Content1
          image={pet.base64String}
          type={pet.type}
          breed={pet.breed}
          title={pet.title}
          price={pet.price}
          id={pet.id}
          color={pet.color}
          date_of_birth={pet.date_of_birth}
          first_name={pet.first_name}
          user_id={pet.user_id}
          microchiped={pet.microchiped}
          vaccinated={pet.vaccinated}
          wormed_flead={pet.wormed_flead}
          health_checked={pet.health_checked}
          advertisement_type={pet.advertisement_type}
          contact_preference={pet.contact_preference}
        />
      )}
    </div>
    // <div className="pets-details">
    //   <PetCard
    //     breed={pet?.breed}
    //     price={pet?.price}
    //     image={pet?.base64String}
    //   />
    // </div>
  );
};

export default PetsDetails;
