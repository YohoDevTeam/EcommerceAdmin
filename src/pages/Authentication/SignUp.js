import React from 'react'
import {FormControl,Row,Col} from 'react-bootstrap'
import logo from '../../images/detail-s.png'
import Card from 'react-bootstrap/Card';
import {AiFillEyeInvisible} from "react-icons/ai";
import {TiTickOutline} from "react-icons/ti"
import { purple } from '@mui/material/colors';



const SignUp = () => {
  
  return (

    <container>
      <Card>
       <Row md={5}>
        <Col lg={5}>
         <div>
          <img src={logo} style={{width:510,height:720}}/>
        </div>
        </Col>

          
         <Col lg={5}>
         
         <div className='d-flex float-end pt-1'>
              <p>Already have an account?</p> &nbsp;
               <a class="signup" href='#' id="new_user" style={{ textDecoration: "None",color:"blue" }}>Sign In</a>
         </div>

         <form className='form m-4 pt-5 mx-5 my-auto' style={{backgroundColor:'White',marginRight:100}}> 
          <div className='pt-5'>

         <div className='Sign m-'>
          <h3>Sign Up</h3>
         </div>

         &nbsp;
        
         <div classname="Text-email card" >
             <input type="email" className='form-control submit' placeholder='Email address'/>
          </div>
          &nbsp;
          

          <div className='Name d-flex'style={{}}>
            <input type="First" className='form-control submit'placeholder='First name' style={{}}></input>
            <input type="last" className='form-control submit ms-5'placeholder='Last name'></input>
          </div>
          &nbsp;
          &nbsp;
          &nbsp;

          <div classname="Text-password card d-flex" >
             <input type="password" className='form-control submit' placeholder='Password'/>
             </div>
              
             &nbsp;
          <div className='sub px-8  d-flex justify-content-end m-auto pt-2 '>
                <button data-id="EmailPage-ContinueButton" class="Button" style={{ width:1000,height:40 ,borderRadius: 800, borderColor: "purple", backgroundColor: "purple" }}>
                  <span class="Sign In" style={{color: "white"}}>Sign In</span></button>
              </div>

              <div className='d-flex align-items-center mt-3' >
                <div style={{marginTop:-10, height: 0.2, background: "gray", width: "50%" }}>
                </div>
                <p style={{ textAlign: "center"}} className='mx-3'>Or</p>
                <div style={{ marginTop:-10,height: 0.2, background: "gray", width: "50%" }}>
                </div>
              </div>

                  <div className='d-flex mx-3  mt-1'>
              <div className='d-flex mx-3' style={{justifyContent: "center" ,width: 100 ,backgroundColor:'white'}}>
                <button className="d-flex" style={{ borderRadius: 5, justifyContent: "center", height: 40 }}>
                  <img src="https://granthamcaravans.co.uk/wp-content/uploads/2020/10/google-logo.png" style={{ width: 25, height: 30,marginLeft:25 }} />
                  <a className='mx-3  ms-2'style={{ textDecoration: "None",color:"black"}} href="https://mail.google.com/">Google</a>
                </button>
              </div>
                    <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/>
              <div className='d-flex mx-5 ms-5 ' style={{justifyContent: "center" ,width: 100 ,backgroundColor:'white'}}>
                <button className="d-flex" style={{ borderRadius: 5, justifyContent: "center", height: 40 }}>
                  <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" style={{ width: 25, height: 30,marginLeft:25 }} />
                  <a className='mx-3  ms-2'style={{ textDecoration: "None",color:"black"}} href="https://mail.google.com/">Facbook</a>
                </button>
              </div>
              </div>


              <div className='d-flex'>
                <div className='mt-3' style={{color:"white",backgroundColor:"purple", height:28,width:25}}><TiTickOutline/></div>
               <p className='mt-2 ms-2' style={{fontFamily:"-moz-initial"}}>By Clicking Create account, I agree that i have read and  accepted the Terms of Use and Privacy Policy.</p>
              </div>
                          
              <div className='pt-5 mt-4' style={{fontFamily:"-moz-initial"}}>
                <p>Protected by reCAPTCHA and subject to the Rhombus Privacy</p>
                <p style={{marginTop:-20, fontFamily:"-moz-initial"}}>Policy and Terms of Service.</p>
              </div>

          </div>
          </form>
      </Col>
      
      </Row>
      </Card>
    </container>

  )
}

export default SignUp