import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col, Button } from 'react-bootstrap'

export default () => (
    <div style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
    <Form method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" required/>
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group controlId="formGroupMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Enter message" required/>
        </Form.Group>
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 5 }}>
             <Button type="submit">Send</Button>
            </Col>
        </Form.Group>
    </Form>
    </div>
)