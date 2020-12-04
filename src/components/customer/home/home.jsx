import React from 'react';
import {getData} from '../service/home.service'
import Card from '../card/card';
import CardDeck from 'react-bootstrap/CardDeck'

class Home extends React.Component {
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


export default Home;

// import React from 'react';


// class Home extends React.Component {
//     render() {
//       return  <div>Home</div>
//     }
//   }


// export default Home;