import React, { Component, Fragment } from "react";
import { 
    Navbar, Container,
    NavbarBrand, NavbarToggler, 
    Collapse, NavItem, 
    Nav
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false
        };
        
        this.toggleNav = this.toggleNav.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return (
            <Fragment>
                <Navbar dark expand="md">
                    <Container className="nav-container">
                        <NavbarBrand href="/"><img src='assets/images/paws-logo.svg' height="30" width="41" alt='Paws' />Paws</NavbarBrand>
                        <NavbarToggler className="ms-auto" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg" /> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg" /> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/catalogue'><span className="fa fa-list fa-lg" /> Catalogue</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg" /> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                {/* <Jumbotron>
                    <className=">
                        <className="row row-header">
                            <className="col-12 col-sm-6">
                                <h1>Ecstacy</h1>
                                <p>We take inspiration from the world's best cuisines and create a fusion that will melt your taste buds!</p>
                            </
                        </
                    </
                </Jumbotron> */}
            </Fragment>
        )
    }
}

export default Header;