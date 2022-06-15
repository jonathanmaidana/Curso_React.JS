import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Slider from '../../components/SwiperSlide/SwiperSlide'
import { Container, Row, Col } from 'react-bootstrap';


export default function Home () {

    return (
        <Container> 
            <Row>
                <Col>
                <Slider/>
                <ItemListContainer title="Nuestros Productos"/>
                </Col>
            </Row>
        </Container>
    )
}