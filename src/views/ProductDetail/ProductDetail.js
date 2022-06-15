import React from 'react';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';


export default function Product () {
  const {itemId} = useParams()

  return(
    <Container>
      <Row>
        <Col style={{display: 'flex', justifyContent: 'center'}}>
          <ItemDetailContainer itemId={itemId}/>
        </Col>
      </Row>
    </Container>
  )
}