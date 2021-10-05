import React from 'react'
import styled from 'styled-components';

function header() {
    return (
        <Container>
            <a href="/">
                <img src="./images/logo.svg"></img>
            </a>
            <Menu>
                <a>Model S</a>
                <a>Model 3</a>
                <a>Model X</a>
                <a>Model Y</a>
            </Menu>
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
`

const Menu = styled.div`

`