import React from 'react'
import {FormControl,Row,Col} from 'react-bootstrap'
import logo from '../../images/detail-s.png'
import Card from 'react-bootstrap/Card';
import {AiFillEyeInvisible} from "react-icons/ai";

const SignIn = () => {
  return (
    
    <container>
      <Card>
       <Row >
        <Col lg={5}>
         <div>
          <img src={logo} style={{width:510,height:720}}/>
        </div>
        </Col>

          
         <Col lg={5}>
         
         <div className='d-flex float-end pt-2'>
              <p>Don't have an account?</p> &nbsp;
               <a class="signup" href='#' id="new_user" style={{ textDecoration: "None",color:"blue" }}>SignUp</a>
         </div>

         <form className='form m-4 pt-5' style={{backgroundColor:'White',marginRight:100 ,marginTop:50}}> 
          <div className='jusfity-content-center align-items-left m-5 pt-5'>

         <div className='Sign m-'>
          <h3>Sign in</h3>
         </div>

         &nbsp;
         &nbsp;

         <div classname="Text-email card" >
             <input type="email" className='form-control submit' placeholder='Email address'/>
          </div>
          &nbsp;
          &nbsp;

          <div classname="Text-password card d-flex" >
             <input type="password" className='form-control submit' placeholder='Password'/>
             </div>

              <div>
             {/* <AiFillEyeInvisible/> */}
         </div>

         &nbsp;

          <div className='forget' style={{color:'blue'}}>
            <p>Forget Password?</p>
          </div>

          <div className='sub px-8  d-flex justify-content-end m-auto pt-2 '>
                <button data-id="EmailPage-ContinueButton" class="Button" style={{ width:1000,height:50 ,borderRadius: 800, borderColor: "purple", backgroundColor: "purple" }}>
                  <span class="Sign In" style={{color: "white"}}>Sign In</span></button>
              </div>

              <div className='d-flex align-items-center my-3' >
                <div style={{ height: 0.2, background: "gray", width: "50%" }}>
                </div>
                <p style={{ textAlign: "center" }} className='mt-2'>Or</p>
                <div style={{ height: 0.2, background: "gray", width: "50%" }}>
                </div>
              </div>

                  <div className='d-flex mx-3 ms-5'>
              <div className='d-flex mx-3' style={{justifyContent: "center" ,width: 100 ,backgroundColor:'white'}}>
                <button className="d-flex" style={{ borderRadius: 5, justifyContent: "center", height: 40 }}>
                  <img src="https://granthamcaravans.co.uk/wp-content/uploads/2020/10/google-logo.png" style={{ width: 25, height: 30,marginLeft:25 }} />
                  <a className='mx-3  ms-2'style={{ textDecoration: "None",color:"black"}} href="https://mail.google.com/">Google</a>
                </button>
              </div>
                    <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br/>
              <div className='d-flex mx-3' style={{justifyContent: "center" ,width: 100 ,backgroundColor:'white'}}>
                <button className="d-flex" style={{ borderRadius: 5, justifyContent: "center", height: 40 }}>
                  <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" style={{ width: 25, height: 30,marginLeft:25 }} />
                  <a className='mx-3  ms-2'style={{ textDecoration: "None",color:"black"}} href="https://mail.google.com/">Facbook</a>
                </button>
              </div>
              </div>

              <div className='pt-5'>
                <p>Protected by reCAPTCHA and subject to the Rhombus Privacy</p>
                <p style={{marginTop:-20}}>Policy and Terms of Service.</p>
              </div>

          </div>
          </form>
      </Col>
      
      </Row>
      </Card>
    </container>

  )
}

export default SignIn