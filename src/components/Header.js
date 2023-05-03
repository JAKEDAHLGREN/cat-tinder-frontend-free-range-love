import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <Nav className='header-nav'>
      <NavItem>
        <NavLink to='/'>
          {/* <img></img> */}
        </NavLink>
        <NavItem>
        </NavItem>
        <NavLink to='/cowindex' className='nav-link'>
          Meet the Cows
        </NavLink>
        <NavItem>
        </NavItem>
        <NavLink to='/cownew' className='nav-link'>
          Add a Cow
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Header