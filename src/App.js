import React from "react";
import { Route, Routes } from "react-router";
import Nav from './Navbar/nav'
import Store from "./Header/Store";
import Mac from "./Header/Mac";
import Ipad from "./Header/Ipad"
import Iphone from "./Header/Iphone"
import Watch from "./Header/Watch"
import AirPods from "./Header/AirPods"
import Support from "./Header/Support"
import Cart from "./Header/Cart";
import Login from "./Header/Login";
import SignUp from "./Header/SignUp";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cartItems: []
    }
  }

  AddToCart = (item) => {
    console.log("working")
    const cartItems = [...this.state.cartItems, item];
    this.setState({ count: this.state.count + 1, cartItems })
  }



  render() {
    return (
      <div>
        <Nav count={this.state.count} />
        <Routes>
          <Route path='/Login' element=<Login/> />
          <Route path='/SignUp' element=<SignUp/> />
        </Routes>


       
        <Routes>
          <Route path='/' element=<Store count={this.state.count} AddToCart={this.AddToCart} /> />

          <Route path='/Mac' element=<Mac count={this.state.count} AddToCart={this.AddToCart} /> />
          <Route path='/Ipad' element=<Ipad count={this.state.count} AddToCart={this.AddToCart} /> />
          <Route path='/Iphone' element=<Iphone count={this.state.count} AddToCart={this.AddToCart} /> />
          <Route path='/Watch' element=<Watch count={this.state.count} AddToCart={this.AddToCart} /> />
          <Route path='/AirPods' element=<AirPods count={this.state.count} AddToCart={this.AddToCart} /> />
          <Route path='/Support' element=<Support /> />
          <Route path='/Cart' element=<Cart cartItems={this.state.cartItems} /> />
        </Routes>

      </div>
    );
  }
}

export default App;
