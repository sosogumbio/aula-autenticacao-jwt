import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import AuthRequests from '../../fetch/AuthRequests'
import { useState } from 'react';

function Navegacao() {
    // criando estado para controlar a renderização condicional
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const isAuth = localStorage.getItem('isAuth');
        const token = localStorage.getItem('token');
        return !!(isAuth && token && AuthRequests.checkTokenExpiry());
    });

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const estiloNavOptions = {
        color: 'var(--fontColor)',
    }

    const logout = () =>{
        AuthRequests.removeToken();
    }
    return (
        <>
           <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>

                    {isAuthenticated ? (
                        <>
                            <Nav className="me-auto">
                                <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                            </Nav>

                            <Button onClick={logout} variant='light'>Sair</Button>
                        </>
                    ) : (
                        <Button href='/login' variant='light'>Login</Button>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;