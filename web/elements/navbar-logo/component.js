import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLogo = styled.div`
width:33%;
display:flex;
justify-content:center;
`

const Logo = styled.div`
  width: 130px;
  height: 98px;
  background-image:url(${'/static/assets/cc-logo-color.png'});
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  cursor:pointer;
  @media (max-width: 760px) {
    width: 67px;
    height: 51px;
    margin-top:auto;
  }
`

const NavbarLogo = () => (

  <StyledLogo>
    <a href='https://causascomunes.org/'>
      <Logo />
    </a>
  </StyledLogo>

)

export default NavbarLogo
