import React from 'react'
import styled from 'styled-components'

const StyledSecondaryNavbarTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-azul-principal);
  text-transform: uppercase;
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`
const Span = styled.span`
  font-family: var(--bold);
`

const SecondaryNavbarTitle = () => (
  <StyledSecondaryNavbarTitle>
   <a href="/">Portal de <Span>Propuestas de Leyes</Span></a>
  </StyledSecondaryNavbarTitle>
)

export default SecondaryNavbarTitle
