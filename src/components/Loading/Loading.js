import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Loading/LoadingStyle.scss'


export default function Loading () {

        return(
            <Container style={{width:'100%', height:'70vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Row>
                    <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',}}>
                        <div class="spinner">
                        <span class="spinner-inner-1"></span>
                        <span class="spinner-inner-2"></span>
                        <span class="spinner-inner-3"></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
}