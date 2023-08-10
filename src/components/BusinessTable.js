import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import dummy from "../constants/datacompanylist"
import {BsThreeDots} from "react-icons/bs"

function BusinessTable() {
  return (
  
      <div className="d-none d-sm-block">
      <Table striped bordered hover  >
        <thead>
          <tr>
            <th style={{ display: "flex" }}>
              <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>{" "}
              <span
                style={{
                  fontSize: 15,
                  color: "#818181",
                  fontWeight: "lighter",
                }}
              >
                {" "}
                Company name
              </span>{" "}
            </th>

            <th
              style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}
            >
              Location
            </th>
            <th
              style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}
            >
              Employees
            </th>
            <th
              style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}
            >
              Revenue{" "}
            </th>


            <th
              style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}
            >
             {" "}
            </th>
          </tr>
        </thead>
        {dummy.CompanyList.map((value )=>(
        <tbody>
          <tr>
           
        
            <td style={{display:"flex",alignItems:"center" }}>
              
              <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>

             
              <div>
                <img src={value.imageuri} style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
             
             <div>
                <p  ><span style={{fontWeight:"bold"}}>{value.companyname}</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> {value.web}</span></p>
              </div>
            </td>



            <td>{value.location}</td>
            <td>{value.employees}</td>
            <td>{value.revenue}     </td>
            
            <td> <BsThreeDots/></td>
           
            
          </tr>
         
        
         
         
         
         
         
          {/* <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/4138/4138137.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Dropebox</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> dropbox.com</span></p>
              </div>
            </td>
            <td>Seattle, Washington</td>
            <td>566K</td>
            <td>17,786 cr    </td>
            <td> ...</td>
          </tr>
        
        
        
          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Apple. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> apple.com</span></p>
              </div>
            </td>
            <td>Cupertino, California</td>
            <td>47K</td>
            <td>27,923 cr   </td>
            <td> ...</td>
          </tr>






          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968848.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Mailchimp. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> mailchimp.com</span></p>
              </div>
            </td>
            <td>Geogia, USA</td>
            <td>566K</td>
            <td>110 bn  </td>
            <td> ...</td>
          </tr>






          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>GOOGLE. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> google.com</span></p>
              </div>
            </td>
            <td>Menlo Park ,Clifornia</td>
            <td>566K</td>
            <td>110 bn   </td>
            <td> ...</td>
          </tr>





          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Airbnb</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> airbnb.com</span></p>
              </div>
            </td>
            <td>San Francisco , Claifornia</td>
            <td>4.1K</td>
            <td>260 cr</td>
            <td> ...</td>
          </tr>




          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://play-lh.googleusercontent.com/tZx5PKJOzjSlsYktzFHB0NUfEMLYO9UUnbkYv6pkCEiDFfcoWTMLr-uVJ0Ra3kJlkw" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Shopee. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> shopee.com</span></p>
              </div>
            </td>
            <td>Singapura</td>
            <td>25.1k</td>
            <td>9.16 bn   </td>
            <td> ...</td>
          </tr>




          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://mir-s3-cdn-cf.behance.net/user/276/c4b8bb49536901.5a6475ba39cb7.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Sebo Studio. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> sebostudio.com</span></p>
              </div>
            </td>
            <td>Yogyakarta, Indonesia</td>
            <td>566k</td>
            <td>4,800.5 cr   </td>
            <td> ...</td>
          </tr>




          <tr>
            <td  style={{display:"flex",alignItems:"center"}}>
            <div>
                <Form.Check aria-label="option 1" style={{ marginRight: 10 }} />
              </div>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Evernote.svg/1200px-Evernote.svg.png" style={{width:30,height:30,borderRadius:20,marginRight:10}}   />
              </div>
              <div>
                <p  ><span style={{fontWeight:"bold"}}>Evernote. Inc</span><br/>
               <span  style={{fontSize: 15, color: "#818181"}}> evernote.com</span></p>
              </div>
            </td>
            <td>Redwood City, California</td>
            <td>566k</td>
            <td>17,786 cr    </td>
            <td> ...</td>
          </tr> */}
        
        </tbody>
         ) )}  
      </Table>
    </div>
    
  );
}

export default BusinessTable;
