import React, { useEffect, useState } from 'react';

import Post from '../Post'

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

export default function PostPanel() {
    const [posts, setPosts] = useState([])
    const [sort, setSort] = useState(null)
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    return (
        <>
          <header>
            this will be my sorting bar
          </header>
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
        </>
      );
}
