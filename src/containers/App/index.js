import React, { useEffect, useState } from 'react';
import './App.css';

import Post from '../../components/post'

function send_upvote(id, setPosts) {
  fetch(`http://localhost:8000/api/posts/${id}/upvote`)
  .then(res => res.json())
  .then(result => {
    getPosts(setPosts)
  })
}

function send_downvote(id, setPosts) {
  fetch(`http://localhost:8000/api/posts/${id}/downvote`)
  .then(res => res.json())
  .then(result => {
    getPosts(setPosts)
  })
}

function getPosts(setPosts) {
    fetch("http://localhost:8000/api/posts/")
    .then(res => res.json())
    .then(json => {
      setPosts(json)
    })
}

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts(setPosts)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          posts.map((cur, index) => {
            return <Post 
              content={cur.content}
              upvotes={cur.upvotes}
              downvotes={cur.downvotes}
              isBoast={cur.isBoast}
              datetime={cur.datetime}
              key={cur.id}
              upvote={send_upvote.bind(this, cur.id, setPosts)}
              downvote={send_downvote.bind(this, cur.id, setPosts)}
            />
          })
        }
      </header>
    </div>
  );
}

export default App;
