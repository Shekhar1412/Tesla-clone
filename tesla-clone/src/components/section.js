import React from 'react';
import styled from 'styled-components';

function section({title,desc,leftBtn,rightBtn, backgroundImg}) {
    return (
        <Wrap bgImg = {backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{desc}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                <LeftButton>
                    {leftBtn}
                </LeftButton>
                {rightBtn && <RightButton>
                    {rightBtn}
                </RightButton> }
            </ButtonGroup>
            <DownArrow src ="./images/down-arrow.svg">
            </DownArrow>
            </Buttons>
            
        </Wrap>

    )
}

export default section

const Wrap  =  styled.div`
    width : 100vw;
    height: 100vh;
    background-image: ${props=>`url('./images/${props.bgImg}')`};
    background-size: cover;
    background-position: center;
    background-repeat : no-repeat;
    display:flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    align-text: center;
    h1{
        text-transform: capitalize;
    }
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media(max-width : 768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color : rgba(23,26,32,0.8);
    height : 40px;
    width : 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity  : 0.65;
`

const DownArrow = styled.img`
    height : 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``