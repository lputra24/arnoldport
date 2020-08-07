import React from 'react';
import stateImg1 from '../../Resources/Portfolio DC Iteration 2/No Description/Yellow.png';
import stateImgDesc1 from '../../Resources/Portfolio DC Iteration 2/With Description/Yellow.png';
import stateImg2 from '../../Resources/Portfolio DC Iteration 2/No Description/Yellow 2.png';
import stateImgDesc2 from '../../Resources/Portfolio DC Iteration 2/With Description/Yellow 2.png';
import stateImg3 from '../../Resources/Portfolio DC Iteration 2/No Description/Yellow 3.png';
import stateImgDesc3 from '../../Resources/Portfolio DC Iteration 2/With Description/Yellow 3.png';
import stateImg4 from '../../Resources/Portfolio DC Iteration 2/No Description/Yellow 4.png';
import stateImgDesc4 from '../../Resources/Portfolio DC Iteration 2/With Description/Yellow 4.png';
import Phone from './MobileCompPrototype.js'
import {COLORS} from '../../Resources/Constant.js';

const YellowPhone = () => {

    const imgState = [
        {
            stateName : 'LANDING',
            img : stateImg1,
            imgDesc : stateImgDesc1,
            buttonPanelAddIndent : 0
        },{
            stateName : 'HOME',
            img : stateImg2,
            imgDesc : stateImgDesc2,
            buttonPanelAddIndent : 0
        },{
            stateName : 'HOME PT.2',
            img : stateImg3,
            imgDesc : stateImgDesc3,
            buttonPanelAddIndent : 0
        },{
            stateName : 'EXPLORE',
            img : stateImg4,
            imgDesc : stateImgDesc4,
            buttonPanelAddIndent : 0
        }
    ]

    const buttonColor = {
        button : COLORS.yellow,
        buttonActive : COLORS.yellowActive,
        buttonFont : COLORS.yellowFontButton,
        buttonFontActive : COLORS.yellowFontActive
    }

    return (


        <Phone imgState={imgState} buttonColor={buttonColor}></Phone>
     

    )
}

export default YellowPhone;
