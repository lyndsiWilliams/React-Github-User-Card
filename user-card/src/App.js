import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';

import Profile from './components/Profile';
import Followers from './components/Followers';

function App() {
  return(
    <div className="App">
      <Jumbotron fluid body inline style={{ backgroundImage: "linear-gradient(red, orange, yellow, green, blue, indigo)" }}>
        <Container fluid>
          <h1 className="display-3">Github user card project</h1>
        </Container>
      </Jumbotron>
      <Profile />
      <div className="follower-card-cont">
        <Followers />
      </div>
    </div>
  );
}

export default App;
