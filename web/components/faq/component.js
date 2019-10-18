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
    <StaticInfoTitle>Preguntas Frecuentes</StaticInfoTitle>
    <StyledDiv>
      <StaticInfoBold>
        ¿Por qué formulan una propuesta como “proyecto de ley”?
      </StaticInfoBold>
      <StaticInfoP>
      Porque queremos que nuestras propuestas se conviertan en Ley. Para eso, tienen que tratarse en el ámbito que corresponde según nuestra Constitución, el Congreso de la Nación. Nuestras propuestas se formulan, así, atendiendo a criterios mínimos de técnica legislativa.   
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Quiénes leen los comentarios?
      </StaticInfoBold>
      <StaticInfoP>
      Los comentarios serán leídos por representantes de organizaciones de la sociedad civil que patrocinan cada una de las agendas. Podés contar con que son personas comprometidas y conocedoras de las temáticas que tratamos. Estas personas van a analizar las sugerencias y, en caso de encontrarlas pertinentes, las incorporarán a la propuesta, para mejorarla.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿Cuál es el plazo para realizar comentarios?
      </StaticInfoBold>
      <StaticInfoP>
      El plazo para realizar comentarios en cada propuesta de ley está indicado al inicio de la propuesta.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
      ¿Cómo puedo saber qué pasó con la propuesta, una vez finalizado el plazo para hacer aportes?
      </StaticInfoBold>
      <StaticInfoP>
      Una vez finalizado el plazo estipulado, recibirás una notificación con la versión final de la propuesta. Podrás ingresar al sitio para ver los resultados, con la cantidad de aportes tenidos en consideración y la cantidad de comentarios realizados.
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Me puedo contactar Causas Comunes? ¿Cómo?
      </StaticInfoBold>
      <StaticInfoP>
        Nos podés encontrar en redes:<br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://twitter.com/causas_comunes'>twitter.com/causas_comunes</a></u><br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://instagram.com/causascomunes'>instagram.com/causascomunes</a></u><br />
        <u><a rel='noopener noreferrer' target='_blank' href='https://facebook.com/Causas-Comunes-449280685874685'>facebook.com/Causas-Comunes</a></u><br />
        O escribirnos a <u><a rel='noopener noreferrer' target='_blank' href='mailto:causascomunesx@gmail.com'>causascomunesx@gmail.com</a></u>
      </StaticInfoP>
    </StyledDiv>
    <StyledDiv>
      <StaticInfoBold>
        ¿Puedo presentar una propuesta?
      </StaticInfoBold>
      <StaticInfoP>
      Para el período electoral vamos a tratar las 6 propuestas publicadas. Queremos focalizar nuestros esfuerzos en ellas.
      </StaticInfoP>
      <StaticInfoP>
      Pero para el tiempo pos-electoral no habrá límites: si tenés una idea que quieras compartir con nos, escribinos a: <a rel='noopener noreferrer' target='_blank' href='mailto:causascomunesx@gmail.com'><u>causascomunesx@gmail.com</u>.</a>
      </StaticInfoP>
    </StyledDiv>
  </section>
)
