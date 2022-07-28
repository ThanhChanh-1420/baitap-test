import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Content/Home/Home";
import CreateOrUpdateBook from "./Content/Book/CreateOrUpdateBook";
import UpdateBook from "./Content/Book/UpdateBook";
import DetailBook from "./Content/Book/DetailBook";
import React, { Component } from 'react';
import Footer from "./Components/Footer/Footer";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      accessToken: null,
      userID: null,
    };
  }

  componentDidMount = () => {
    let userID = window.localStorage.getItem('userID');
    if (userID!==null){
      this.setState({
        isLogged: !this.state.isLogged,
        userID: window.localStorage.getItem('userID'),
        accessToken: window.localStorage.getItem('accessToken'),
      });
    }
  }

  chooseNavbarItem = (index) => {
    let items = document.querySelectorAll('.dino__navbar__item');
    for (let i=0;i<items.length;i++){
      items[i].classList.remove('active');
    }
    items[index].classList.add('active');
  }

  manageLogged = (accessToken1, userID1) => {
    this.setState({
      isLogged: !this.state.isLogged,
      accessToken: accessToken1,
      userID: userID1
    });
  }

  saveTokenToStorage = (userID, accessToken) => {
    window.localStorage.setItem('userID',userID);
    window.localStorage.setItem('accessToken',accessToken);
  }

  removeTokenStorage = () => {
    window.localStorage.removeItem('userID');
    window.localStorage.removeItem('accessToken');
  }

  changBackground = (ch) => {
    let item = document.querySelector('.main');
    if (ch){
      item.classList.add('background__active');
    }else{
      item.classList.remove('background__active');
    }
  }

  render(){
    return (
      <div className="main">
        <BrowserRouter>
          <Navbar choose={(index)=>{this.chooseNavbarItem(index)}} logged={this.state.isLogged}></Navbar>
          <div className="main__board container">
            <Switch>
              <Route exact path="/" render={(props) => <Home background={() => {this.changBackground(false)}}  accessToken={this.state.accessToken} userID={this.state.userID} choose={(index) => {this.chooseNavbarItem(index)}} {...props}/>}></Route>
              <Route exact path="/Add-Book" render={(props) => <CreateOrUpdateBook background={() => {this.changBackground(true)}} {...props}/>}></Route>
              <Route exact path="/Update-Book/:id" render={(props) => <UpdateBook background={() => {this.changBackground(true)}} {...props}/>}></Route>
              <Route exact path="/Detail-Book/:id" render={(props) => <DetailBook background={() => {this.changBackground(true)}} {...props}/>}></Route>
              <Redirect to="/"></Redirect>
            </Switch> 
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
