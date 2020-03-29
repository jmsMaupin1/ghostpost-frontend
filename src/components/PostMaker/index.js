import React, { useState } from 'react'

import {
    Container,
    Form,
    Header
} from './styles.js'

export default function PostMaker({api}) {

    const [content, setContent] = useState('');
    const [isBoast, setIsBoast] = useState(false);

    const handleContentChange = e => setContent(e.currentTarget.value);
    const handleisBoastChange = e => setIsBoast(!isBoast);

    const submitPost = e => {
        api.submitPost(isBoast, content);
        setContent('');
        setIsBoast(false);
        e.preventDefault();
    }

    return (
        <Header>
            <Container>
                <Form onSubmit={submitPost}>
                    <div>
                        <label htmlFor='content'>Content: </label>
                        <input 
                            className='textbox'
                            id='content'
                            type="text"
                            max_length='280'
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='isBoast'>Boast </label>
                        <input 
                            id='isBoast'
                            className='checkbox'
                            type='checkbox'
                            checked={isBoast}
                            onClick={handleisBoastChange}
                        />
                    </div>
                    <input type='submit' value='Submit post' />
                </Form>
            </Container>
        </Header>
    )
}
