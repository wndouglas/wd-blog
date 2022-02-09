import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { LearnPageName } from "../../pages/learn"
import { IndexPageName } from "../../pages/index"
import { AboutPageName } from "../../pages/about"
import { ContactPageName } from "../../pages/contact"
import { PostsPageName } from "../../pages/posts"

const NavItem = styled(Link)`
  display: inline-block; 
  color: #111;
  text-decoration: none;
  box-shadow: none;
  white-space: nowrap;
  margin: ${rhythm(0.3)} 1vw;
  transition: all 200ms ease-in;
  position: relative;
  top: -20px;
  
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(159,57,43);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: rgb(159,57,43);
    text-decoration: none;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    padding: 10px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


export default () => {
  return (
    <>
      <NavItem to="/">{IndexPageName}</NavItem>
      <NavItem to="/posts">{PostsPageName}</NavItem>
      <NavItem to="/learn">{LearnPageName}</NavItem>
      <NavItem to="/about">{AboutPageName}</NavItem>
      <NavItem to="/contact">{ContactPageName}</NavItem>
    </>
    )
}