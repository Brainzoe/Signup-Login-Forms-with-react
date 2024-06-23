import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignUpForm = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="sign-up-box">
        <Col md={6} className="bg-image"></Col>
        <Col md={6} className="bg-light p-5">
          <div className="text-center mb-4">
            <img src="/logo1.png" alt="Logo" className="logo" />
          </div>
          <h2 className="text-center mb-4">Create an account</h2>
          <Form>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group controlId="formMiddleName" className="mb-3">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your middle name" />
            </Form.Group>

            <Form.Group controlId="formLastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group controlId="formStateOfOrigin" className="mb-3">
              <Form.Label>State of Origin</Form.Label>
              <Form.Control type="text" placeholder="Enter your state of origin" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>

            <div className="text-center">
              <a href="/">Already have an account? Login</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;

























































// import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// const SignUpForm = () => {
//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col xs={12} md={6}>
//           <h2 className="my-4 text-center">Sign Up</h2>
//           <Form>
//             <Form.Group controlId="formFirstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter first name" />
//             </Form.Group>

//             <Form.Group controlId="formMiddleName">
//               <Form.Label>Middle Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter middle name" />
//             </Form.Group>

//             <Form.Group controlId="formLastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter last name" />
//             </Form.Group>

//             <Form.Group controlId="formStateOfOrigin">
//               <Form.Label>State of Origin</Form.Label>
//               <Form.Control type="text" placeholder="Enter state of origin" />
//             </Form.Group>

//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group controlId="formAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control type="text" placeholder="Enter address" />
//             </Form.Group>

//             <Form.Group controlId="formPhoneNumber">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control type="text" placeholder="Enter phone number" />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100">
//               Sign Up
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUpForm;
