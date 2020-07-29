import React from 'react';
import styled from 'styled-components';
import Navburger from './navburger.js';

const NavContainer = styled.div`
position: absolute;
top: 0;
left: 0;
margin: auto;
width: 100%;
`

const Nav = styled.div`
display: flex;
justify-content: space-between;
padding: 50px;
`

const Logo = styled.div`
width: 33%;
padding: 10px;
align-self: flex-start;
color: ${props=>props.color};
border-left: #FFEDC1 solid 2px;
/* border: solid black 1px; */
`

const MainNav = styled.div`
width: 33%;
align-self: center;
display: flex;
justify-content: space-between;
`

const MenuItem = styled.a`
width: 100%;
text-align: center;
text-decoration: none;
color: ${props=>props.color};
`

const NavBurgerContainer = styled.div`
width: 33%;
align-self: center;
`

const Navbar = (props) => {

    const colorScheme=props.colorScheme;

    return(
        <NavContainer>
            <Nav>
                <Logo color={colorScheme.navItem}>
                    <h4>UI & UX Design</h4>
                    <h4>by Arnold Angelo</h4>
                </Logo>
                <MainNav>
                    <MenuItem color={colorScheme.navItem} href="#">Web UX</MenuItem>
                    <MenuItem color={colorScheme.navItem} href="#">Mobile UX</MenuItem>
                    {/* <div className="container"><a href="#">UX</a></div> */}
                </MainNav>
                <NavBurgerContainer>
                    <Navburger colorScheme={colorScheme}></Navburger>
                </NavBurgerContainer>
            </Nav>
        </NavContainer>
    )
}

export default Navbar;