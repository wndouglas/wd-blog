import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Header from "./header/header"
import Footer from "./footer"

export default ({ children }) => (
  <>
  <Header />
  <div css={css`
  background: rgba(255, 216, 155, 0.2);  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, rgba(25, 84, 123, 0.05), rgba(255, 216, 155, 0.2));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, rgba(25, 84, 123, 0.05), rgba(255, 216, 155, 0.2)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */  
  `}>
    <div css={css`
    margin: 0 auto;
    max-width: 1000px;
    min-height: 200vh;
    padding: ${rhythm(3.5)} ${rhythm(2)} ${rhythm(2)} ${rhythm(2)};
    font-size: 90%;`}>
        {children}
    </div>
  </div>
  <Footer/>
  </>
)