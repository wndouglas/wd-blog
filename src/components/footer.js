import { rhythm } from "../utils/typography"
import styled from "styled-components"

const Footer = styled.footer`
height: ${rhythm(0.5)};
background-color: #fff;
position: static;
bottom: 0;
justify-content: space-between;
margin: 0 auto;
padding: 0 ${rhythm(1)};
z-index: 2;
align-self: center;
`

export default Footer