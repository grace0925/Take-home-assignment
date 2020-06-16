import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/header';
import TaskBar from './Components/taskBar';

import {Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <Row className="justify-content-md-center mt-5 pt-5">
        <h3 className='mb-4'>Take-home assignment for Veer ai</h3>
        <Col sm={10}>
          <TaskBar/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
