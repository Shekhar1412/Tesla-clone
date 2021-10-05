import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
function header() {
    return (
        <Container>
            <a href="/">
                <img src="./images/logo.svg"></img>
            </a>
            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model 3</a>
                <a href="/">Model X</a>
                <a href="/">Model Y</a>
            </Menu>
            <RightMenu>

            </RightMenu>
        </Container>
    )
}

export default header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    top:0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex: 1;
    a{
        font-weight:600;
        text-transform: uppercase;
        margin: 10px;
    }
    
`

const RightMenu = styled.div`

`