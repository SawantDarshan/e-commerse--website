import React from "react";
import {
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart, } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../asset/logo.svg";
import useStyles from "./styles";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavbarProject = ({ totalItems, logout,user }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Navbar expand="lg" fixed="top" style={{height: "4em"}} className="bg-orange">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={classes.image}
            />{" "}
            E-commerce app
            {location.pathname === "/" && (
             <Link to="/cart" className="ms-2">
               <IconButton
                 
                 aria-label="Show cart items"
                 color="inherit"
                 
               >
                 <Badge  badgeContent={totalItems} color="secondary">
                   <ShoppingCart/>
                 </Badge>
               </IconButton>
             </Link>
           )} 
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="bg-orange w-100" style={{ placeItems: "center", borderRadius: "50px"}}>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>

            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item>{user.email}</NavDropdown.Item>
              {/* <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item to="/" onClick={logout} as={Link}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );

  // return (
  //   <>
  //     <AppBar position="fixed" className={classes.appBar} color="inherit">
  //       <Toolbar>
  //         <Typography to="/" component={Link} variant="h6" className={classes.title} color="inherit">
  //           <img
  //             src={logo}
  //             alt="commerce.js"
  //             height="25px"
  //             className={classes.image}
  //           />{" "}
  //           E-commerce app
  //         </Typography>
  //         <div className="nav">
  //           <li className="nav-item">
  //           <Link to="/" className="nav-link">Home</Link>
  //           </li>
  //           <li className="nav-item">
  //           <Link to="/about us" className="nav-link">About us</Link>
  //           </li>
  //           <li className="nav-item">
  //           <Link to="/checkout" className="nav-link">Checkout</Link>
  //           </li>
  //           <li className="nav-item">
  //           {location.pathname === "/" && (
  //           <div className={classes.button}>
  //             <IconButton
  //               component={Link}
  //               to="/cart"
  //               aria-label="Show cart items"
  //               color="inherit"
  //             >
  //               <Badge badgeContent={totalItems} color="secondary">
  //                 <ShoppingCart />
  //               </Badge>
  //             </IconButton>
  //           </div>
  //         )}
  //         </li>
  //         <li className="nav-item"><Link to="/" onClick={logout} className="nav-link">logout</Link></li>
  //         </div>

  //       </Toolbar>
  //     </AppBar>
  //   </>
  // );
};

export default NavbarProject;
