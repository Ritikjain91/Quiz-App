import React from 'react';
import Home from './Component/Home';
import { Link } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Home/>
      <Link to="/flashcard"></Link>
      
      
      
    </div>
  );
}

export default App;
