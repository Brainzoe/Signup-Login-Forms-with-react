import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
