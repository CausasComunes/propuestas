import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Contacto</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoP>
        Nos podés encontrar en las siguientes redes:<br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://twitter.com/causas_comunes'>twitter.com/causas_comunes</a></u><br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://instagram.com/causascomunes'>instagram.com/causascomunes</a></u><br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://facebook.com/Causas-Comunes-449280685874685'>facebook.com/Causas-Comunes</a></u><br />
      </StaticInfoP>
      <StaticInfoP>
        O escribirnos a <u><a rel='noopener noreferrer' target='_blank' href='mailto:causascomunesx@gmail.com'>causascomunesx@gmail.com</a></u>
      </StaticInfoP>
    </StyledDiv>
  </section>
)

