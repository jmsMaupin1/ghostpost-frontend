import React from 'react'

import {
    Container,
    FlexContainer,
    VoteCount,
    Content,
    DeleteOption
} from './styles'

export default function post({
    isBoast, content, upvotes,
    downvotes, upvote, downvote, 
    secret_id=null, deletePost
}) {
    return (
        <Container>
            <FlexContainer>
                <VoteCount isBoast={isBoast}>
                    <i className="fas fa-sort-up" onClick={upvote}></i>
                    {upvotes - downvotes}
                    <i className="fas fa-sort-down" onClick={downvote}></i>
                </VoteCount>
                <Content>
                    {content}
                </Content>
                {
                    secret_id ? 
                    <DeleteOption>
                        <i className="fas fa-trash-alt" onClick={deletePost}></i>
                    </DeleteOption> : <></>
                }
            </FlexContainer>
        </Container>
    )
}
