import React from 'react';
import stateImg1 from '../../Resources/Portfolio DC Iteration 2/No Description/Red.png';
import stateImgDesc1 from '../../Resources/Portfolio DC Iteration 2/With Description/Red.png';
import stateImg2 from '../../Resources/Portfolio DC Iteration 2/No Description/Red 2.png';
import stateImgDesc2 from '../../Resources/Portfolio DC Iteration 2/With Description/Red 2.png';
import stateImg3 from '../../Resources/Portfolio DC Iteration 2/No Description/Red 3.png';
import stateImgDesc3 from '../../Resources/Portfolio DC Iteration 2/With Description/Red 3.png';
import Phone from './mobileCompPrototype.js'
import {COLORS} from '../../Resources/constant.js';

const RedPhone = () => {

    const imgState = [
        {
            stateName : 'HOME',
            img : stateImg1,
            imgDesc : stateImgDesc1,
            buttonPanelAddIndent : 0
        },{
            stateName : 'RECENT',
            img : stateImg2,
            imgDesc : stateImgDesc2,
            buttonPanelAddIndent : 7.5
        },{
            stateName : 'RESULT',
            img : stateImg3,
            imgDesc : stateImgDesc3,
            buttonPanelAddIndent : 7.5
        }
    ]

    const buttonColor = {
        button : COLORS.red,
        buttonActive : COLORS.redActive,
        buttonFont : COLORS.redFontButton,
        buttonFontActive : COLORS.redFontActive
    }

    return (
        <Phone imgState={imgState} buttonColor={buttonColor}></Phone>         
    )
}

export default RedPhone;

