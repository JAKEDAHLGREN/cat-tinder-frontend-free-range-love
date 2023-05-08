import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap"



const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <Navbar {...args}>
        <NavbarBrand href="/" className='title-font'>Free Range Love</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>

              <NavLink to="/cowindex" className='nav-cows'>Meet the Grade A Beefcakes</NavLink>
            
            </NavItem>
            <NavItem>
              <NavLink to="/cownew">
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
