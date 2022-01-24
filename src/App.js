import { Container, Row, Col } from 'react-bootstrap';
import Lunch from './Lunch';
import Dinner from './Dinner'
import './App.css';
import Breakfast from './Breakfast';
import AddButtons from './AddButtons';


function App() {
  return (
      <Container>
        <Row className="top-row">
          <Col/>
          <Col/>
          <Col>
            <AddButtons/>
          </Col>
        </Row>
        <Row>
        <h1 className='headers-center'>Breakfast</h1>
        <Breakfast/>
        <h1 className='headers-center'>Lunch</h1>
        <Lunch/>
        <h1 className='headers-center'>Dinner</h1>
        <Dinner/>
        </Row>
      </Container>
  );
}

export default App;
