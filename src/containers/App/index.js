import React from 'react';

import PostPanel from '../PostPanel';
import PostMaker from '../../components/PostMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostMaker />
      </header>
      <div className='App-body'>
        <PostPanel />
      </div>
    </div>
  );
}

export default App;
