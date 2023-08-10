import React from "react";
import SideBar from "../../components/SideBar";
import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DownloadIcon from "@mui/icons-material/Download";
import Color from "../../constants/theme";
import AddIcon from "@mui/icons-material/Add";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MovingIcon from "@mui/icons-material/Moving";
import SendIcon from "@mui/icons-material/Send";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverViewTable from "../../components/OverviewTable";
import "./overview.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PieChart } from "../../components/PieChart";
import { BarChart } from "../../components/BarChart";
import { LineChart } from "../../components/LineChart";
import OverviewCheckBox from "../../components/OverviewCheckBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Card } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import html2canvas from "html2canvas";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const OverView = () => {
  const ref = React.useRef();

  const [openModel, setOpenModel] = React.useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 1800,
      cropHeigth: 1800,
    };

    html2canvas(ref.current).then((canvas) => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
  };
  return (
    <>
      <NavBar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <section>
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
                  Text in a modal
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
            <Row
              lg={2}
              md={1}
              xs={1}
              className="d-flex justify-content-between align-items-center "
            >
              <Col>
                <h1 style={{ fontSize: 24, fontWeight: "bold" }}>
                  Hi Mohammed Thasthakir
                </h1>
                <p style={{ fontSize: 12, color: "grey" }}>
                  welcome book to modern CRN dashboard{" "}
                </p>
              </Col>
              <Col className="text-lg-end py-lg-0 py-3">
                <div className="">
                  <Button
                    variant="light"
                    style={{ marginRight: 10 }}
                    onClick={handleClickTakeScreenShot}
                  >
                    <DownloadIcon
                      style={{
                        color: "grey",
                        marginRight: 5,
                        width: 20,
                        height: 20,
                      }}
                    />
                    Download
                  </Button>{" "}
                  <Button
                    variant="secondary"
                    style={{ backgroundColor: Color.COLORS.primary }}
                    onClick={handleOpenModel}
                  >
                    <AddIcon
                      style={{ marginRight: 5, width: 20, height: 20 }}
                    />
                    Add Dashlet
                  </Button>{" "}
                </div>
              </Col>
            </Row>
            <div id="screenshot" ref={ref}>
              <Row md={2} lg={4} xs={1} className="">
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        $22,876.80
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}>
                        won from 16 Deals
                      </div>
                    </div>

                    <div>
                      <LocalMallIcon
                        style={{
                          color: Color.COLORS.primary,
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <ProgressBar
                      now={70}
                      label={`${70}%`}
                      visuallyHidden
                      style={{
                        // background: "red",
                        // backgroundColor: "green",
                        width: "80%",
                        height: 8,
                      }}
                      variant="green-progress-bar"
                    />

                    <div
                      style={{
                        fontSize: 12,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      70%
                    </div>
                  </div>
                </Col>

                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        $1,096.30
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}>
                        Daily average income
                      </div>
                    </div>

                    <div>
                      <AccountBalanceWalletIcon
                        style={{
                          color: Color.COLORS.pinkTwo,
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <ProgressBar
                      now={50}
                      label={`${70}%`}
                      visuallyHidden
                      style={{
                        // background: "red",
                        // backgroundColor: "green",
                        width: "80%",
                        height: 8,
                      }}
                      variant="danger"
                    />

                    <div
                      style={{
                        fontSize: 12,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      50%
                    </div>
                  </div>
                </Col>
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        33.98%
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}>
                        Lead coversation
                      </div>
                    </div>

                    <div>
                      <MovingIcon
                        style={{
                          color: "green",
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <ProgressBar
                      now={45}
                      label={`${70}%`}
                      visuallyHidden
                      style={{
                        // background: "red",
                        // backgroundColor: "green",
                        width: "80%",
                        height: 8,
                      }}
                      variant="success"
                    />

                    <div
                      style={{
                        fontSize: 12,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      45%
                    </div>
                  </div>
                </Col>
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        778
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}>
                        Campaign sent
                      </div>
                    </div>

                    <div>
                      <SendIcon
                        style={{
                          color: "yellow",
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <ProgressBar
                      now={100}
                      label={`${70}%`}
                      visuallyHidden
                      style={{
                        // background: "red",
                        // backgroundColor: "green",
                        width: "80%",
                        height: 8,
                      }}
                      variant="warning"
                    />

                    <div
                      style={{
                        fontSize: 12,
                        color: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      100%
                    </div>
                  </div>
                </Col>
              </Row>

              <Row md={2} lg={3} xs={1} className="">
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Email Send Total
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}>
                        March 2020
                      </div>
                    </div>

                    <div>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                      <MoreVertIcon
                        style={{
                          color: Color.COLORS.primary,
                          width: 20,
                          height: 20,
                        }}
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <PieChart />
                  </div>
                </Col>
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Income Amounts
                      </div>
                      <div style={{ color: "grey", fontSize: 12 }}></div>
                    </div>

                    <div>
                      <MoreVertIcon
                        style={{
                          color: Color.COLORS.primary,
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5">
                    <BarChart />
                  </div>
                </Col>
                <Col className="p-4">
                  <div className="d-flex justify-content-between ">
                    <div>
                      <div style={{ fontSize: 18, fontWeight: "bold" }}>
                        Revenue
                      </div>
                      <div className="mt-2">
                        <div style={{ fontSize: 22, fontWeight: "bold" }}>
                          $1,23,000.70
                        </div>
                        <div style={{ color: "grey", fontSize: 12 }}>
                          Won from 256 Deals
                        </div>
                      </div>
                    </div>

                    <div>
                      <MoreVertIcon
                        style={{
                          color: Color.COLORS.primary,
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center ">
                    <LineChart />
                  </div>
                </Col>
              </Row>
            </div>

            <Row md={1} lg={2} xs={1} className="">
              <Col lg={8} md={12} className="p-4 d-none d-lg-block d-md-block">
                <div className="d-flex justify-content-between ">
                  <div>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>
                      Top Performence
                    </div>
                    <div style={{ color: "grey", fontSize: 12 }}>
                      March 2020
                    </div>
                  </div>

                  <div>
                    <MoreVertIcon
                      style={{
                        color: Color.COLORS.primary,
                        width: 20,
                        height: 20,
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <OverViewTable />
                </div>
              </Col>
              <Col className="d-lg-none d-block d-md-none">
                <Card
                  className="mt-3 p-3"
                  style={{ width: "18rem", backgroundColor: "#DCDCDC" }}
                >
                  <div className="d-flex py-1 ">
                    <h6 style={{ width: 100 }}>Number</h6>
                    <h6>P/O CRM08-12</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Ref</h6>
                    <h6>P/0 CRM08-12</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>To</h6>
                    <h6> Marin bike club </h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Date</h6>
                    <h6>25 Oct 2021</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Due Date</h6>
                    <h6>03 Nov 2021</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Paid</h6>
                    <h6>0.00</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Due</h6>
                    <h6>234.00</h6>
                  </div>

                  <div className="d-flex py-1">
                    <h6 style={{ width: 100 }}>Status</h6>
                    <h6>Awaiting Payment</h6>
                  </div>
                </Card>
              </Col>
              <Col lg={4} className="p-4">
                <div className="d-flex justify-content-between ">
                  <div>
                    <div style={{ fontSize: 18, fontWeight: "bold" }}>
                      Tasks
                    </div>
                    <div style={{ color: "grey", fontSize: 12 }}>
                      March 2020
                    </div>
                  </div>

                  <div>
                    <MoreVertIcon
                      style={{
                        color: Color.COLORS.primary,
                        width: 20,
                        height: 20,
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <OverviewCheckBox />
                </div>
                <div
                  style={{
                    marginTop: 100,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <OutlinedInput
                    style={{ height: 50, width: "100%" }}
                    placeholder="Add new"
                  />
                  <Button
                    variant="primary"
                    size="small"
                    style={{
                      marginLeft: 20,
                      height: 40,
                      backgroundColor: Color.COLORS.primary,
                    }}
                  >
                    Add
                  </Button>
                </div>
              </Col>
            </Row>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default OverView;
