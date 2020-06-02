import React from 'react';
import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from 'react-router-dom'; 
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Article from './components/Article';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
		super(props);
		
    this.state = {
      contact: {
        email: '',
        name: '',
        message: '',
        isSending: false,
        isSent: false
      }
		};
  }

  render() { 
    return ( 
      <Router> 
        <div className="App">
          <NavBar></NavBar> 
          <Switch>
            <Route exact path='/' component={Home}></Route> 
            <Route exact path='/contact' 
              render = {
                () => <Contact contact={this.state.contact} 
                        saveState={(state) => {
                          this.setState({contact: state})
                        }}
                      /> 
              } 
            />
            <Route exact path='/articles/new' component={Article}></Route> 
            <Route exact path='/blog' component={Blog}></Route> 
            <Route exact path='/blog/:slug' component={Post}></Route>
            <Route exact path='/login' component={Login}></Route> 
            <Route exact path='/register' component={Register}></Route> 
          </Switch> 
          <Footer></Footer>
        </div> 
      </Router> 
    ); 
  } 
}
  

export default App;
