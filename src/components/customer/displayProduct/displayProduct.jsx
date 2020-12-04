import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './displayProduct.css';
class DisplayProduct extends React.Component {
  constructor(){
    super()
    this.state = {
      name : "1.jpg"
    }
  }
  handleOnClick = (event) => {
    let name = event.target.getAttribute('name');
    this.setState({name})
  }
    render() {
      let check = this.props.data.imageurl;
         return    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
       {this.props.data.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col xs = {12,{order:"last"}} lg = {2,{order:"first"}}>
        <p className = "small-image-container">
          <img className = "smallImages" 
                src= {require(`../../images/${check}/1.jpg`)} 
                name = "1.jpg" onClick = {this.handleOnClick}></img>
          <img className = "smallImages" 
                src= {require(`../../images/${check}/2.jpg`)} 
                name = "2.jpg"
                onClick = {this.handleOnClick}></img>
          <img className = "smallImages" 
                src= {require(`../../images/${check}/3.jpg`)} 
                name = "3.jpg"
                onClick = {this.handleOnClick}></img>
          <img className = "smallImages" 
                src= {require(`../../images/${check}/4.jpg`)}
                name = "4.jpg" onClick = {this.handleOnClick}></img>
          <img className = "smallImages" 
                src= {require(`../../images/${check}/5.jpg`)}
                name = "5.jpg" onClick = {this.handleOnClick}></img>
        </p>
        </Col>
        <Col xs = {12} lg = {5}>
        <p>
        <img className = "modalImages" src= {require(`../../images/${check}/${this.state.name}`)}></img> 
      </p>
        </Col>
        <Col xs = {12} lg = {5}>
        <p>
        <h3>Size</h3>
    <h5>{this.props.data.size}</h5>
        <h3>Description</h3>
        <h5>{this.props.data.description}</h5>
        <h3>Price</h3>
        <h5>{this.props.data.price}</h5>
      </p>
        </Col>
       
     
     

      </Row>
     
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.props.onHide}>Add to Cart</Button>
      <Button onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>;
    }
  }


export default DisplayProduct;