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
        ? 'linear-gradient(to right, blue , #383C44)' 
        : 'linear-gradient(to right, red , #383C44);'
}))

export const Content = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    text-align: left;
`