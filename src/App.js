import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'


import NewItemCard from './components/NewItemCard'
import ItemListCard from './components/ItemListCard'
import './App.css';


function App() {
  const bgSecondary = '#494949';

  const  [items, setItems] = useState(
    [
      {
        name: 'Gateron KS3 Yellows',
        price: 130,
        stock: 100,
      },
      {
        name: 'JWK Reds',
        price: 120,
        stock: 50,
      },
      {
        name: 'Holy Pandas',
        price: 450,
        stock: 19,
      },
      {
        name: 'Kailh Box Navy',
        price: 230,
        stock: 60,
      },
    ],
  );

  const addTask = (task) => {
    
    setItems([...items, task])
  }


  return (
    <div className="App">
      <Container fluid className='w-75'>
        <Row className='d-flex justify-content-center'>
          <Col sm={3}>
            <NewItemCard bgcolor={bgSecondary} addTask={addTask}></NewItemCard>
          </Col>
          <Col sm={8}>
           <ItemListCard bgcolor={bgSecondary} items={items}></ItemListCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
