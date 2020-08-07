import React, {useState} from 'react';
import styled from 'styled-components';
import Navbar from '../Nav/Navbar.js';
import {COLORS} from '../../Resources/Constant.js';
import BluePhone from '../MobileUIComponents/BlueComponent.js'
import YellowPhone from '../MobileUIComponents/YellowComponent.js'
import OrangePhone from '../MobileUIComponents/OrangeComponent.js'
import RedPhone from '../MobileUIComponents/RedComponent.js'
import {ChevronRight} from 'react-bootstrap-icons';
import {ChevronLeft} from 'react-bootstrap-icons';
import {Mouse2} from 'react-bootstrap-icons';
import {useStateValue} from '../../State/StateProvider.js'
import {ARROW} from '../../State/Action.js'

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

    const [stateValue, dispatch]= useStateValue();

    const increment =() =>{
        dispatch({type: ARROW.RIGHT})      
    }

    const decrement =() => {
        dispatch({type: ARROW.LEFT})
    }

    return (
    <Page backgroundColor={stateValue.backgroundState.color}>
        <div style={{position: 'relative', zIndex:10}}>
            <Navbar colorScheme={stateValue.backgroundState.navColorScheme}></Navbar>
        </div>
        <div style={{transform: 'translateY(24vh)'}}>
            <Content>
                <Arrow>
                    <ChevronLeft size={30} color={stateValue.backgroundState.navColorScheme.navItem} onClick={decrement}></ChevronLeft>
                </Arrow>
                {stateValue.backgroundState.stateImg}
                <Arrow>
                    <ChevronRight size={30} color={stateValue.backgroundState.navColorScheme.navItem} onClick={increment}></ChevronRight>
                </Arrow>
            </Content>
            <LandingFoot>
                <PageTitle style={{color: stateValue.backgroundState.fontColor}}><b>{stateValue.backgroundState.name}</b></PageTitle>
                <InstructionContainer>
                    <div style={{marginRight: '15px'}}>
                        <p style={{fontSize: '0.7em',color: stateValue.backgroundState.fontColor}}>Scroll down to see colors</p>
                        <p style={{float: 'right',fontSize: '0.7em',color: stateValue.backgroundState.fontColor}}>& fonts</p>
                    </div>
                    
                    <Mouse2 size={30} color={stateValue.backgroundState.navColorScheme.navItem} onClick={decrement}></Mouse2>
                </InstructionContainer>
            </LandingFoot>
        </div>
        
    </Page>
    
    );
}

export default Landing;
