import { FunctionComponent, useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import PetListContainer from "../components/PetListContainer";
import "./ManagingPets.css";
import AuthService from "../services/auth.service";
import PetService from "../services/pet.service";
import axios from "axios";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate, Link } from "react-router-dom";
interface Pet {
  id: number;
  type: string;
  title: string;
  breed: string;
  base64String: string;
  user_id: number;
  price: number;
  color: string;
  available: string;
  createAt: string;
  admin_checked: string;
}

type PetRemove = {
  id: number;
  remove: string;
};
const ManagingPets: FunctionComponent = () => {
  const currentUser = AuthService.getCurrentUser();
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [removeCheck, setRemoveCheck] = useState<PetRemove[]>([]);

  // get pet data
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get<Pet[]>(
          "http://localhost:8080/api/showPet"
        );
        const responsePet = response.data.filter(
          (pet) =>
            pet.user_id === currentUser.id &&
            pet.available.toLowerCase() === "true"
        );

        setPets(responsePet || null);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // create a table to show data in UI
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
      render: (base64String) => (
        <img
          src={`data:image/png;base64,${base64String}`}
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
      title: "Admin Approved",
      dataIndex: "admin_checked",
      key: "admin_checked",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (text, record) => (
        <Link
          to={`/manage-pet/${record.id}`}
          style={{ marginLeft: "100px" }}
          // onClick={(e) =>
          //   handleCheckAvailable(
          //     record.id,
          //     (e.target as HTMLButtonElement).value
          //   )
          // }
          className={record.available ? "btn btn-success" : "btn btn-secondary"}
        >
          Edit
        </Link>
      ),
    },
    {
      title: "Remove",
      key: "Remove",
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

  const navigate = useNavigate();
  const handleEdit = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const handleSubmitRemove = () => {
    setSuccessful(false);
    setMessage("");
    console.log(removeCheck);
    axios
      .post("http://localhost:8080/api/userRemove", {
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

  return (
    <div className="managing-pets" style={{ marginTop: "50px" }}>
      <main className="user-container-parent">
        <div className="user-container">
          <div className="user-info">
            <div className="user-name-container">
              <div className="user-1-wrapper">
                <img
                  className="user-1-icon"
                  loading="lazy"
                  alt=""
                  src="/user-1@2x.png"
                />
              </div>
              <h2 className="user-name">Jack</h2>
            </div>
          </div>
          <FrameComponent />
        </div>
        {/* <section className="pet-list-container-wrapper">
          {pets.map((pet) => (
            <PetListContainer image={pet?.base64String} title={pet?.title} id={pet?.id} price={pet?.price} />
          ))}
        </section> */}
        {/* <section className="pet-list-container-wrapper">
          <div className={`pet-list-container`}>
            <div className="pet-list-header">
              <div className="pet-list-title">
                <h1 className="list-of-my">List of my Pets</h1>
              </div>
              <div className="upload-pet">
                <div className="upload-container">
                  <b className="upload-pet1">UPLOAD PET</b>
                </div>
              </div>
            </div>
            <div className="pet-table">
              <div className="lop-frame">
                <div className="table-header1">
                  <div className="number">
                    <div className="header-values">#</div>
                  </div>
                </div>
                <div className="table-row">
                  <div className="pet-details">
                    <div className="image2">
                      <div className="image3">Image</div>
                    </div>
                    <div className="title2">
                      <div className="title3">Title</div>
                    </div>
                    <div className="refid">
                      <div className="reference-id2">Reference ID</div>
                    </div>
                    <div className="price2">
                      <div className="price3">Price</div>
                    </div>
                    <div className="pageview">
                      <div className="page-views">Page Views</div>
                    </div>
                  </div>
                </div>
                <div className="pet-actions">
                  <div className="timestamp">
                    <div className="sold">
                      <div className="sold1">Sold</div>
                    </div>
                    <div className="createdon">
                      <div className="created-on2">Created On</div>
                    </div>
                    <input className="timestamp-child" type="text" />
                  </div>
                  <div className="action-items1"></div>
                </div>
              </div>
            </div>
          </div>
          {pets.map((pet) => (
            <PetListContainer
              image={pet?.base64String}
              title={pet?.title}
              type={pet?.type}
              price={pet?.price}
            />
          ))}
        </section> */}
        {/* <div className="container .container-xxl mt-4"> */}
        <Table columns={columns} dataSource={pets} rowKey="id" />
        {/* <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Reference ID</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Created On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`data:image/png;base64,${pet?.base64String}`}
                      alt={pet.title}
                      className="img-fixed"
                    />
                  </td>
                  <td>{pet.title}</td>
                  <td>{pet.id}</td>
                  <td>{pet.price}</td>
                  <td>{pet.available}</td>
                  <td>{pet.createAt}</td>
                  <td></td>
                  <td>
                    <button className="btn btn-link p-0">EDIT</button>
                    <button className="btn btn-link text-danger p-0">
                      REMOVE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        {/* </div> */}
        <button
          onClick={handleSubmitRemove}
          className="btn btn-danger"
          type="submit"
          style={{ marginTop: "300px" }}
        >
          Remove
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
      </main>
    </div>
  );
};

export default ManagingPets;
