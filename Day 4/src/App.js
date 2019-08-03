import React from 'react';
import Blog from './Blog/Blog';
import {BrowserRouter} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Blog />
    </div>
    </BrowserRouter>
  );
}

export default App;
