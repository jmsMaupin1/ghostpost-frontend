import React from 'react'

import {
    Container,
    FlexContainer,
    ImageContainer,
    Image,
    Content,
    VoteContainer,
    Footer
} from './styles'
import check from '../../assets/check-mark.png'
import xmark from '../../assets/red-x.png'
import upvote from '../../assets/upvote-v1.png'
import downvote from '../../assets/downvote.png'

export default function post(props) {
    return (
        <Container>
            <FlexContainer>
                <ImageContainer>
                    <Image alt="" src={props.isBoast ? check : xmark} />
                </ImageContainer>
                <Content>
                    {props.content}
                    <Footer>
                        {props.upvotes}
                        <VoteContainer>
                            <Image alt="" src={upvote} onClick={props.upvote} />
                        </VoteContainer>
                        {props.downvotes}
                        <VoteContainer>
                            <Image alt="" src={downvote} onClick={props.downvote}/>
                        </VoteContainer>
                    </Footer>
                </Content>
            </FlexContainer>
        </Container>
    )
}
