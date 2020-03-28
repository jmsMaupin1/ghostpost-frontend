import React, { useEffect, useState } from 'react';

import Post from '../../components/Post';
import PostSorter from '../../components/PostSorter';

export default function PostPanel() {
    const [posts, setPosts] = useState([])
    const [sortBy, setSortBy] = useState(null)
    const [filterBy, setFilterBy] = useState(null)

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    let getPosts = () => {
      fetch("http://localhost:8000/api/posts/")
      .then(res => res.json())
      .then(json => {
        setPosts(json)
      })
    }

    let sendVote = (id, vote) => {
      fetch(`http://localhost:8000/api/posts/${id}/${vote}`)
      .then(res => res.json())
      .then(result => getPosts())
    }

    let sortAndFilter = () => {
      let temp_posts = JSON.parse(JSON.stringify(posts));
      if (sortBy) 
        temp_posts = temp_posts.sort(sortBy)
      if (filterBy)
        temp_posts = temp_posts.filter(filterBy)
      
      return temp_posts.map( cur => {
        return <Post 
                  content={cur.content}
                  upvotes={cur.upvotes}
                  downvotes={cur.downvotes}
                  isBoast={cur.isBoast}
                  datetime={cur.datetime}
                  key={cur.id}
                  upvote={sendVote.bind(this, cur.id, 'upvote')}
                  downvote={sendVote.bind(this, cur.id, 'downvote')}
                />
      })
    }

    return (
        <>
          <PostSorter setFilter={setFilterBy} setSort={setSortBy}/>
          {sortAndFilter()}
        </>
      );
}
