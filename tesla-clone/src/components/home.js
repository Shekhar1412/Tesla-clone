import React from 'react'
import styled from 'styled-components';
import Section from './section';

function home() {
    return (
        <Container>
           <Section
            title = "Model s"
            desc = "Order online for touchless delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing inventory"
            backgroundImg = "model-s.jpg"
                    >

           </Section>
           <Section
            title = "Model 3"
            desc = "Order online for touchless delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing inventory"
            backgroundImg = "model-3.jpg">

           </Section>
           <Section
            title = "Model x"
            desc = "Order online for touchless delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing inventory"
            backgroundImg = "model-x.jpg">

           </Section>
           <Section
            title = "Model y"
            desc = "Order online for touchless delivery"
            leftBtn = "Custom Order"
            rightBtn = "Existing inventory"
            backgroundImg = "model-y.jpg">

           </Section>
           <Section
            title = "Solar Panels"
            desc = "Lower cost solar panels in America"
            leftBtn = "Order Now"
            rightBtn = "Learn more"
            backgroundImg = "solar-panel.jpg">

           </Section>

           
           <Section
            title = "Accessories"
            desc = ""
            leftBtn = "Shop Now"
            rightBtn = ""
            backgroundImg = "accessories.jpg">

           </Section>
        </Container>
    )
}

export default home

const Container = styled.div`
    
    height : 100vh;

`
