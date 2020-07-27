import React from 'react';
import stateImg1 from '../../Resources/Portfolio DC Iteration 2/No Description/Blue.png';
import stateImgDesc1 from '../../Resources/Portfolio DC Iteration 2/With Description/Blue.png';
import stateImg2 from '../../Resources/Portfolio DC Iteration 2/No Description/Blue 2.png';
import stateImgDesc2 from '../../Resources/Portfolio DC Iteration 2/With Description/Blue 2.png';
import Phone from './mobileCompPrototype.js'
import {COLORS} from '../../Resources/constant.js';


const BluePhone = () => {

    const imgState = [
        {
            stateName : 'HOME',
            img : stateImg1,
            imgDesc : stateImgDesc1,
            buttonPanelAddIndent : 0
        },{
            stateName : 'DRAG',
            img : stateImg2,
            imgDesc : stateImgDesc2,
            buttonPanelAddIndent : 0
        }
    ]

    const buttonColor = {
        button : COLORS.blue,
        buttonActive : COLORS.blueActive,
        buttonFont : COLORS.blueFontButton,
        buttonFontActive : COLORS.blueFontActive
    }


    return (

        <Phone imgState={imgState} buttonColor={buttonColor}></Phone>
    )
}

export default BluePhone;

