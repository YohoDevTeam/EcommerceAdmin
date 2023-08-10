import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Hidden } from "@mui/material";
import dummy from "../../../constants/dataReports";
import { useState } from "react";

const Summary = () => {
  const [like,setLike]=useState(false);
  const handlelike=()=>{
    setLike(!like)
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Col style={{ marginTop: 20 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>
                Financial
              </header>
              <div
                className="shadow"
                style={{ borderRadius: 10, backgroundColor: "#ffff" }}
              >
                {dummy?.Reports[0].statement.map((value) => (
                  <div
                    style={{
                      display: "flex",
                      height: 45,
                      alignItems: "center",
                      borderBottom: "0.5px solid #cccccc",
                      marginTop: 5,
                    }}
                  >
                    <div
                      style={{
                        width: "12%",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <img
                        src={value.img}
                        style={{ height: 18 }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                      className="mx-3"
                    >
                      <div
                        style={{
                          fontWeight: "501",
                          opacity: 0.8,
                          fontSize: 15,
                        }}
                      >
                        {value.name}
                      </div>
                      <div>
                        <img
                          src={value. imgold}
                          style={{ height: 35 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div style={{display:"flex",height:45,alignItems:"center",borderBottom:'0.5px solid #cccccc'}}>
                  <div style={{width:"12%",justifyContent:"center",display:"flex"}} ><img src='https://cdn-icons-png.flaticon.com/128/753/753263.png' style={{height:18}}/></div>
                  <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",width:"100%"}} className='mx-3'>
                    <div style={{fontWeight:'501',opacity:0.8,fontSize:15}}>Balance Sheet</div>
                    <div><img src='' style={{height:35}}/></div>
                  </div>
                 </div>
                 <div style={{display:"flex",height:45,alignItems:"center",borderBottom:'0.5px solid #cccccc',marginTop:5}}>
                  <div style={{width:"12%",justifyContent:"center",display:"flex"}}><img src='https://cdn-icons-png.flaticon.com/128/753/753263.png' style={{height:18}}/></div>
                  <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",width:"100%"}} className='mx-3'>
                    <div style={{fontWeight:'501',opacity:0.8,fontSize:15}}>Profit and Loss</div>
                    <div><img src='https://cdn-icons-png.flaticon.com/128/891/891449.png' style={{height:35}}/></div>
                  </div>
                 </div>
                 <div style={{display:"flex",height:45,alignItems:"center",borderBottom:'0.5px solid #cccccc',marginTop:5}}>
                  <div style={{width:"12%",justifyContent:"center",display:"flex"}}><img src='https://cdn-icons-png.flaticon.com/128/753/753263.png' style={{height:18}}/></div>
                  <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",width:"100%"}} className='mx-3'>
                    <div style={{fontWeight:'501',opacity:0.8,fontSize:15}}>Statement of Cash Flows</div>
                    <div><img src='https://cdn-icons-png.flaticon.com/128/891/891449.png' style={{height:35}}/></div>
                  </div>
                 </div>
                 <div style={{display:"flex",height:45,alignItems:"center",borderBottom:'0.5px solid #cccccc',marginTop:5}}>
                  <div style={{width:"12%",justifyContent:"center",display:"flex"}}><img src='https://cdn-icons-png.flaticon.com/128/753/753263.png' style={{height:18}}/></div>
                  <div style={{display:"flex" ,alignItems:"center",justifyContent:"space-between",width:"100%"}} className='mx-3'>
                    <div style={{fontWeight:'501',opacity:0.8,fontSize:15}}>Cash Summary</div>
                    <div><img src='' style={{height:35}}/></div>
                  </div>
                 </div> */}

                <div
                  style={{ height: 45, borderBottom: "0.5px solid #cccccc" }}
                >
                  <Accordion
                    style={{
                      borderBottom: "0.5px solid #cccccc",
                      borderRadius: 15,
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        style={{
                          fontWeight: "501",
                          opacity: 0.8,
                          fontSize: 15,
                        }}
                      >
                        More Reports
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                
              </div>
            </Col>

            <Col style={{ marginTop: 35 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>Tax</header>
              {dummy?.Reports[1].statement.map((value) => (
              <div
                style={{
                  display: "flex",
                  height: 45,
                  alignItems: "center",
                  border: "0.5px solid #cccccc",
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: "#ffff",
                }}
                className="shadow"
              >
                <div
                  style={{
                    width: "12%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={value.img}
                    style={{ height: 18 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  className="mx-3"
                >
                  <div
                    style={{ fontWeight: "501", opacity: 0.8, fontSize: 15 }}
                  >
                    {value.name}
                  </div>
                  <div>
                    <img
                      src={value.imgold}
                      style={{ height: 35 }}
                    />
                  </div>
                </div>
              </div>
                 ))}
            </Col>

            <Col style={{ marginTop: 35 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>
                Accounting
              </header>
              
              <div
                className="shadow"
                style={{ borderRadius: 10, backgroundColor: "#ffff" }}
              >
                {dummy?.Reports[2].statement.map((value) => (
                <div
                  style={{
                    display: "flex",
                    height: 45,
                    alignItems: "center",
                    borderBottom: "0.5px solid #cccccc",
                    marginTop: 5,
                  }}
                >
                  <div
                    style={{
                      width: "12%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img onpress={handlelike}
                      src={value.img}
                      style={{ height: 18 }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    className="mx-3"
                  >
                    <div
                      style={{ fontWeight: "501", opacity: 0.8, fontSize: 15 }}
                    >
                      {value.name}
                    </div>
                    <div>
                      <img
                        src={value.imgold}
                        style={{ height: 35 }}
                      />
                    </div>
                  </div>
                </div>
               ))}
                <div
                  style={{ height: 45, borderBottom: "0.5px solid #cccccc" }}
                >
                  <Accordion
                    style={{
                      borderBottom: "0.5px solid #cccccc",
                      borderRadius: 15,
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        style={{
                          fontWeight: "501",
                          opacity: 0.8,
                          fontSize: 15,
                        }}
                      >
                        More Reports
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
                
            </Col>
          </Col>

          <Col>
            <Col style={{ marginTop: 35 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>Sales</header>
              <div
                className="shadow"
                style={{ borderRadius: 10, backgroundColor: "#ffff" }}
              >
                    {dummy?.Reports[3].statement.map((value) => (
                <div
                  style={{
                    display: "flex",
                    height: 45,
                    alignItems: "center",
                    borderBottom: "0.5px solid #cccccc",
                    marginTop: 5,
                  }}
                >
                  <div
                    style={{
                      width: "12%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={value.img}
                      style={{ height: 18 }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    className="mx-3"
                  >
                    <div
                      style={{ fontWeight: "501", opacity: 0.8, fontSize: 15 }}
                    >
                        {value.name}
                    </div>
                    <div>
                      <img src={value.imgold} style={{ height: 35 }} />
                    </div>
                  </div>
                </div>
                ))}

                <div
                  style={{ height: 45, borderBottom: "0.5px solid #cccccc" }}
                >
                  <Accordion
                    style={{
                      borderBottom: "0.5px solid #cccccc",
                      borderRadius: 15,
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        style={{
                          fontWeight: "501",
                          opacity: 0.8,
                          fontSize: 15,
                        }}
                      >
                        More Reports
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>

            <Col style={{ marginTop: 35 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>
                Purchases
              </header>
              <div
                className="shadow"
                style={{ borderRadius: 10, backgroundColor: "#ffff" }}
              >
                  {dummy?.Reports[3].statement.map((value) => (
                <div
                  style={{
                    display: "flex",
                    height: 45,
                    alignItems: "center",
                    borderBottom: "0.5px solid #cccccc",
                    marginTop: 5,
                  }}
                >
                  <div
                    style={{
                      width: "12%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={value.img}
                      style={{ height: 18 }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    className="mx-3"
                  >
                    <div
                      style={{ fontWeight: "501", opacity: 0.8, fontSize: 15 }}
                    >
                      {value.name}
                    </div>
                    <div>
                      <img src={value.imgold} style={{ height: 35 }} />
                    </div>
                  </div>
                </div>
                 ))}
              </div>
            </Col>

            <Col style={{ marginTop: 35 }}>
              <header style={{ fontWeight: "600", fontSize: 20 }}>
                Inventory
              </header>
              <div
                className="shadow"
                style={{ borderRadius: 10, backgroundColor: "#ffff" }}
              >
                 {dummy?.Reports[5].statement.map((value) => (
                <div
                  style={{
                    display: "flex",
                    height: 45,
                    alignItems: "center",
                    borderBottom: "0.5px solid #cccccc",
                    marginTop: 5,
                  }}
                >
                  <div
                    style={{
                      width: "12%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      src={value.img}
                      style={{ height: 18 }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    className="mx-3"
                  >
                    <div
                      style={{ fontWeight: "501", opacity: 0.8, fontSize: 15 }}
                    >
                     {value.name}
                    </div>
                    <div>
                      <img
                        src={value.imgold}
                        style={{ height: 35 }}
                      />
                    </div>
                  </div>
                </div>
                ))}

                <div
                  style={{ height: 45, borderBottom: "0.5px solid #cccccc" }}
                >
                  <Accordion
                    style={{
                      borderBottom: "0.5px solid #cccccc",
                      borderRadius: 15,
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        style={{
                          fontWeight: "501",
                          opacity: 0.8,
                          fontSize: 15,
                        }}
                      >
                        More Reports
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Summary;
