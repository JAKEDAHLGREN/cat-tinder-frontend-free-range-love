import React, { useState } from 'react';
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavbarBrand, NavLink, NavbarText,} from "reactstrap"
// import { NavLink } from "react-router-dom"
// import { Button } from "reactstrap"

// const Header = () => {
// 	return (
// 		<Nav>
// 			<NavItem>
// 				<NavLink to="/"></NavLink>
// 				<NavItem></NavItem>
// 				<NavLink to="/cowindex" className="nav-link">
// 					<Button>Meet the Cows</Button>
// 				</NavLink>
// 				<NavItem></NavItem>
// 				<NavLink to="/cownew" className="nav-link">
// 					Add a Cow
// 				</NavLink>
// 			</NavItem>
// 		</Nav>
// 	)
// }


function Header(args) {
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
