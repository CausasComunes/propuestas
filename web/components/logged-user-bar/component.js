import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const StyledBar = styled.div`
display:flex;
justify-content:flex-end;
width:33%;
margin-top:auto;
padding-bottom:.5rem;
transition: 0.5s;
opacity: ${(props) => props.opacity};
`
class LoggedUserBar extends Component {
  constructor (props) {
    super(props)    
    this.state = { opacity: '0' }
  }
  
  componentDidMount () {
    // la idea de esto es que no aparezca la barra de usuario sin estar antes autenticado
    setTimeout(() => { this.setState({opacity: '1'}) }, 500)
  }
    
  render () {
    const {children} = this.props
    return (
      <StyledBar opacity={this.state.opacity}>
        { children }
      </StyledBar>
    )
  }
}

LoggedUserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default LoggedUserBar
