import React from 'react'

import {
    Container,
    FlexContainer,
    VoteCount,
    Content,
} from './styles'

export default function post({isBoast, content, upvotes, downvotes, upvote, downvote}) {
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
            </FlexContainer>
        </Container>
    )
}
