import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Sobre el sitio</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
      “Propuestas.CausasComunes” es un desarrollo basado en tecnología provista por <a href='https://democraciaenred.org'>Democracia en Red</a>.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
