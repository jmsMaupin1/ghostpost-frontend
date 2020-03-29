import React, { useState, useEffect } from 'react'

export default function GhostPostProvider({children}) {

    const BASE_URL = 'http://localhost:8000/api/posts'

    const [posts, setPosts] = useState([])

    const submitPost = (isBoast, content) => {
        fetch(`${BASE_URL}/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                isBoast,
                content
            })
        })
        .then(res => res.json())
        .then(post => setPosts(
            [...posts, post]
        ))
    }

    const getPosts = () => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(fetchedPosts => {
            setPosts(fetchedPosts)
        })
    }

    const sendVote = (id, vote) => {
        fetch(`${BASE_URL}/${id}/${vote}`)
        .then(res => res.json())
        .then(fetchedPost => {
            for(let i = 0; i < posts.length; ++i) {
                if (posts[i].id === fetchedPost.id)
                    setPosts([
                        ...posts.slice(0, i),
                        Object.assign({}, posts[i], {
                            'upvotes': fetchedPost.upvotes,
                            'downvotes': fetchedPost.downvotes
                        }),
                        ...posts.slice(i+1)
                    ])
            }
        })
    }

    const deletePost = secret_id => {
        fetch(`${BASE_URL}/${secret_id}/remove`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(id => {
            for(let i = 0; i < posts.length; ++i){
                if (posts[i].id === id[0])
                    setPosts([
                        ...posts.slice(0, i),
                        ...posts.slice(i + 1)
                    ])
            }
        })
    }

    useEffect(() => {
        getPosts()
    // eslint-disable-next-line
    }, [])

    return children.map((child, index) => {
        return React.cloneElement(child, {
            key: index,
            posts,
            api: {
                submitPost,
                getPosts,
                sendVote,
                deletePost
            }
        })
    })
}
