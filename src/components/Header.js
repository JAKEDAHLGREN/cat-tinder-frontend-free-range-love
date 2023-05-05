import React, { useState } from 'react';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavbarBrand, NavLink } from "reactstrap"



const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <Navbar {...args}>
        <NavbarBrand href="/">Free Range Love</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/cowindex">Meet the Cows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cownew">
                Add a Cow
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
