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

const Page = styled.div`
width: 100vw;
height: 100vh;
background-color: ${props => props.backgroundColor};
overflow:hidden;
`
const Content = styled.div`
display: flex;
justify-content: space-between;
transform: translateY(22vh);
`

const Arrow = styled.div`
margin-top: 28vh;
margin-right: 2vw;
margin-left: 2vw;   
width: auto;
height: auto;
/* border: solid black 1px; */
`

const Landing= () => {

    const [backgroundStateIndex,changeBackgroundStateIndex] = useState(0);


    const backgroundState =[    
        {
            color : COLORS.blue,
            buttonActive : COLORS.blueActive,
            buttonFont : COLORS.blueFontButton,
            buttonFontActive : COLORS.blueFontActive,
            fontColor : COLORS.BlueFont,
            navColorScheme: {
                background:COLORS.blueNavBackground,
                line:COLORS.blueNavLine,
                font:COLORS.blueNavFont
            },
            stateImg : <BluePhone/>
        },
        {
            color : COLORS.yellow,
            buttonActive : COLORS.yellowActive,
            buttonFont : COLORS.yellowFontButton,
            buttonFontActive : COLORS.yellowFontActive,
            fontColor : COLORS.yellowFont,
            navColorScheme: {
                background:COLORS.yellowNavBackground,
                line:COLORS.yellowNavLine,
                font:COLORS.yellowNavFont
            },
            stateImg : <YellowPhone/>
        },
        {
            color : COLORS.orange,
            buttonActive : COLORS.orangeActive,
            buttonFont : COLORS.orangeFontButton,
            buttonFontActive : COLORS.orangeFontActive,
            fontColor : COLORS.orangeFont,
            navColorScheme: {
                background:COLORS.orangeNavBackground,
                line:COLORS.orangeNavLine,
                font:COLORS.orangeNavFont
            },
            stateImg : <OrangePhone/>
        },
        {
            color : COLORS.red,
            buttonActive : COLORS.redActive,
            buttonFont : COLORS.redFontButton,
            buttonFontActive : COLORS.redFontActive,
            fontColor : COLORS.redFont,
            navColorScheme: {
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
        <div>
            <Navbar colorScheme={backgroundState[backgroundStateIndex].navColorScheme}></Navbar>
        </div>
        <Content>
            <Arrow>
                 <ChevronLeft size={30} color={COLORS.white} onClick={decrement}></ChevronLeft>
            </Arrow>
            {backgroundState[backgroundStateIndex].stateImg}
            <Arrow>
                <ChevronRight size={30} color={COLORS.white} onClick={increment}></ChevronRight>
            </Arrow>
        </Content>
    </Page>
    );
}

export default Landing;
