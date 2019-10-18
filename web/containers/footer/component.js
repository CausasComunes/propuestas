import React from 'react'
import styled from 'styled-components'
import FooterTextWrapper from '../../elements/footer-text-wrapper/component'
import P from '../../elements/footer-text/component'
import FooterSocial from '../../elements/footer-social/component'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  padding-bottom: 2rem;
`
var imgLuminateStyle = {
  verticalAlign: 'middle',
  height: '38px'
};


const Footer = () => (
  <FooterWrapper>
    <FooterTextWrapper>    
     <img height="90px" src={'static/assets/footer-imgs/CC_LogoNegro_mediano.png'} />
    <FooterSocial> 
     <a target="_blank" rel="noopener noreferrer" class="ins-ic" href="https://www.instagram.com/causascomunes/" target="_blank"><img src={'static/assets/footer-imgs/social_instagram_icon.png'} /></a>
     <a target="_blank" rel="noopener noreferrer" class="fb-ic" href="https://www.facebook.com/Causas-Comunes-449280685874685/" target="_blank"><img src={'static/assets/footer-imgs/social_facebook_icon.png'} /></a>
     <a target="_blank" rel="noopener noreferrer" class="tw-ic" href="https://twitter.com/causas_comunes" target="_blank"><img src={'static/assets/footer-imgs/social_twitter_icon.png'} /></a>
     <a class="mail-ic" href="mailto:causascomunesx@gmail.com" target="_blank"><img height="46px" src={'static/assets/footer-imgs/social_mail_icon.png'} /></a>
    </FooterSocial>    
    <P>Un proyecto convocado por <a href="https://democraciaenred.org/" target="_blank">Democracia en Red</a> y <a href="https://activaelcongreso.org/" target="_blank">Activá el congreso</a> con el apoyo de <a href="https://luminategroup.com/" target="_blank"><img src={'static/assets/footer-imgs/luminate_logo.png'} style={imgLuminateStyle} alt="Luminate Group" /></a></P>
    </FooterTextWrapper>
  </FooterWrapper>
)

export default Footer
