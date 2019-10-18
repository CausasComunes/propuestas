import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 1.4rem;
  color: #101a21;
  padding:10px 10px 10px 0;
  line-height: 1.5;
`

const SubtitleH3 = (props) => (
  <Title>{ props.children }</Title>
)

SubtitleH3.propTypes = {
  children: PropTypes.string.isRequired
}

export default SubtitleH3
