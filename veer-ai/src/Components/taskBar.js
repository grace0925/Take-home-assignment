import React from 'react';
import {Tab, Row, Col, Nav, Card} from 'react-bootstrap'
import '../Css/taskBar.css'

import Task1 from './task1'
import Task2 from './task2'

const TaskBar = () => (
    <Card>
        <Card.Body>
            <Tab.Container defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className='flex-column'>
                            <Nav.Item>
                                <Nav.Link variant='light' eventKey="first">Task 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Task 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'><Task1/></Tab.Pane>
                            <Tab.Pane eventKey='second'><Task2/></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Card.Body>
    </Card>
);

export default TaskBar;