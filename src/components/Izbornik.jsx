
import { Container, Nav, Navbar } from "react-bootstrap";
import { IME_APLIKACIJE, RouteNames } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Izbornik() {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" className="site-navbar">
            <Container>

                <Navbar.Brand
                    onClick={() => navigate(RouteNames.HOME)}
                    style={{ cursor: "pointer" }}
                >
                    {IME_APLIKACIJE}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto">

                        <Nav.Link
                            onClick={() => navigate(RouteNames.HOME)}
                        >
                            <strong>Početna</strong>
                        </Nav.Link>

                        <Nav.Link
                            onClick={() =>
                                navigate(RouteNames.INDIVIDUALNI)
                            }
                        >
                            Individualni treninzi
                        </Nav.Link>

                        <Nav.Link
                            onClick={() =>
                                navigate(RouteNames.GRUPNI)
                            }
                        >
                            Grupni treninzi
                        </Nav.Link>

                        <Nav.Link
                            onClick={() =>
                                navigate(RouteNames.REZERVACIJE)
                            }
                        >
                            Rezervacije
                        </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

