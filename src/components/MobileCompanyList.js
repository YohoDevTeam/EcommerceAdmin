import React from 'react'
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import dummy from "../constants/datacompanylist"
import {BsThreeDots} from  "react-icons/bs"

const MobileCompanyList = () => {
  return (


    <div>
     
    <div className="d-lg-none">
    {dummy.CompanyList.map((value)=>(
     <Card style={{ width: '18rem',marginTop:15 ,backgroundColor:"#F5F5F5"}} >
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src={value.imageuri} style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>{value.companyname}</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> {value.web}</span></p>
         </div>

              
      </div>
      
      <div >
          <p><BsThreeDots/></p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>{value.location}</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>{value.employees}</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>{value.revenue}</p>
          </div>
        
    </Card>

))}

    {/* <Card style={{ width: '18rem',marginTop:15}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/4138/4138137.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Dropebox</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> dropbox.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Seatle, Washington</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>566K</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>17,786 cr</p>
          </div>
        
    </Card>





    <Card style={{ width: '18rem',marginTop:15,backgroundColor:"#F5F5F5"}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Apple. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> apple.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Cupertino, California</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>47K</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>27,923 cr</p>
          </div>
        
    </Card>







    <Card style={{ width: '18rem',marginTop:15}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968848.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Mailchimp. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> mailchimp.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Geogia, USA</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>566K</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>110 bn </p>
          </div>
        
    </Card>






    <Card style={{ width: '18rem',marginTop:15,backgroundColor:"#F5F5F5"}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>GOOGLE. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> google.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Menlo Park ,Clifornia</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>566K</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>110 bn </p>
          </div>
        
    </Card>







    <Card style={{ width: '18rem',marginTop:15}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Airbnb</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> airbnb.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>San Francisco , Claifornia</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>4.1K</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>260 cr </p>
          </div>
        
    </Card>








    <Card style={{ width: '18rem',marginTop:15,backgroundColor:"#F5F5F5"}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://play-lh.googleusercontent.com/3xIIOI7gPE822cI8ZgGvB1H_JRrFFFk737Rp1UZh3IYtsGuq-PXY-Ye3r2ewuUQLNDs" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Shopee. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> shopee.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Singapura</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>25.1k</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>9.16 bn </p>
          </div>
        
    </Card>






    <Card style={{ width: '18rem',marginTop:15}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://mir-s3-cdn-cf.behance.net/user/276/c4b8bb49536901.5a6475ba39cb7.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Sebo Studio. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> sebostudio.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Yogyakarta, Indonesia</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>566k</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>4,800.5 cr </p>
          </div>
        
    </Card>








    <Card style={{ width: '18rem',marginTop:15,backgroundColor:"#F5F5F5"}}>
        <div className='px-1 mt-2' style={{display:"flex" ,justifyContent:"space-between"}}>

      <div style={{display:"flex"}}>
        <div>
        <Form.Check aria-label="option 1" style={{ marginRight: 10,padding:5 }} />
        </div>

        <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Evernote.svg/1200px-Evernote.svg.png" style={{width:30,height:30,borderRadius:20,marginRight:10,padding:2}}   />
        </div>

        <div style={{marginRight:30}}>
                <p  ><span style={{fontWeight:"bold"}}>Evernote. Inc</span><br/>
               <span style={{fontSize: 15, color: "#818181"}}> evernote.com</span></p>
         </div>

              
      </div>
      
      <div >
          <p>...</p>
      </div>
         </div>


         <div className='px-3'>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Location</p> 
             <p>Redwood City, California</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter"}}>Employees</p>
             <p>566k</p>
             <p  style={{ fontSize: 15, color: "#818181", fontWeight: "lighter" }}>Revenue</p>
             <p>17,786 cr </p>
          </div>
        
    </Card> */}







   
        
    






    </div>
    
    </div>
  )
}

export default MobileCompanyList