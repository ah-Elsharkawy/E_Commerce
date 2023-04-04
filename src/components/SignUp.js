import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const Axios = axios.create({
  validateStatus: (status) =>{
    return status >= 200 && status <500
  }
})



let handleSubmit =  (name, email, password) => {
  Axios.post("http://localhost:4000/users/", {
    name: name,
    email: email,
    password: password
  })
  .then((res) => console.log(res));
  
  
}

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='form-container' onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(name, email, password)}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" placeholder="fullName" onChange={e => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default SignUp;