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

export const VoteCount = styled.div(props => ({
    height: '100px',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '10vw',
    borderRadius: '10px',
    backgroundImage: props.isBoast 
        ? 'linear-gradient(to right, green , #383C44)' 
        : 'linear-gradient(to right, red , #383C44);'
}))

export const Content = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
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
    bottom: 0;
    left: 0;
    width: calc(72.7vw - 2px);
`