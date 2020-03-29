import styled from 'styled-components'


export const Container = styled.div`
    width: 80vw;
    border: 1px solid black;
    border-radius: 10px;
    background: #383C44;
    margin: 0;
    padding: 0;
`

export const Form = styled.form`
    height: 75px;
    width: 80vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > * > .textbox {
        width: 700px;
        font-size: 25px;
        margin-left: 15px;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
`