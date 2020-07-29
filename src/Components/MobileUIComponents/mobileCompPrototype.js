import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonPanel = styled.div`
position: absolute;
top: 5vw;
left: ${props => 55.2+props.indent}vw;
height: auto;
width: 10vw;
display: block;
`

const Switch = styled.div`
float: right;
display: flex;
width: 8.5vw;
height: 3vw;
background-color: ${props=>props.switchBackgroundColor};
justify-content: center;
align-items: center;
font-size: 0.7em;
color: ${props=>props.switchFontColor};
box-shadow: 1px 1.5px 10px 2px rgba(0, 0, 0, 0.1);
/* border: solid black 1px; */
margin-bottom: 10px;
@keyframes expand-left{
    0%{
        width: 8.5vw;
    }

    100%{
        width: 10vw;
    }
}
`

const ImgContainer = styled.div`
width: 61vw;
height: auto;
/* border: solid black 1px; */
`

const NoDescImg = styled.img`
position: absolute;
width: 61vw;
height: auto;
animation: ${props=>props.isNewState ? 'slideIn 0.7s ease-out' : 'fadeAway 0.7s linear forwards'};
@keyframes fadeAway{
    0%{
        opacity:0;
    }

    100%{
        opacity:1;
    }
}
@keyframes slideIn{
    0%{
        transform: translateX(100vw);
    }

    100%{
        transform: translateX(0);
    }
}

/* border: solid red 1px;  */
`

const DescImg = styled.img`
opacity:0;
position: absolute;
width: 61vw;
height: auto;
animation: ${props=>props.isNewState ? 'appear 1s 0.7s linear forwards' : 'appear 0.5s 0.5s linear forwards'};

@keyframes appear{
    0%{
        opacity:0;
    }
    
    100%{
        opacity:1;
    }
}
@keyframes slideIn{
    0%{
        transform: translateX(100vw);
    }

    100%{
        transform: translateX(0);
    }
}
/* border: solid red 1px;  */
`

const Phone = (props) => {

    const [imgStateIndex,changeImgStateIndex] = useState(0);
    const [isNewState,changeIsNewState] = useState(true);

    const imgState = props.imgState;
    const stateNum = imgState.length;

    
    const switchBackgroundColor = props.buttonColor.button;
    const switchFontColor = props.buttonColor.buttonFont;
    

    const switchState = (stateIndex) => {
        changeImgStateIndex(stateIndex);
        changeIsNewState(false);  
    }

    return (
        <>
            <ImgContainer>
                    <NoDescImg isNewState={isNewState} src={imgState[imgStateIndex].img}></NoDescImg>
                    <DescImg isNewState={isNewState} src={imgState[imgStateIndex].imgDesc}></DescImg>
            </ImgContainer>
            {stateNum>1 &&
                <ButtonPanel indent={imgState[imgStateIndex].buttonPanelAddIndent}>
                {imgState.map((stateValue,index) => {
                    return <Switch 
                            switchBackgroundColor = {switchBackgroundColor}
                            switchFontColor = {switchFontColor}
                            key={index} 
                            onClick={()=>switchState(index)}
                            style={index===imgStateIndex ? {backgroundColor: props.buttonColor.buttonActive,
                                                            color: props.buttonColor.buttonFontActive,
                                                            animation : isNewState ? 'expand-left 0.15s 0.55s ease-out forwards'
                                                                                    : 'expand-left 0.3s linear forwards'}: null}
                            ><b>{stateValue.stateName}</b></Switch>
                })}
            </ButtonPanel>}
        </>
    )
}

export default Phone;