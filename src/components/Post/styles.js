import styled from 'styled-components'


export const Container = styled.div`
    width: 80vw;
    border: 1px solid black;
    border-radius: 10px;
    background: #383C44;
    margin: 5px 0;
`

export const FlexContainer = styled.div`
    display: flex;
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`

export const ImageContainer = styled.div`
    margin-left: 15px;
    max-width: 5vw; 
`

export const Content = styled.div`
    width: 100%;
    position: relative;
    margin-left: 15px;
    padding-left: 15px;
    padding-top: 15px;
    text-align: left;
`

export const VoteContainer = styled.div`
    max-width: 30px;
    margin: 0 10px;

    &:hover ${Image} {
        cursor: pointer
    }
`

export const Footer = styled.div`
    position: absolute;
    display: flex;
    padding-bottom: 5px;
    padding-left: 15px;
    bottom: 0;
    left: 0;
    width: calc(72.7vw - 2px);
`