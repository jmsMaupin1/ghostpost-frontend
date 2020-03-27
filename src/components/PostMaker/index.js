import React, { useState } from 'react'

import {
    Container,
    Form,
} from './styles.js'

export default function PostMaster() {

    const [content, setContent] = useState('');
    const [isBoast, setIsBoast] = useState(false);

    const handleContentChange = e => setContent(e.currentTarget.value)
    const handleisBoastChange = e => setIsBoast(!isBoast)

    const submitPost = e => {
        fetch('http://localhost:8000/api/posts/', {
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
        .then(result => console.log(result))

        e.preventDefault()
    }

    return (
        <Container>
            <Form onSubmit={submitPost}>
                <label htmlFor='content'>Content: </label>
                <input 
                    className='textbox'
                    id='content'
                    type="text"
                    max_length='280'
                    value={content}
                    onChange={handleContentChange}
                />
                <div>
                    <label htmlFor='isBoast'>Boast </label>
                    <input 
                        id='isBoast'
                        className='checkbox'
                        type='checkbox'
                        value={isBoast}
                        onClick={handleisBoastChange}
                    />
                </div>
                <input type='submit' value='Submit post' />
            </Form>
        </Container>
    )
}
