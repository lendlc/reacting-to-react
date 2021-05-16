import { Row, Col } from 'react-bootstrap';

import ListHeader from './ListHeader';

const ItemList = ({ bgcolor, items }) => {
  return (
    <div className=" mt-5 p-3 rounded" style={{ backgroundColor: bgcolor }}>
      <ListHeader />

      <Col>
        {items.map((i, index) => (
          <Row
            key={index}
            className="mt-2 rounded pt-1"
            style={{ backgroundColor: index % 2 === 0 ? '#757575' : null, fontWeight: 500 }}
          >
            <Col className="d-flex justify-content-center pt-2">
              <p>{i.name}</p>
            </Col>
            <Col className="d-flex justify-content-center pt-2">
              <p>₱{i.price}</p>
            </Col>
            <Col className="d-flex justify-content-center pt-2">
              <span
                className="mt-1 mr-2"
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor:
                    i.stock >= 60
                      ? '#95e1d3'
                      : (i.stock < 60 && i.stock) >= 20
                      ? '#fce38a'
                      : '#f38181',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              ></span>
              <p>{i.stock}</p>
            </Col>
          </Row>
        ))}
      </Col>
    </div>
  );
};

export default ItemList;
