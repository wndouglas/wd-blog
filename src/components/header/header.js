import React, { useState } from "react"
import styled from "styled-components"
import HeaderLinks from "./headerLinks"
import Logo from "./headerLogo"
import { rhythm } from "../../utils/typography"

const NavbarContainer = styled.header`
  height: ${rhythm(2)};
  background-color: rgb(255, 244, 224);
  -webkit-box-shadow: 0 4px 6px -5px #222;
  -moz-box-shadow: 0 4px 6px -5px #222;
  box-shadow: 0 4px 6px -5px #222;
  position: fixed;
  width: 100%;
  padding: ${rhythm(1)} ${rhythm(1)};
  z-index: 2;
`

const Navigation = styled.nav`
  display: flex;
  text-transform: uppercase;
  position: sticky;

  @media (max-width: 650px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }
`

const Toggle = styled.nav`
  display: none;
  height: 100%;
  cursor: pointer;
  justify-content: flex-end;
  @media (max-width: 650px) {
    display: flex;
    padding-right: ${rhythm(1/2)};
  }
`

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: rgb(255, 244, 224);
    transition: all 0.3s ease-in;
    top: 52px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.nav`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center:
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
      transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
      top: -10px;
  }

  ::after {
      opacity: ${props => (props.open ? "0" : "1")};
      transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
      top: 10px;
  }
`

export default () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <NavbarContainer>
      <Navigation>
        <Logo />
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
          >
              {navbarOpen ? <Hamburger open/> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
          <Navbox>
            <HeaderLinks />
          </Navbox>
          ) : (
            <Navbox open>
              <HeaderLinks />
            </Navbox>
          )}
      </Navigation>
    </NavbarContainer>
  )
}

