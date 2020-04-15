import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  dispay: inline-block;
  white-space: nowrap;
  margin: 10px 1vw;
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
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


export default () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/posts">Posts</NavItem>
      <NavItem to="/about/">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
    )
}