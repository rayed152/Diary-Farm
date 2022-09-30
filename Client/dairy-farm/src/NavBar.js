import React, { useEffect,useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Modal} from 'react-bootstrap';
import axios from 'axios';



const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [reviewCow, setReviewCow] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/FOY').then((response) =>{
            setReviewCow(response.data)
        })
    }, [])

  return (
    <div>
        
          <Navbar bg="dark" variant="dark" className='fixed-top'>
            <Container>
                <div style={{marginLeft:"-200px"}}>
                <Navbar.Brand href="#home" >Dairy Farm</Navbar.Brand>  
                </div>  
                <Nav>
                    <NavDropdown title="Cow Informations" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="allanimal-info">All Cow</NavDropdown.Item>
                        <NavDropdown.Item href="./cow-info">Limousin Cattle</NavDropdown.Item>
                        <NavDropdown.Item href="./calf-info">Holstein Friesians</NavDropdown.Item>
                        <NavDropdown.Item href="./sheep-info">Brown Swiss</NavDropdown.Item>
                    </NavDropdown>

                    {/* <Nav.Link href="#bestcow">Farm Of The Year</Nav.Link> */}

                


                    <NavDropdown title="Create Profile" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="./cow-form">All Animals</NavDropdown.Item>
                        <NavDropdown.Item href="#action7">Employee</NavDropdown.Item>
                        <NavDropdown.Item href="#action7">Pregnant Cows</NavDropdown.Item>
                        <NavDropdown.Item href="#action8">Dead Animals</NavDropdown.Item>
                        <NavDropdown.Item href="#action9">Treatment</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Profile" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action10">Profile Update</NavDropdown.Item>
                        <NavDropdown.Item href="#action11">Daily Update</NavDropdown.Item>
                        <NavDropdown.Item href="#action12">Profile Delete</NavDropdown.Item>
                        <NavDropdown.Item href="#action12">All Profile ID</NavDropdown.Item>
                        
                    </NavDropdown>

                    <Nav.Link href="#login">Gallery</Nav.Link>
                    <Nav.Link href="#login">Sign Out</Nav.Link>   
                </Nav>
              <div style={{marginRight:"-200px"}}>

                <div>
                    <Button variant="primary" onClick={handleShow} style={{width: "180px", marginTop: "0px"}}>
                        Farm Of The Year
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Farm Of The Year 🎉</Modal.Title>
                      </Modal.Header>
                      {reviewCow.map((val)=>{
                        return(
                            <Modal.Body>Congratulations {val.breed} Is The Farm Of The Year.</Modal.Body>
                        )
                      })}
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>              
                </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar