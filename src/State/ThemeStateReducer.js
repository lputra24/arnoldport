import React from 'react'
import {COLORS} from '../Resources/Constant.js';
import BluePhone from '../Components/MobileUIComponents/BlueComponent.js'
import YellowPhone from '../Components/MobileUIComponents/YellowComponent.js'
import OrangePhone from '../Components/MobileUIComponents/OrangeComponent.js'
import RedPhone from '../Components/MobileUIComponents/RedComponent.js'
import {ARROW} from './Action.js'

export const backgroundState =[    
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


export const themeInitialState = {
    stateIndex : 0,
    backgroundState : backgroundState[0],  
    innerStateIndex:0
}

const themeStateReducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case ARROW.LEFT:
            if (state.stateIndex===0){
                return {
                    ...state,
                    stateIndex : backgroundState.length-1,
                    backgroundState : backgroundState[backgroundState.length-1]
                };
            }
            return {
                ...state,
                stateIndex : state.stateIndex - 1,
                backgroundState : backgroundState[state.stateIndex - 1]
            };
        case ARROW.RIGHT:
            if (state.stateIndex===backgroundState.length-1){
                return {
                    ...state,
                    stateIndex : 0,
                    backgroundState : backgroundState[0]
                };
            }
            return {
                ...state,
                stateIndex : state.stateIndex + 1,
                backgroundState : backgroundState[state.stateIndex + 1]
            };
        default:
            return state;
            
    }
};

export default themeStateReducer
