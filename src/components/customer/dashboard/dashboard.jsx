import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './dashboard.css'


import {
  BrowserRouter as Router,
  Redirect,
  Link
} from "react-router-dom";


class Dashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      search:""
    }
  }
  handleOnClick=(event)=>{
    if(event){
      let search = event.target.getAttribute('name');
      this.setState({
        search
      })
    }
   
  }
  
    render() {

      if(this.state.search === "kitchen"){
        return <Redirect to = "/kitchen"/>
      }else if(this.state.search === "home"){
       return <Redirect to = "/home"/>
      }else{
        return <div>
          <Container fluid>
          <Row id = "mainContainer">
          <Col xs={12} md={6} class = "container-images" >
            <h1 onClick = {this.handleOnClick} name = "kitchen">Kitchen</h1>
            <div id = "kitchen">
              <img src ={require("../../images/backdrop/kitchen.jpg")} onClick = {this.handleOnClick} name = "kitchen" className = "container-image" ></img>
            </div>
          </Col>
          <Col xs={12} md={6} class = "container-images">
      {/* <Redirect to = '/home'> */}
      <h1 onClick = {this.handleOnClick} name = "home">Home</h1>
      <div id = "home">
        <img src ={require("../../images/backdrop/home.jpg")} onClick = {this.handleOnClick} name = "home" className = "container-image" ></img>
      </div>
      
      {/* </Redirect> */}
     
    </Col>
  </Row>
        </Container>

      
      </div>
        
      }
     
     
    }
  }


export default Dashboard;