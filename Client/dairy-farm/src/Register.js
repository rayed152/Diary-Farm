import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import Axios from 'axios';


function Register() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [firstnameReg, setFirstnameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  

  const register = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
      first_name: firstnameReg,
      last_name: lastnameReg,
      email: emailReg,
    }).then((response)=>{
      console.log(response);
    })
  }
  


  return (
    <div>
        <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=> {setFirstnameReg(e.target.value);
                }} />
                
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=> {setLastnameReg(e.target.value);
                }} />
                
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={(e)=> {setEmailReg(e.target.value);
                }} />
                
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" onChange={(e)=> {setUsernameReg(e.target.value);
                }} 
                />

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                onChange={(e)=> {setPasswordReg(e.target.value);
                }}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default Register