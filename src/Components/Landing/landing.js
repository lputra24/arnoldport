import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../Nav/navbar.js';
import {COLORS} from '../../Resources/constant.js';
import BluePhone from '../MobileUIComponents/blueComponent.js'
import YellowPhone from '../MobileUIComponents/yellowComponent.js'
import OrangePhone from '../MobileUIComponents/orangeComponent.js'
import RedPhone from '../MobileUIComponents/redComponent.js'
import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';
import {Mouse2} from 'react-bootstrap-icons';

const Page = styled.div`
width: auto;
height: 150vh;
background-color: ${props => props.backgroundColor};
overflow:hidden;
`
const Content = styled.div`
position: relative;
display: flex;
justify-content: space-between;
z-index:1;
height: 30.5vw;
/* border: solid red 1px; */
`

const Arrow = styled.div`
margin-top: 28vh;
margin-right: 2vw;
margin-left: 2vw;   
width: auto;
height: auto;
/* border: solid black 1px; */
`

const LandingFoot = styled.div`
position: relative;
width: auto;
height: 3vw;
/* border: solid black 1px; */
`

const PageTitle = styled.p`
text-align: center;
/* border: solid red 1px; */
`

const InstructionContainer = styled.div`
position: absolute;
display: flex;
top: 0;
right: 2vw;
float: right;
/* border: solid red 1px; */
`

const Landing= () => {

    const [backgroundStateIndex,changeBackgroundStateIndex] = useState(0);


    const backgroundState =[    
        {
            name: 'Post-It Mobile App Concept',
            color : COLORS.blue,
            buttonActive : COLORS.blueActive,
            buttonFont : COLORS.blueFontButton,
            buttonFontActive : COLORS.blueFontActive,
            fontColor : COLORS.blueFont,
            navColorScheme: {
                navItem : COLORS.blueFont,
                background:COLORS.blueNavBackground,
                line:COLORS.blueNavLine,
                font:COLORS.blueNavFont
            },
            stateImg : <BluePhone/>
        },
        {
            name: 'Authentic Homecooking Ordering App',
            color : COLORS.yellow,
            buttonActive : COLORS.yellowActive,
            buttonFont : COLORS.yellowFontButton,
            buttonFontActive : COLORS.yellowFontActive,
            fontColor : COLORS.yellowFont,
            navColorScheme: {
                navItem : COLORS.yellowFont,
                background:COLORS.yellowNavBackground,
                line:COLORS.yellowNavLine,
                font:COLORS.yellowNavFont
            },
            stateImg : <YellowPhone/>
        },
        {
            name: 'Community & Event Finder App Concept',
            color : COLORS.orange,
            buttonActive : COLORS.orangeActive,
            buttonFont : COLORS.orangeFontButton,
            buttonFontActive : COLORS.orangeFontActive,
            fontColor : COLORS.orangeFont,
            navColorScheme: {
                navItem : COLORS.orangeFont,
                background:COLORS.orangeNavBackground,
                line:COLORS.orangeNavLine,
                font:COLORS.orangeNavFont
            },
            stateImg : <OrangePhone/>
        },
        {
            name: 'Restaurant Recognition App Redesign',
            color : COLORS.red,
            buttonActive : COLORS.redActive,
            buttonFont : COLORS.redFontButton,
            buttonFontActive : COLORS.redFontActive,
            fontColor : COLORS.redFont,
            navColorScheme: {
                navItem : COLORS.redFont,
                background:COLORS.redNavBackground,
                line:COLORS.redNavLine,
                font:COLORS.redNavFont
            },
            stateImg : <RedPhone/>
        }
    ]


    

    const increment =() =>{
        if(backgroundStateIndex+1>=backgroundState.length){
            changeBackgroundStateIndex(0)
        }
        else{
            changeBackgroundStateIndex(backgroundStateIndex+1)
        }
        
    }

    const decrement =() => {
        if(backgroundStateIndex<=0){
            changeBackgroundStateIndex(backgroundState.length-1)
        }
        else{
            changeBackgroundStateIndex(backgroundStateIndex-1)
        }
    }

    return (
    <Page backgroundColor={backgroundState[backgroundStateIndex].color}>
        <div style={{position: 'relative', zIndex:10}}>
            <Navbar colorScheme={backgroundState[backgroundStateIndex].navColorScheme}></Navbar>
        </div>
        <div style={{transform: 'translateY(24vh)'}}>
            <Content>
                <Arrow>
                    <ChevronLeft size={30} color={backgroundState[backgroundStateIndex].navColorScheme.navItem} onClick={decrement}></ChevronLeft>
                </Arrow>
                {backgroundState[backgroundStateIndex].stateImg}
                <Arrow>
                    <ChevronRight size={30} color={backgroundState[backgroundStateIndex].navColorScheme.navItem} onClick={increment}></ChevronRight>
                </Arrow>
            </Content>
            <LandingFoot>
                <PageTitle style={{color: backgroundState[backgroundStateIndex].fontColor}}><b>{backgroundState[backgroundStateIndex].name}</b></PageTitle>
                <InstructionContainer>
                    <div style={{marginRight: '15px'}}>
                        <p style={{fontSize: '0.7em',color: backgroundState[backgroundStateIndex].fontColor}}>Scroll down to see colors</p>
                        <p style={{float: 'right',fontSize: '0.7em',color: backgroundState[backgroundStateIndex].fontColor}}>& fonts</p>
                    </div>
                    
                    <Mouse2 size={30} color={backgroundState[backgroundStateIndex].navColorScheme.navItem} onClick={decrement}></Mouse2>
                </InstructionContainer>
            </LandingFoot>
        </div>
        
    </Page>
    
    );
}

export default Landing;
