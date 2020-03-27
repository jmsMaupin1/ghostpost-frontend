import React from 'react'

import {
    Container,
    FlexContainer,
    VoteCount,
    Image,
    Content,
    VoteContainer,
    Footer,
    UpvoteButton,
    DownvoteButton
} from './styles'
// import check from '../../assets/check-mark.png'
// import xmark from '../../assets/red-x.png'
// import upvote from '../../assets/upvote-v1.png'
// import downvote from '../../assets/downvote.png'

export default function post({isBoast, content, upvotes, downvotes, upvote, downvote}) {
    return (
        <Container>
            <FlexContainer>
                <VoteCount isBoast={isBoast}>
                    <i class="fas fa-sort-up" onClick={upvote}></i>
                    {upvotes - downvotes}
                    <i class="fas fa-sort-down" onClick={downvote}></i>
                </VoteCount>
                <Content>
                    {content}
                </Content>
            </FlexContainer>
        </Container>
    )
}
