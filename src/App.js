import "./App.css";
import { Navbar, Nav, Form, Button, FormControl,ProgressBar } from "react-bootstrap";

function App() {
  return (
    <div className="body">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">About us </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Contact us </Nav.Link>
          <Nav.Link href="#pricing">Sign in</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Form className="form">
      <Form.Control type="text" className="impt"  placeholder="First name ..." readOnly />
      <Form.Control type="text" className="impt"  placeholder="Last name..." readOnly />

      <Form.Control type="text" className="impt"  placeholder="your email..." readOnly />
      <Form.Control type="text" className="impt" placeholder="your password..." readOnly />
      <Form.Control type="text" className="impt"  placeholder="Retape your password..." readOnly />

        <Button variant="primary" className="btnsubmit" type="submit">
          Submit
        </Button>
        <ProgressBar animated now={45} />
      </Form>
          <footer class="row">
          <p class="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2020 App 
            Designed by Rami ksaier 
          </p>
        </footer>
    </div>
  );
}

export default App;