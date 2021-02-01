import React, { useState } from "react";
import SearchPage from "./searchbox";
import Cart from "./cart";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Button } from "reactstrap";
import { withRouter } from "react-router";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signupHandler = function (event) {
    event.preventDefault();
    props.history.push("/signup");
  };
  const loginHandler = function (event) {
    event.preventDefault();
    props.history.push("/login");
  };
  const cartHandler = function (event) {
    event.preventDefault();
    props.history.push("/mainpage");
  };
  return (
    <div>
      <Navbar color="light" light expand="md" className="navbar">
        <NavbarBrand href="/" className="nav-text">
          Exchange-Book
        </NavbarBrand>
        <NavbarBrand href="/">
          <img
            src="https://5.imimg.com/data5/YR/GU/GLADMIN-16290278/exchange-or-tradeoff-500x500.jpg"
            alt="logo"
            className="webLogo"
          />
        </NavbarBrand>
        <NavbarBrand href="/">
          <Button>Exchange</Button>
        </NavbarBrand>
        <NavbarBrand href="/">
          <SearchPage />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={function (event) {
                    signupHandler(event);
                  }}
                >
                  signup
                </DropdownItem>
                <DropdownItem
                  onClick={function (event) {
                    loginHandler(event);
                  }}
                >
                  Login
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem>
            <Button
              onClick={function (event) {
                cartHandler(event);
              }}
            >
              Cart
            </Button>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Example);
