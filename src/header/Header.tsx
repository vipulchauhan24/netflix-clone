import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setGenre } from "../redux/reducers/modelSlice";

export function Header() {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand style={{ color: "red", fontSize: "36px" }} href="#">
            MFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-dark">
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">
                Genres
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark">
              <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={()=>{dispatch(setGenre(null))}}>All</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Drama"))}}>Drama</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("History"))}}>History</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Fantasy"))}}>Fantasy</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Family"))}}>Family</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Romance"))}}>Romance</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Comedy"))}}>Comedy</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Short"))}}>Short</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("War"))}}>War</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(setGenre("Western"))}}>Western</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
