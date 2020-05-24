import { Link } from "gatsby"
import { css } from "@emotion/core"
import React from "react"

export default ({ slug, children }) => (
    <Link to={slug} css={css`
        display: inline-block;
        transition: all 400ms ease-in;
        white-space: nowrap;
        position: relative;
        
        :after {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          width: 0%;
          content: ".";
          color: transparent;
          background: rgb(159,57,43);
          height: 1px;
          transition: all 0.3s ease-in;
        }
      
        :hover {
          color: rgb(159,57,43);
          text-decoration: none;
          ::after {
            width: 100%;
          }
        }
        `}>
          {children}
    </Link>
  )