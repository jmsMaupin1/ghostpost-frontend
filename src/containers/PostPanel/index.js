import React, { useState } from 'react';

import Post from '../../components/Post';
import PostSorter from '../../components/PostSorter';

export default function PostPanel({posts, api}) {
    const [sortBy, setSortBy] = useState(null)
    const [filterBy, setFilterBy] = useState(null)

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
                  upvote={api.sendVote.bind(this, cur.id, 'upvote')}
                  downvote={api.sendVote.bind(this, cur.id, 'downvote')}
                />
      })
    }

    return (
        <>
          <PostSorter
            setFilter={setFilterBy}
            setSort={setSortBy}
          />
          {sortAndFilter()}
        </>
      );
}
