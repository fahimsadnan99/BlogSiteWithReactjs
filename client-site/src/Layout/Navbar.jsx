import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
import {ImEye,ImLocation} from "react-icons/im"
import {MdOutlineDevices} from "react-icons/md"

import platform from "platform";


let menuList = ["", "Dashboard"];

function MyNavbar() {
  let [location,setLocation] = useState({
    latitude : "",
    longitude : ""
  })

  const [menuName, setMenuName] = useState(null);
  const Device = localStorage.getItem('device');
  useEffect(()=>{
    localStorage.setItem("device", platform);
    window.navigator.geolocation.watchPosition(position => {
    
    
    setLocation({
      latitude : position.coords.latitude,
      longitude  :  position.coords.longitude
    })
    })
  },[])
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav>
          <NavLink className="navbar-brand" to="/">
            I Can <ImEye style={{fontSize : "35px"}}/> U
          </NavLink>
          <small className="align-self-center text-danger">Your <ImLocation/> : latitude {location.latitude} & longitude {location.longitude}</small>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuList?.map((menu, ind) => {
              return (
                <Nav.Link key={ind}>
                  <NavLink
                    className={` text-center  link ${menuName == menu ? "active" : null}`}
                    to={menu == "" ? "/" : `/${menu}`}
                    onClick={() => setMenuName(menu)}
                  >
                    {menu == "" ? "Home" : menu}
                  </NavLink>
                </Nav.Link>
              );
            })}
            <p className="mb-0 text-center align-self-center" style={{color : "red", fontWeight : "bold"}}> <MdOutlineDevices/> : {Device}</p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;


