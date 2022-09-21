import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './Page/Home';
import Scrumboard from './Page/Scrumboard';
import './styles/App.scss';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Jaypee',
      skill: 'React',
    };
    this.handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    this.handleSubmit = (e) => {
        e.preventDefault();
        console.log('the form was submitted by', this.state.name);
      }
      this.handleMove = (e) => {
        e.preventDefault();
        console.log('Yoyoyo');      
    }
  }

  render() {
    return (
       <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/scrumboard" element={<Scrumboard />} />
              <Route exact path="/sign-in" element={<Signin />} />
              <Route exact path="/sign-up" element={<Signup />} />
          </Routes>
       </Router>
    );
  }
}

export default App;
