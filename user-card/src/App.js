import React from 'react';
import './App.css';

import Profile from './components/Profile';
import Followers from './components/Followers';

function App() {
  return(
    <div className="App">
      <h1>Github user card project</h1>
      <Profile />
      <Followers />
    </div>
  );
}

export default App;
