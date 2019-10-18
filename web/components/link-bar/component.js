import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
  > a, .link {
    color: var(--color-azul-principal);
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.6rem;
    text-transform: uppercase;
    &:last-child{
      padding-right:0px;
    }
    i {
      padding-left: 4px;
    } 
  }
`
const LinkBar = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

LinkBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LinkBar
