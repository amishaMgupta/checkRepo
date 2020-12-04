import React from 'react';
import {getData} from '../service/kitchen.service'
import Card from '../card/card';
import CardDeck from 'react-bootstrap/CardDeck'

class Kitchen extends React.Component {
  constructor(){
    super();
    this.state = {
      data : []
    }
  }
  componentDidMount(){
     getData()
     .then(res=>res.json())
     .then(data => this.setState({data}));
    
  }
    render() {
      let list = this.state.data.map(data => <Card key = {data.id} value = {data}></Card>)
      return  <CardDeck>
         {list}
      </CardDeck>
       
      
    }
  }


export default Kitchen