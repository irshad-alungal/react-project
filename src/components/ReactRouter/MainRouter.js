import React from 'react';
import './MainRouter.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const MainRouter = () => {
  return (
    <div>
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="">
            <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="about">About</Link> 
                </li>
                <li>
                    <Link to="contact">Contact</Link> 
                </li>
                
            </ul>
            </Nav>
        </Container>
      </Navbar>
        </>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
        </Routes>
    </div>
  )
}
