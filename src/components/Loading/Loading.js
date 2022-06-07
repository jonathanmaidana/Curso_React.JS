import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../Loading/LoadingStyle.scss'


export default function Loading () {

        return(
            <Container style={{width:'100%', height:'50vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                    <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',}}>
                        <Spinner animation="border" role="status" className="spinner">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        )
}