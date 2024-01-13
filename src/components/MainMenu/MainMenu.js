import React, { Component,Fragment } from 'react';
import  BrandLogo from "../../asset/image/navlogo.svg"
import  BrandLogoScroll from "../../asset/image/navlogoScroll.svg"
import { Container,Nav,Navbar } from 'react-bootstrap';

class MainMenu extends Component {
    constructor(){
        super()
        this.state={
            BrandTitle:'BrandTitle',
            Nav:'NavBar',
            BrandLogo:[BrandLogo],
            NavItem:'NavItem'
        }
    }

onScroll=()=>{
    if(window.scrollY>100){
        this.setState({BrandTitle:'BrandTitleScroll'})
        this.setState({Nav:'NavBarScroll'})
        this.setState({BrandLogo:[BrandLogoScroll]})
        this.setState({NavItem:'NavItemScroll'})
        
    }else if(window.scrollY<100){
        this.setState({BrandTitle:'BrandTitle'})
        this.setState({Nav:'NavBar'})
        this.setState({BrandLogo:[BrandLogo]})
        this.setState({NavItem:'NavItem'})
    }
}

componentDidMount(){
    window.addEventListener('scroll',this.onScroll)
}

    render() {
        return (
            <Fragment>
                 <Navbar fixed='top' collapseOnSelect expand="lg" className={this.state.Nav}>
      <Container fluid>
        <Navbar.Brand className={this.state.BrandTitle} href="#home"><img src={this.state.BrandLogo}/>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link className={this.state.NavItem} href="#">Home</Nav.Link>
            <Nav.Link className={this.state.NavItem} href="#">Service</Nav.Link>
            <Nav.Link className={this.state.NavItem} href="#">Course</Nav.Link>
            <Nav.Link className={this.state.NavItem} href="#">Protfolio</Nav.Link>
            <Nav.Link className={this.state.NavItem} href="#">Contact</Nav.Link>
            <Nav.Link className={this.state.NavItem} href="#">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Fragment>
        );
    }
}

export default MainMenu;