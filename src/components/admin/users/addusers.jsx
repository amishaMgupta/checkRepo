import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import './users.css';
import { addUser } from './user.service';
class AddUsers extends React.Component {
  constructor(){
    super();
    this.state = {
      customerType:""
    }
  }
  handleOnChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]:value
    })
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    addUser(e.target);
  }
  render() {
    let corporateSection 
    if(this.state.userType === "Corporate"){
     corporateSection = <div> <Form.Row>
     <Form.Group as={Col} controlId="formGridEmpId">
       <Form.Label>Employee Id</Form.Label>
       <Form.Control type="text" placeholder="Enter Employee Id" name = "empId"/>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridOrgName">
       <Form.Label>Organization Name</Form.Label>
       <Form.Control type="text" placeholder="Organization Name" name = "OrgName"/>
     </Form.Group>
   </Form.Row></div>
  
     
    }
    return <Form name="addCustomer" onSubmit={this.handleSubmit} className = "userInputForm">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter email" 
                        name = "email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
                        name = "password" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
      <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Frist Name"
                        name = "firstName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name"
                        name = "lastName" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
     
        <Form.Group as={Col} controlId="formGridType">
          <Form.Label>User Type</Form.Label>
          <Form.Control as="select" 
            defaultValue="Type" 
            name = "userType" onChange = {this.handleOnChange}>
                <option>Choose..</option>
            <option>Admin</option>
            <option>Corporate</option>
            <option>Retail</option>
        </Form.Control>
        </Form.Group>
        {corporateSection}
      </Form.Row>
      <Form.Row>
       <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="phone" placeholder="Enter Phone Number" name = "firstPhone"/>
        </Form.Group> 
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Phone Number" name = "secondPhone"/>
        </Form.Group> 
        </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" name = "address1" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" name = "address2"/>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder = "city" name = "city"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control placeholder = "State" name="state"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name = "zipCode"/>
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit">
        Submit
  </Button>
    </Form>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  }
}


export default AddUsers;