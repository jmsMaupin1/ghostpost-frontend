import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    width: 80vw;
`

export const MenuContainer = styled.div`
    display: flex;
    width: 20vw;
`

export const MenuHeader = styled.header`
    padding: 4px 15px;
`

export const MenuHide = styled.div`
    position: absolute;
    background: #585C64;
    z-index: 100;
    width: 100%;
    display: None;
`

export const MenuBody = styled.div`
    background: #585C64;
    position: relative;
    width: 50%;
    text-align: left;

    &:hover ${MenuHide}{
        display: block;
    }
`

export const SelectionItem = styled.div`
    padding: 4px 6px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`

export const MenuItem = styled.li`
    list-style-type: none;
    padding: 4px 6px;
    text-align: left;
    cursor: pointer;

    &:hover { background: #484C44; }
`