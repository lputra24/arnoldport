import React, {useState} from 'react';
import styled from 'styled-components';

const Toggle=styled.div`
position : absolute;
width: 25px;
height: 20px;
top: 7vw;
right: 11vw;
z-index:10;
`

const MenuTitle=styled.div`
margin-top: 10px;
margin-left: 20px;
color: ${props=>props.fontColor};
`

const OpenedMenu=styled.div`
top: 6vw;
width: 200px;
height: 170px;
right: 10vw;
position:absolute;
background-color: ${props=>props.backgroundColor};
font-size: 0.8em;
@keyframes open{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes close{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
${props=>props.active==null ? 'display:none;' 
        : props.active ? 'animation: open 0.3s ease-out forwards;' 
        : !props.active ? 'animation: close 0.3s ease-out forwards;' 
        : ''}  
`

const Item=styled.div`
margin-bottom: 12px;
display: flex;
color: ${props=>props.fontColor};
`

const Dots=styled.div`
margin-left: -2px;
width:10px;
height: 5px;
background-color: ${props=>props.linesColor};
border-radius: 10px;
align-self:center;
`

const LineBreak=styled.div`
margin-top: 10px;
margin-left: 20px;
margin-bottom: 15px;
width:150px;
height: 2px;
background-color: ${props=>props.linesColor};
`

const Link=styled.p`
margin-left: 10px;
`

const Line1=styled.div`
background-color: ${props=>props.active ? props.linesColor : props.defaultColor};
width: 100%;
border-radius: 10px;
height: 3px;
margin-bottom: 5px;
@keyframes line_1_open{
    0% {
    transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
    100%{
        transform: translateY(8px) rotate(45deg);
    }
}
@keyframes line_1_close{
    0% {
    transform: translateY(8px) rotate(45deg)
    }
    50% {
        transform: translateY(8px)
    }
    100%{
        transform: translateY(0);
    }
}
${props=>props.active==null ? '' 
        : props.active ? 'animation: line_1_open 0.5s ease-in forwards;' 
        : !props.active ? 'animation: line_1_close 0.5s ease-in forwards;' 
        : ''}
`

const Line2=styled.div`
background-color: ${props=>props.active ? props.linesColor : props.defaultColor};
width: 100%;
border-radius: 10px;
height: 3px;
@keyframes line_2_open{
    0% {
    transform: scale(1);
    opacity: 1;
    }
    100%{
        transform: scale(0);
        opacity: 0;
    }
}
@keyframes line_2_close{
    0% {
    transform: scale(0);
    opacity: 0;
}
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
${props=>props.active==null ? '' 
        : props.active ? 'animation: line_2_open 0.5s ease-in forwards;' 
        : !props.active ? 'animation: line_2_close 0.5s ease-in forwards;' 
        : ''}
`

const Line3=styled.div`
background-color: ${props=>props.active ? props.linesColor : props.defaultColor};
width: 100%;
border-radius: 10px;
height: 3px;
margin-top: 5px;
@keyframes line_3_open{
    0% {
    transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
    100%{
        transform: translateY(-8px) rotate(-45deg);
    }
}
@keyframes line_3_close{
    0% {
    transform: translateY(-8px) rotate(-45deg)
    }
    50% {
        transform: translateY(-8px)
    }
    100%{
        transform: translateY(0);
    }
}
${props=>props.active==null ? '' 
        : props.active ? 'animation: line_3_open 0.5s ease-in forwards;' 
        : !props.active ? 'animation: line_3_close 0.5s ease-in forwards;' 
        : ''} 
`

const Contact=styled.div`
margin-left: 20px;
color: ${props=>props.fontColor};
`

const Navburger = (props) => {
    const [active,toggleActive] = useState(null);

    const backgroundColor = props.colorScheme.background;
    const linesColor = props.colorScheme.line;
    const fontColor = props.colorScheme.font;
    const defaultBurgerColor = props.colorScheme.navItem;

    const changeToggle = () =>{
        toggleActive(!active);
    }

    return(
        <div>
            <Toggle onClick={()=>changeToggle()}>
                <Line1 defaultColor={defaultBurgerColor} active={active} linesColor={linesColor}></Line1>
                <Line2 defaultColor={defaultBurgerColor} active={active} linesColor={linesColor}></Line2>
                <Line3 defaultColor={defaultBurgerColor} active={active} linesColor={linesColor}></Line3>
            </Toggle>
            <OpenedMenu active={active} backgroundColor={backgroundColor}>
                <MenuTitle fontColor={fontColor}><b>by Arnold Angelo</b></MenuTitle>
                <LineBreak linesColor={linesColor}></LineBreak>
                <Item fontColor={fontColor}>
                    <Dots linesColor={linesColor}>

                    </Dots>
                    <Link>Clients</Link>
                </Item>
                
                <Item fontColor={fontColor}>
                    <Dots linesColor={linesColor}>

                    </Dots>
                    <Link>About Me</Link>
                </Item>
                <Item  fontColor={fontColor} style={{display: "block"}}>
                    <Contact fontColor={fontColor}>Contact: </Contact>
                    <Contact fontColor={fontColor}><i>aangeloarnold@gmail.com</i></Contact>
                </Item>
            </OpenedMenu>
        </div>
    );
}

export default Navburger;