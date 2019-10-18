import styled from 'styled-components'

const P = styled.p`
  position:relative;
 color: rgb(105, 105, 105);
 font-size:1.6rem;
 font-family:var(--normal);
 margin: 0;
 line-height: 1.5rem;
 max-width: 80%;
 &:first-child {
  margin-bottom: 1.5rem;
 }
& > a { color:rgb(42, 75, 140); }
`
export default P
