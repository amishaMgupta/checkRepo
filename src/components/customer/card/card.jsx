import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import DisplayProduct from '../displayProduct/displayProduct';


class Pcard extends React.Component {
  constructor(){
    super()
    this.state ={
      modalShow:false
    }
  }
  setModalShow = (value) => {
      this.setState({modalShow:value})
    }
    render() {
        if(this.state.flag){
          return <Redirect to ={{
              pathname : "/displayProduct",
              state:{data:"123"}}}></Redirect>
        }
        else{

        
       // let check = '../../images/glass-votive01/1.jpg';
       let check = this.props.value.imageurl;
       console.log(check);
      return <Card xs = {12} lg = {3}>
       <Card.Img onClick={() =>this.setModalShow(true)} variant="top" src= {require(`../../images/${check}/1.jpg`)} />
      <Card.Body>
        <Card.Title>{this.props.value.name}</Card.Title>
        <Card.Text>
            {this.props.value.size}
          {this.props.value.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
      <DisplayProduct
        show={this.state.modalShow}
        data = {this.props.value}
        onHide={() => this.setModalShow(false)}
      />
    </Card>
    }}
  }


export default Pcard;