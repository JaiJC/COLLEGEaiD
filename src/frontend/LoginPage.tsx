import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import "./LoginPage.css";
import aiviLogo from '/Users/harish/aivisor/src/frontend/aivi.png'; // Import the Aivi logo

export default function Login() {
  const navigate = useNavigate(); // Get the navigate function

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    // You can navigate to the QuizPage here
    navigate('/quiz'); // Use the correct route path you've set up in your app.ts
  }

  return (
    <div className="Login">
      <img src={aiviLogo} alt="Aivi Logo" className="aivi-logo" />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
