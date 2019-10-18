import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import StyledSecondaryNavbarTitle from '../../elements/secondary-navbar-title/component'
import LinkBar from '../../components/link-bar/component'
import Icon from 'react-icons-kit'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'

const SecondaryBar = styled.div`
  display: flex;
  justify-content:space-between;
  margin-bottom: 2rem;
  padding-left:5%;
  padding-right:5%;
  padding-top:2rem;
  /* estás consideraciones vienen del wrapeo de "portal de propuestas de leyes" */
  height:7rem;
  @media(min-width:424px){
    height:6rem;
  }
  @media(min-width:554px){
    height:4rem;
  }
`

const NavbarDropdown = styled.div`
  position: relative;
  cursor: pointer;
  &.open {
    > ul {
        display: block;
    }
  }
`;

const NavbarDropdownContent = styled.ul`
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    min-width: 160px;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
    z-index: 1;
    left: -10px;
    margin-top: 5px;
    > li {
      color: var(--color-azul-principal);
      display: block;
      font-size: 1.6rem;
      text-transform: uppercase;
      &:hover, &:focus, &:active {
        background-color: var(--color-azul-principal);
        color: #f6f6f6;
      }
      a {
        padding: 10px 20px;
        padding: 12px 16px;
        display: block;
      }
    }
  `;

const links = [
  {
    name: 'Cómo participar',
    hash: '#participate',
    link: '/info?section=como-participar'
  },
  {
    name: 'Acerca de',
    hash: '#about',
    link: '/info?section=acerca-de'
  }
]

const causas = [
  {
    name: 'Trabajo',
    link: '/articulado?id=5d7a9b11ee136700188ea5c0',
  },
  {
    name: 'Ambiente',
    link: '/articulado?id=5d7a9b68ee136700188ea5c2',
  },
  {
    name: 'Género',
    link: '/articulado?id=5d7a9c23ee136700188ea5c6',
  },
  {
    name: 'Vivienda',
    link: '/articulado?id=5d7a9a8aee136700188ea5be',
  },
  {
    name: 'Drogas',
    link: '/articulado?id=5d8a2a8cee136700188ea5e8',
  },
  {
    name: 'Transparencia',
    link: '/articulado?id=5d78f015ee136700188ea5bc',
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

const LandingLink = ({ name, value }) => (
  <a onClick={scroll(value)}>{name}</a>
)

const NavbarLink = ({ name, link }) => (
  <Link href={link}>
    <a>
      {name}
    </a>
  </Link>
)

class SecondaryNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown
    }));
  }
  render() {
    return (
      <SecondaryBar>
        <StyledSecondaryNavbarTitle />
        <LinkBar>
          <NavbarDropdown className={"link " + (this.state.showDropdown ? "open" : "")}>
            <span onClick={this.toggleDropdown}>
              Propuestas
              <Icon icon={chevronDown} size={12} />
            </span>
            <NavbarDropdownContent>
              {causas.map((causa, i) => (
                <li key={i} onClick={this.toggleDropdown}><a href={causa.link}>{causa.name}</a></li>
              ))}
            </NavbarDropdownContent>
          </NavbarDropdown>
          {links.map((li, i) => {
            //return this.props.isLanding
            return false
              ? <LandingLink
                key={i}
                name={li.name}
                value={li.hash} />
              : <NavbarLink
                key={i}
                name={li.name}
                link={li.link} />
          })}
        </LinkBar>
      </SecondaryBar>
    )
  }
}

SecondaryNavbar.propTypes = {
  isLanding: PropTypes.bool
}

export default SecondaryNavbar
