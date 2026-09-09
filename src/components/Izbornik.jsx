import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
                            Početna
                        </Nav.Link>

                        <NavDropdown
                            title="Reformer"
                            id="reformer-dropdown"
                        >
                            <NavDropdown.Item
                                onClick={() =>
                                    navigate(RouteNames.INDIVIDUALNI)
                                }
                            >
                                Individualni
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                onClick={() =>
                                    navigate(RouteNames.GRUPNI)
                                }
                            >
                                Grupni
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item
                                onClick={() =>
                                    navigate(RouteNames.REZERVACIJE)
                                }
                            >
                                Rezervacije
                            </NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}