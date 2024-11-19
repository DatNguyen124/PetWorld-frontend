import { FunctionComponent, useEffect, useState } from "react";
import UserDropdown from "../components/UserDropdown";
import PostItem from "../components/PostItem";
import "./StaffUIForConfirmSellerPe.css";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import PetService from "../services/pet.service";
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
  available: string;
  admin_checked: string;
}

type PetAvailable = {
  id: number;
  available: string;
};

type PetRemove = {
  id: number;
  remove: string;
};
const StaffUIForConfirmSellerPe: FunctionComponent = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [condition, setCondition] = useState("latest");
  const [availableCheck, setAvailableCheck] = useState<PetAvailable[]>([]);
  const [removeCheck, setRemoveCheck] = useState<PetRemove[]>([]);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get<Pet[]>(
          "http://localhost:8080/api/showPet"
        );
        const response_pet = response.data.filter(
          (pet: Pet) => pet.admin_checked.toLowerCase() !== "true"
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
  }, []);

  const columns: ColumnsType<Pet> = [
    {
      title: "Seller Name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Image",
      dataIndex: "base64String",
      key: "base64String",
      render: (image) => (
        <img
          src={`data:image/png;base64,${image}`}
          alt="pet"
          style={{ width: "100px" }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Approve",
      dataIndex: "Approve",
      key: "Approve",
      render: (text, record) => (
        <input
          onClick={(e) =>
            handleCheckAvailable(
              record.id,
              (e.target as HTMLButtonElement).value
            )
          }
          className="form-check-label"
          type="checkbox"
        >
          {/* {record.available ? "Available" : "Check"} */}
        </input>
      ),
    },
    {
      title: "Reject",
      key: "Reject",
      render: (text, record) => (
        <input
          onClick={(e) =>
            handleRemove(record.id, (e.target as HTMLButtonElement).value)
          }
          className="form-check-label"
          type="checkbox"
        >
          {/* {record.available ? "Available" : "Check"} */}
        </input>
      ),
    },
  ];

  // function to add selected pet to be checked by admin ( this structure used for check box )
  const handleCheckAvailable = (id: number, available: string) => {
    setAvailableCheck((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, available }];
      }
    });
  };

  // send checked data to sv to update
  const handleSubmitAvailable = () => {
    axios
      .post("http://localhost:8080/api/adminCheck", {
        availableCheck,
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
  // const handleRemove = (id: number, remove: string) => {
  //   setRemoveCheck([...removeCheck, { id, remove: remove }]);
  // };

  // function to add selected pet to removed ( this structure used for check box )
  const handleRemove = (id: number, remove: string) => {
    setRemoveCheck((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.filter((item) => item.id !== id);
      } else {
        return [...prev, { id, remove }];
      }
    });
    console.log(removeCheck);
  };

  // send list of pet in removeCheck to sv to remove from database
  const handleSubmitRemove = () => {
    console.log(removeCheck);
    axios
      .post("http://localhost:8080/api/adminRemove", {
        removeCheck,
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
  // return (
  //   <div className="staff-ui-for-confirm-seller-pe">
  //     <header className="header1">
  //       <div className="logo-container">
  //         <img
  //           className="pawprint-1-icon1"
  //           loading="lazy"
  //           alt=""
  //           src="/pawprint-1@2x.png"
  //         />
  //       </div>
  //       <div className="navigation">
  //         <div className="home-links-parent">
  //           <div className="home-links1">
  //             <h1 className="petworld1">PetWorld</h1>
  //           </div>
  //           <h2 className="home1">Home</h2>
  //         </div>
  //       </div>
  //       <div className="about-us-container">
  //         <h2 className="about-us1">About us</h2>
  //       </div>
  //       <div className="service-container">
  //         <h2 className="service1">Service</h2>
  //       </div>
  //       <div className="search-bar-wrapper">
  //         <div className="search-bar">
  //           <input
  //             className="search-box1"
  //             placeholder="Im searching for?"
  //             type="text"
  //           />
  //           <div className="search1">
  //             <img className="icon-search1" alt="" src="/icon-search@2x.png" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="account-link-wrapper">
  //         <div className="account-link">
  //           <div className="account-info1">
  //             <img
  //               className="image-1-icon1"
  //               loading="lazy"
  //               alt=""
  //               src="/image-1@2x.png"
  //             />
  //           </div>
  //           <b className="my-account1">My Account</b>
  //         </div>
  //       </div>
  //       <div className="shopping-cart-1-group">
  //         <img
  //           className="shopping-cart-1-icon1"
  //           loading="lazy"
  //           alt=""
  //           src="/shoppingcart-1@2x.png"
  //         />
  //         <div className="cart-label1">
  //           <b className="cart1">Cart</b>
  //         </div>
  //       </div>
  //     </header>
  //     <main className="user-dropdown-parent">
  //       <UserDropdown />
  //       <section className="content">
  //         <div className="pending-posts-parent">
  //           <h1 className="pending-posts">Pending Posts</h1>
  //           <div className="posts">
  //             <div className="my-profile1">
  //               <div className="table-header">
  //                 <div className="table-header-cells">
  //                   <div className="table-header-labels">#</div>
  //                 </div>
  //                 <div className="table-header-cells1">
  //                   <div className="seller-name">Seller name</div>
  //                 </div>
  //                 <div className="table-header-cells2">
  //                   <div className="image">Image</div>
  //                 </div>
  //                 <div className="table-header-cells3">
  //                   <div className="title">Title</div>
  //                 </div>
  //                 <div className="table-header-cells4">
  //                   <div className="reference-id">Reference ID</div>
  //                 </div>
  //                 <div className="table-header-cells5">
  //                   <div className="price">Price</div>
  //                 </div>
  //                 <div className="table-header-cells6">
  //                   <div className="status">Status</div>
  //                 </div>
  //                 <div className="table-header-cells7">
  //                   <div className="created-on">Created On</div>
  //                 </div>
  //                 <input className="table-content" type="text" />
  //               </div>
  //               <PostItem
  //                 postImage="1"
  //                 frame23Placeholder="John Weak"
  //                 alaskanMalamuteSledDog1="/alaskanmalamutesleddog-1@2x.png"
  //                 frame25Placeholder="Alaska"
  //                 pETSMOJ3B="PETSMOJ3B"
  //                 frame27Placeholder="700$"
  //                 pENDING="PENDING "
  //                 prop="03-06-2024"
  //                 pM="05:12 PM"
  //               />
  //               <PostItem
  //                 postImage="2"
  //                 frame23Placeholder="Jack White"
  //                 alaskanMalamuteSledDog1="/britishshorthair1-1@2x.png"
  //                 frame25Placeholder="British Shorthair Cat"
  //                 pETSMOJ3B="PETSCAY7A"
  //                 frame27Placeholder="500$"
  //                 pENDING="PENDING"
  //                 prop="15-04-2024"
  //                 pM="08:12 AM"
  //                 propFlex="0.5385"
  //                 propPadding="var(--padding-43xl) var(--padding-20xl)"
  //                 propWidth="calc(100% - 13px)"
  //                 propFlex1="0.8935"
  //                 propPadding1="var(--padding-40xl) var(--padding-4xs)"
  //                 propPadding2="var(--padding-50xl) var(--padding-mid)"
  //               />
  //               <div className="post-item">
  //                 <div className="wrapper">
  //                   <div className="div">3</div>
  //                 </div>
  //                 <textarea
  //                   className="post-item-child"
  //                   placeholder="Jack White"
  //                   rows={8}
  //                   cols={9}
  //                 />
  //                 <div className="container">
  //                   <img
  //                     className="icon"
  //                     loading="lazy"
  //                     alt=""
  //                     src="/202301231036531832546-2@2x.png"
  //                   />
  //                 </div>
  //                 <textarea
  //                   className="post-item-item"
  //                   placeholder="Mix Colours Pug"
  //                   rows={8}
  //                   cols={9}
  //                 />
  //                 <div className="peptdyztjt-wrapper">
  //                   <div className="peptdyztjt">PEPTDYZTJT</div>
  //                 </div>
  //                 <textarea
  //                   className="post-item-inner"
  //                   placeholder="500$"
  //                   rows={8}
  //                   cols={9}
  //                 />
  //                 <div className="pending-wrapper">
  //                   <div className="pending">PENDING</div>
  //                 </div>
  //                 <div className="am-wrapper">
  //                   <div className="am">
  //                     <p className="p">02-02-2023</p>
  //                     <p className="am1">08:12 AM</p>
  //                   </div>
  //                 </div>
  //                 <div className="approve-button-parent">
  //                   <div className="approve-button">
  //                     <div className="login-frame">
  //                       <div className="approve">APPROVE</div>
  //                     </div>
  //                   </div>
  //                   <div className="reject-button">
  //                     <div className="login-frame1">
  //                       <div className="reject">REJECT</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="pagination">
  //               <div className="current-page">
  //                 <div className="current-page-number">
  //                   <div className="current-page-label">1</div>
  //                   <div className="current-page-label1">2</div>
  //                   <div className="current-page-label2">...</div>
  //                 </div>
  //               </div>
  //               <div className="next-page">
  //                 <div className="next">Next</div>
  //                 <div className="nextarrow-wrapper">
  //                   <img
  //                     className="nextarrow-icon"
  //                     loading="lazy"
  //                     alt=""
  //                     src="/nextarrow@2x.png"
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </main>
  //   </div>
  // );
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          dataSource={pets}
          rowKey="id"
          style={{ marginTop: "50px" }}
        />
      )}

      <button
        onClick={handleSubmitAvailable}
        className="btn btn-primary"
        type="submit"
      >
        Approved
      </button>

      <button
        onClick={handleSubmitRemove}
        className="btn btn-danger"
        type="submit"
        style={{ marginLeft: "50px" }}
      >
        Reject
      </button>
      {message && (
        <div
          className="form-group"
          style={{ marginLeft: "200px", marginTop: "15px" }}
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

export default StaffUIForConfirmSellerPe;
