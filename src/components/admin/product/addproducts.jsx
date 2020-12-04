import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './addproduct.css';

import { addProduct} from'./product.service';


class AddProduct extends React.Component {
    
   
    handleSubmit =(e) => {
      e.preventDefault();
     // this.props.addToProduct(this.state);
       addProduct(e.target);
    }
    render() {
      return  <Form className = "addproductform" encType="multipart/form-data" name ="product" onSubmit={this.handleSubmit}>
        <Form.Label>Product Catagory</Form.Label>
        <Form.Control as="select" 
            defaultValue="catagory" 
            name = "productCatagory">
                <option>Choose..</option>
            <option>Home Decor</option>
            <option>Kitchen Decor</option>
        </Form.Control>
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder= "Product Name" 
                        name = "productName"/>
        <Form.Label>Product Description</Form.Label>
        <Form.Control as="textarea" rows="2"  
                    name = "productDesc"/>
        <Form.Label>Product Size</Form.Label>
        <Form.Control type="text" placeholder="Product Size" 
                        name = "productSize"/>
        <Form.Label>Product price(Cost Price+shipping+GSt)</Form.Label>
        <Form.Control type="text" placeholder="Product Price" 
                        name = "productPrice"/>
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control type="text" placeholder="Product Quantity" 
                        name = "productQu"/>
            <Form.File id="images" label="Add Images" name = "images" multiple />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    }
  }


export default AddProduct;


