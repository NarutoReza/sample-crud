import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies()


function Nave() {
    const email = cookies.get('email')
    console.log(email)

    const renderLogButton = () => {
        if(!email){
            return <Nav.Link href="/">Log In</Nav.Link>;
        }
        else{
            return <Nav.Link href="/logout">Log Out</Nav.Link>;
        }
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Crud Operation</Navbar.Brand>

                    <Nav className="me-auto">
                        {renderLogButton()}
                        
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/all">View All</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet />
      </>
    );

    }
    
export default Nave;