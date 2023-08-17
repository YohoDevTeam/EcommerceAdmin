import React, { useEffect } from "react";
import { Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Card } from "react-bootstrap";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import Button from "react-bootstrap/Button";

import { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillDownCircle } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Dropdown from "react-bootstrap/Dropdown";
import { BiSearch } from "react-icons/bi";
import { CarCrash } from "@mui/icons-material";
import axios from "axios";

const Carousel = () => {
  //Hooks

  const [carouselName, setCarouselName] = useState("");
  const [carouselImage, setCarouselImage] = useState();
  const [carouselDescription, setCarouselDescription] = useState("");
  const [carouselStatus, setCarouselStatus] = useState("");
  const [carousel, setCarousel] = useState([]);
  const [selectedCarousel, setSelectedCarousel] = useState("");
  const [editedCarouselName, setEditedCarouselName] = useState("");
  const [editedCarouselImage, setEditedCarouselImage] = useState();
  const [editedCarouselDescription, setEditedCarouselDescription] =
    useState("");
  const [editedCarouselStatus, setEditedCarouselStatus] = useState("");
  const API_URL = "http://192.168.29.102:8000/api/admin/categories/create";
  const token = localStorage.getItem("token");

  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const statusRef = useRef(null);
  const descriptionRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = carousel?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getAllCarousel();
  }, []);

  const getAllCarousel = async () => {
    const res = await axios.get(
      `https://www.bictree.xyz/api/admin/carousel/listAll`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res.data.data);
    setCarousel(res.data.data);
  };

  const handleDeleteCarousel = async () => {
    const data = JSON.stringify({
      carousel_id: selectedCarousel?.carousel_id,
    });

    // const res = await axios.delete(
    //   `http://192.168.29.102:8000/api/admin/carousel/delete`,
    //   data,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + token,
    //     },
    //   }
    // );
    // console.log(res);
    let config = {
      method: "delete",
      url: "https://www.bictree.xyz/api/admin/carousel/delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    };
    axios
      .request(config)
      .then((res) => {
        console.log(res.data);
        getAllCarousel();
        handleRemoveModel();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAddCarousel = async () => {
    const form = new FormData();
    form.append("title", carouselName);
    form.append("carousel_image", carouselImage);
    form.append("caption", carouselDescription);
    form.append("is_active", carouselStatus);

    const res = await axios.post(
      `https://www.bictree.xyz/api/admin/carousel/create`,
      form,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res);
    getAllCarousel();
    setCancelModel1(false);
    setAddModel(false);
    handleModel();
  };

  const handleEditCarousel = async () => {
    const form = new FormData();
    form.append(
      "title",
      // editedCarouselName == "" ? selectedCarousel?.title :
      editedCarouselName
    );
    form.append("carousel_id", selectedCarousel?.carousel_id);
    form.append("carousel_image", editedCarouselImage);
    form.append(
      "caption",
      editedCarouselDescription
      // == ""
      //   ? selectedCarousel?.caption
      //   : editedCarouselDescription
    );
    form.append(
      "is_active",
      editedCarouselStatus
      // == ""
      //   ? selectedCarousel?.is_active
      //   : editedCarouselStatus
    );

    const res = await axios.post(
      `https://www.bictree.xyz/api/admin/carousel/update`,
      form,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(res);
    // setEditModel(false);
    setCancelModel1(false);
    handleCloseModel();
    setSelectedCarousel("");
    setEditedCarouselImage("");
    setEditedCarouselName("");
    setEditedCarouselDescription("");
    setEditedCarouselStatus("");
    getAllCarousel();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const ITEM_HEIGHT = 48;
  console.log(selectedCarousel);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setSelectedCarousel(item);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpenModel = () => {
    setOpenModel(true);
    handleClose();
  };
  const handleCloseModel = () => {
    nameRef.current.value = "";
    statusRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";
    setOpenModel(false);
  };

  const [DeleteModel, setDeleteModel] = React.useState(false);
  const handleDeleteModel = () => {
    setDeleteModel(true);
    handleClose();
  };
  const handleRemoveModel = () => setDeleteModel(false);

  const [CancelModel, setCancelModel] = React.useState(false);
  const handleCancelModel = () => {
    setCancelModel(true);
    handleClose();
  };
  const handleModel = () => setCancelModel(false);

  const [AddModel, setAddModel] = React.useState(false);
  const handleAddModel = () => {
    setAddModel(true);
    handleClose();
  };
  const handleAddiModel = () => {
    setAddModel(false);
    handleModel();
  };

  const [CancelModel1, setCancelModel1] = React.useState(false);
  const handleCancelModel1 = () => {
    setCancelModel1(true);
    handleClose();
  };
  const handleModel1 = () => {
    setCancelModel1(false);
    handleCloseModel();
  };

  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div style={{ backgroundColor: "#F5F5F5", overflowX: "hidden" }}>
            <Modal
              keepMounted
              open={openModel}
              onClose={handleCloseModel}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Edit Carousel Detail
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <FormControl
                    type="text"
                    ref={nameRef}
                    placeholder={selectedCarousel?.title}
                    onChange={(event) =>
                      setEditedCarouselName(event.target.value)
                    }
                  />
                  <Form.Label className="fw-bold mt-2">Image</Form.Label>
                  <FormControl
                    ref={imageRef}
                    type="file"
                    onChange={(event) =>
                      setEditedCarouselImage(event.target.files[0])
                    }
                  />

                  <Form.Label className="fw-bold mt-2">Description</Form.Label>
                  <FormControl
                    type="text"
                    ref={descriptionRef}
                    placeholder={selectedCarousel?.caption}
                    onChange={(event) =>
                      setEditedCarouselDescription(event.target.value)
                    }
                  />

                  <Form.Label className="mt-2 fw-bold">Status</Form.Label>
                  <Form.Select
                    ref={statusRef}
                    className="fw-bold "
                    onChange={(event) =>
                      setEditedCarouselStatus(event.target.value)
                    }
                  >
                    <option>-----</option>
                    <option value="yes">Active</option>
                    <option value="no">In Active</option>
                  </Form.Select>

                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div>
                      <Button variant="secondary" onClick={handleCloseModel}>
                        Close
                      </Button>
                    </div>
                    <div>
                      <Button variant="primary" onClick={handleCancelModel1}>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <Modal
              keepMounted
              open={DeleteModel}
              onClose={handleRemoveModel}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Delete
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Are you sure you want to delete this Carousel
                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div>
                      <Button
                        variant="secondary"
                        onClick={handleDeleteCarousel}
                      >
                        Yes
                      </Button>
                    </div>
                    <div>
                      <Button variant="primary" onClick={handleRemoveModel}>
                        No
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <Modal
              keepMounted
              open={CancelModel}
              onClose={handleModel}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Add Carousel
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <FormControl
                    type="text"
                    value={carouselName}
                    onChange={(event) => setCarouselName(event.target.value)}
                  />
                  <Form.Label className="fw-bold mt-2">Image</Form.Label>
                  <FormControl
                    type="file"
                    onChange={(event) =>
                      setCarouselImage(event.target.files[0])
                    }
                  />

                  <Form.Label className="fw-bold mt-2">Description</Form.Label>
                  <FormControl
                    type="text"
                    value={carouselDescription}
                    onChange={(event) =>
                      setCarouselDescription(event.target.value)
                    }
                  />

                  <Form.Label className="mt-2 fw-bold">Status</Form.Label>
                  <Form.Select
                    className="fw-bold "
                    value={carouselStatus}
                    onChange={(event) => setCarouselStatus(event.target.value)}
                  >
                    <option>-----</option>
                    <option value="yes">Active</option>
                    <option value="no">In Active</option>
                  </Form.Select>

                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div>
                      <Button variant="secondary" onClick={handleModel}>
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button variant="primary" onClick={handleAddModel}>
                        Add
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <Modal
              keepMounted
              open={CancelModel1}
              onClose={handleModel1}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                ></Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Are you want to save the changes?
                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div>
                      <Button variant="secondary" onClick={handleEditCarousel}>
                        yes
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="primary"
                        onClick={() => setCancelModel1(false)}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <Modal
              keepMounted
              open={AddModel}
              onClose={handleAddiModel}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h2"
                ></Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Are you sure want to add the Carousel?
                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div>
                      <Button variant="primary" onClick={handleAddCarousel}>
                        Add
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() => setAddModel(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <div className="d-flex justify-content-between">
              <Form className="d-flex">
                <Form.Control
                  placeholder="Search "
                  className="w-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="text" className="mx-2">
                  <BiSearch />
                  Search
                </Button>
              </Form>
              <Button onClick={handleCancelModel}>Add Carousel</Button>
            </div>

            <Table
              striped
              bordered
              hover
              variant=""
              className="mt-4"
              responsive
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Images</th>
                  <th>Description</th>

                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts?.map((item, index) => (
                  <tr>
                    <td>{item.carousel_id}</td>
                    <td>{item.title}</td>
                    <td>
                      <img
                        src={`https://www.bictree.xyz/public/${item.image_url}`}
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                      />
                    </td>
                    <td>{item.caption}</td>

                    <td
                      style={{
                        color: item.is_active == "yes" ? "green" : "red",
                      }}
                    >
                      {item.is_active == "yes" ? "Active" : "InAcive"}
                    </td>
                    <td>
                      <div>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={(event) => {
                            handleClick(event, item);
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "20ch",
                            },
                          }}
                        >
                          <MenuItem key="edit" onClick={handleOpenModel}>
                            Edit
                          </MenuItem>
                          <MenuItem key="remove" onClick={handleDeleteModel}>
                            Remove
                          </MenuItem>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
