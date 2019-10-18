import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const Bar = styled.div`
display:flex;
justify-content:flex-end;
width:33%;
margin-top:auto;
transition: 0.5s;
opacity: ${(props) => props.opacity};
`

class UserBar extends Component {
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
      <Bar opacity={this.state.opacity}>
        { children }
      </Bar>
    )
  }
}

UserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default UserBar
