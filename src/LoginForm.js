
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginForm = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="login-box">
        <Col md={6} className="bg-image"></Col>
        <Col md={6} className="bg-light p-5">
          <div className="text-center mb-4">
            <img src="/HCLogo.webp" alt="Logo" className="logo" />
          </div>
          <h2 className="text-center mb-4">Login to your account</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Login
            </Button>

            <div className="text-center mb-3">
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <div className="text-center mb-3">or</div>

            <div className="d-flex justify-content-around mb-3">
              <Button variant="outline-danger" className="w-45">
                <FaGoogle /> Login with Google
              </Button>
              <Button variant="outline-primary" className="w-45">
                <FaFacebook /> Login with Facebook
              </Button>
            </div>

            <div className="text-center">
              <a href="/sign-up">Don't have an account? Sign up</a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;













































































// import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// const LoginForm = () => {
//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col xs={12} md={6}>
//           <h2 className="my-4 text-center">Login</h2>
//           <Form>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>User ID</Form.Label>
//               <Form.Control type="email" placeholder="Enter user ID" />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100">
//               Login
//             </Button>
//             <div className="mt-3 d-flex justify-content-between">
//               <a href="/forgot-password">Forgot Password?</a>
//               <a href="/sign-up">Sign Up</a>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginForm;
