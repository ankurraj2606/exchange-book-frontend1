import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:9990/login", {
      method: "POST",
      body: JSON.stringify({
        emailId: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      r.json().then((result) => {
        console.log(result);
        if (result.status === "success") {
          localStorage.setItem(
            "data",
            JSON.stringify({
              token: result.token,
              status: result.status,
            })
          );
          props.history.push("/homepage");
        }
      });
    });
    return (
      <Form
        onSubmit={(event) => {
          loginHandler(event);
        }}
      >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email Id"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    );
  };
};

export default Login;
