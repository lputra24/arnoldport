import React from 'react';
import stateImg1 from '../../Resources/Portfolio DC Iteration 2/No Description/Orange.png';
import stateImgDesc1 from '../../Resources/Portfolio DC Iteration 2/With Description/Orange.png';
import {COLORS} from '../../Resources/Constant.js';
import Phone from './MobileCompPrototype.js'

const OrangePhone = () => {

    const imgState = [
        {
            stateName : 'HOME',
            img : stateImg1,
            imgDesc : stateImgDesc1,
            buttonPanelAddIndent : 0,
        }
    ]

    const buttonColor = {
        button : COLORS.orange,
        buttonActive : COLORS.orangeActive,
        buttonFont : COLORS.orangeFontButton,
        buttonFontActive : COLORS.orangeFontActive
    }

    return (

        <Phone imgState={imgState} buttonColor={buttonColor}></Phone>
    )
}

export default OrangePhone;