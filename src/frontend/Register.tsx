import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import "./LoginPage.css";

export default function Register() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event: { preventDefault: () => void; }) {

    event.preventDefault();

  }

  return (

    <div className="Register">

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

          Register

        </Button>

      </Form>

    </div>

  );

}