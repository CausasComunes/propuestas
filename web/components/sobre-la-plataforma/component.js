import React from 'react'
import styled from 'styled-components'
import StaticInfoTitle from '../../elements/static-info-title/component'
import StaticInfoBold from '../../elements/static-info-bold/component'
import StaticInfoP from '../../elements/static-info-p/component'

const StyledDiv = styled.div`
  margin-bottom: 20px;
`

export default () => (
  <section>
    <StaticInfoTitle>Acerca de</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es Causas Comunes?
      </StaticInfoBold>
      <StaticInfoP>
        Somos personas preocupadas por la la ausencia de políticas públicas. Venimos construyendo alternativas, movilizándonos, encontrándonos en las calles, en las redes, desde diversos espacios y territorios. Tenemos ideas, tenemos propuestas y buscamos que tengan impacto real.
      </StaticInfoP>
      <StaticInfoP>
        Queremos usar el espacio electoral para aportar al debate; las Elecciones no pueden ser “ir a votar y nada más”. Queremos contribuir con soluciones concretas, con perspectivas amplias, inclusivas y diversas, porque no estamos dispuestos/as a seguir postergando cuestiones que necesitan ser resueltas hoy.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es “Propuestas.CausasComunes”?
      </StaticInfoBold>
      <StaticInfoP>
      Desde Causas Comunes queremos comprometer a lxs candidatxs en temas puntuales de las agendas de género, vivienda, trabajo, ambiente, drogas y transparencia.
      </StaticInfoP>
      <StaticInfoP>
      “Propuestas.CausasComunes” es una plataforma de elaboración colaborativa de propuestas de ley. Invitamos a lxs candidatxs, a las organizaciones de la sociedad civil organizada, a la academia y a la ciudadanía en general a usarla para co-crear propuestas de ley concretas y así generar un nuevo espacio que permita enriquecer el debate público.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Qué es la co-creación de propuestas?
      </StaticInfoBold>
      <StaticInfoP>
        La co-creación de propuestas de ley rompe con la forma tradicional de legislar en la que un equipo de políticos profesionales y técnicos elaboran los proyectos de ley. Co-crear supone abrir y federalizar ese proceso.
      </StaticInfoP>
      <StaticInfoP>
        “Propuestas.CausasComunes” es un espacio en el que la sociedad civil organizada, la academia y personas especializadas en diversas temáticas pueden incorporar sus puntos de vista a iniciativas concretas para que, con sus aportes, creemos colectivamente alternativas de políticas públicas que sean valientes y sean posibles.
      </StaticInfoP>
    </StyledDiv>
  </section>
)
