import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./navbarLinks"
import Logo from "./navbarLogo"
import { rhythm } from "../../utils/typography"

const Navigation = styled.nav`
  height: ${rhythm(2)};
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: ${rhythm(1.5)} auto;
  padding: 0 ${rhythm(1)};
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: ${rhythm(1.5)};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.nav`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.nav`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
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
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div style={{ float: `right`, position: `absolute` }}>
            {navbarOpen ? <Hamburger open/> : <Hamburger />}
          </div>
        </Toggle>
        {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
    </Navigation>
  )
}

