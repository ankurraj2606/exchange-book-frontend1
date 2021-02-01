import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
//import mainPage from "./components/mainpage";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Address, setAddress] = useState("");

  const signupHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:9990/signup", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        emailId: email,
        password: password,
        Address: Address,
        MobileNo: MobileNo,
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
  };

  return (
    <Form
      onSubmit={(event) => {
        signupHandler(event);
      }}
    >
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input
          type="text"
          name="text"
          id="fname"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="text"
          id="lname"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="Mobile No.">Mobile No</Label>
        <Input
          type="text"
          name="text"
          id="lname"
          placeholder="Enter Mobile No."
          value={MobileNo}
          onChange={(event) => setMobileNo(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="Address">Last Name</Label>
        <Input
          type="text"
          name="text"
          id="Address"
          placeholder="Enter Address"
          value={Address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email Id</Label>
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

export default Signup;
