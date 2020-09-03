import React from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import Yelp from './Yelp';

/*var business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90 
}

var businesses = [ {business}, {business}, {business}, {business}, {business}, {business}];
*/
class App extends React.Component {
  constructor() {
    this.state = {
      businesses = []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortby) {
    Yelp.search(term, location, sortby).then(businesses => {
      this.setState({businesses: businesses})
    });
    
  }

  render() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={businesses} /> 
    </div>
  );
  }
}


export { App };

