import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import '../Css/task1.css'

class Task1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            msg: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async verifyEmail(e) {
        try{
            e.preventDefault();
            const resp = await axios.post('http://localhost:4000/api/verifyEmail', {
                email: this.state.email
            })
            if (resp.data == true){
                this.setState({msg: "Your input is a valid email address! :)"});
            } else {
                this.setState({msg: "Your input is not a valid email address :("});
            }
       } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Container>
                <div id="task1-header">                
                    <h4>Node.js API endpoint</h4>
                    <p>REST API endpoint that verifies if the parameter is correct. <br/> 
                    Click the button to call the node endpoint and verify whether your input is a valid email address. </p>
                </div>
                <Form className='text-align-left mt-4' onSubmit={this.verifyEmail}>
                    <Form.Group>
                        <Form.Label>Input</Form.Label>
                        <Form.Control name='email' type="text" placeholder="Enter email" onChange={this.handleInputChange}/>
                        <Form.Text className='text-muted'>An example of a valid email is: grace@uwaterloo.ca</Form.Text>
                    </Form.Group>
                    <Button className='float-right pink-btn' size='sm' variant='danger' type='submit'>Verify</Button>
                    {this.state.msg == '' ? null : (<p>{this.state.msg}</p>)}
                </Form>
            </Container>
        )
    }
}

export default Task1;