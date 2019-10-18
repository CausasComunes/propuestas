import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledIcons = styled.div`
  background-color: #fff;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  height: 46px;
  text-align: center;
  margin: 32px 0;
  
  & > a { margin: 0 8px; }
`
const FooterSocial = ({ children }) => (
  <StyledIcons>
    { children }
  </StyledIcons>

)

FooterSocial.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default FooterSocial
