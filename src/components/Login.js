import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';


function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [jwt, setJwt] = useState();

  /* function postUser(email, password){
    axios.post("http://localhost:4000/login", {
      email: email,
      password: password
    }).then(
      (res)=>console.log(res)
    )
  
  } */
/*   function postUser(email, password){
    axios({
      url: "http://localhost:4000/login/",
      method: "post",
      data:{
        email: email,
        password: password
      }
    }).then((res) => setJwt(res?.headers["x-auth-token"]))
    localStorage.setItem("token", jwt);
  } */
  // this instance of axios to make it recieve response when the status is 400 or 404
  const Axios= axios.create({
    validateStatus: (status) => {
      return status >= 200 && status < 500
    }
  })

    
  return (
    <div className='form-container'>
      <Form onSubmit={(e) => {
      e.preventDefault();
      
      Axios.post("http://localhost:4000/login/",{
        email: email,
        password: password
      })
      .then((res) => res.headers["x-auth-token"])
      .then((value) => {
        setJwt(value);
        localStorage.setItem("token", value);
      })
      .then(() => navigate('/'))

      
    }}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
         we will never share your email with anyone else
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      
      
      <Button  variant="primary" type="button" onClick={() => navigate("/signup")} >
        SignUp
      </Button>
      
      
    </Form>
    </div>
    
  );
}

export default Login;