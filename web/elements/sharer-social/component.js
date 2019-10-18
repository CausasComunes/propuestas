import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../../elements/social-icon/component'

const SocialWrapper = styled.div`
  display:flex;
  flex-direction:column;
  // width:6.7rem;
  // margin-left:auto;
  @media(max-width:700px){
    margin-left:0px;
  }
`
const IconWrapper = styled.div`
  display:flex;
  justify-content:space-between;`

const SocialSpan = styled.span`
  font-size:1.6rem;
  font-family:var(--bold);
  color:#4a5d68;
  margin-bottom:1rem;
  text-align: center;
  `

const short_links = {
  //trabajo
  '5d7a9b11ee136700188ea5c0': 'https://tinyurl.com/causa-trabajo',
  //ambiente
  '5d7a9b68ee136700188ea5c2': 'https://tinyurl.com/causa-ambiente',
  //genero
  '5d7a9c23ee136700188ea5c6': 'https://tinyurl.com/causa-genero',
  //vivienda
  '5d7a9a8aee136700188ea5be': 'https://tinyurl.com/causa-vivienda',
  //drogas
  '5d8a2a8cee136700188ea5e8': 'https://tinyurl.com/causa-droga',
  //transparencia
  '5d78f015ee136700188ea5bc': 'https://tinyurl.com/causa-transparencia'
};

export default ({ id, title }) => {
  const socialLinksUrl = (window.location.origin + '/articulado?id=' + id)
  const socialShortLinksUrl = short_links[id]
  const twitterText = encodeURIComponent('Sumate al proyecto "'+title+'" que impulsamos desde Causas comunes')
  const twitterHashtag = encodeURIComponent('CausasComunes')
  const twitterLink = 'https://twitter.com/intent/tweet?url='+socialShortLinksUrl+'&text='+twitterText+'&via=causas_comunes&lang=es'

  return (
    <SocialWrapper>
      <SocialSpan>Compartir</SocialSpan>
      <IconWrapper>
        <SocialIcon
          img={'/static/assets/facebook-icon.svg'}
          link={`http://www.facebook.com/sharer/sharer.php?u=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'} />

        <SocialIcon img={'/static/assets/twitter-icon.svg'}
          link={twitterLink}
          target={'_blank'}
          rel={'noopener noreferrer'} />
      </IconWrapper>
    </SocialWrapper>
  )
}
