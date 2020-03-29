import React from 'react';

import PostPanel from '../PostPanel';
import PostMaker from '../../components/PostMaker';
import GhostPostProvider from '../GhostPostProvider';
import './App.css';

function App() {

  return (
    <div className="App">
      <GhostPostProvider>
        <PostMaker/>
        <PostPanel/>
      </GhostPostProvider>
    </div>
  );
}

export default App;
