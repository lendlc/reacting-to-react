import { Row } from 'react-bootstrap';

const ListHeader = () => {
  const headers = ['Name', 'Price', 'Stock'];
  return (
    <div className="mb-4 p-3">
      <Row
        className="d-flex justify-content-around rounded p-2"
        style={{ backgroundColor: '#d6d6d6', color: 'black' }}
      >
        {headers.map((item, index) => (
          <h5 key={index} style={{ fontWeight: 'bold' }} className="pt-1">
            {item}
          </h5>
        ))}
      </Row>
    </div>
  );
};

export default ListHeader