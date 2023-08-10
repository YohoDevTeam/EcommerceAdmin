import React from 'react'
import { Col } from 'react-bootstrap'
import {BsSearch} from "react-icons/bs"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row} from 'react-bootstrap';
import Colors from "../../constants/theme"
import {BsFilter} from "react-icons/bs"
import BusinessTable from '../../components/BusinessTable';
import Accordion from 'react-bootstrap/Accordion';




const Business = () => {
  return (
    <div>

      <div className='d-flex justify-content-between'>
      <div style={{padding:20}}>
        <h1>Company List</h1>
      </div>



      <div style={{display:"flex",justifyContent:"space-between",padding:20 }}> 
      <div style={{display:"flex"}}>
         
      <div >
      <BsSearch style={{margin:"auto",fontSize:20}}/>
      </div>

      <div>
        <Form >
        <Form.Group  className="mb-3" >
         <Col sm="10">
          <Form.Control  placeholder="Search" style={{border:"none"}} />
        </Col>
      </Form.Group>
        </Form>

      </div>

      </div>


      <div style={{marginRight:10}}>
      <Button  variant='white' >
       <BsFilter/> Filter
      </Button>
      </div>



      <div>
      <Button  style={{backgroundColor:"#775DA6",border:"none"}} >
       + Add Companies
      </Button>
      </div>

      </div>
      </div>
      
      <div>
        <Row >
          <Col lg={2}>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Company Type</Accordion.Header>
        <Accordion.Body>
            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Agriculture</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>B2B</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Cosmetics</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Agency</p>
            </div>



            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Real Estate</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Food & Beverages</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Entertainment</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Information & Teachnology</p>
            </div>




            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Games</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Transportation</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Buildin</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Industrial</p>
            </div>



            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1"  style={{marginRight:10}}/>
            <p>Comunication service</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Healthcare</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check aria-label="option 1" style={{marginRight:10}} />
            <p>Finacials</p>
            </div>


           
            </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </Col>
      
        
      <Col lg={10}>
        <BusinessTable/>
      </Col>

      </Row>
      </div>


    </div>
  )
}

export default Business