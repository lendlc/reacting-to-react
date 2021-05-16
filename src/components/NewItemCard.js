import { useState } from 'react';
import { Form } from 'react-bootstrap';

const NewItemCard = ({ bgcolor, addTask }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || price <= 0 || stock <= 0) {
      return alert('Provide valid input');
    }

    const obj = {
      name,
      price,
      stock,
    };

    setName('');
    setPrice(0);
    setStock(0);

    addTask(obj);
  };

  return (
    <div className="mt-5 p-3 rounded" style={{ backgroundColor: bgcolor }}>
      <h3>New Product</h3>

      <Form className="pt-3" onSubmit={onSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Control
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="stock">
          <Form.Control
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Group>

        <div class="d-flex flex-row-reverse">
          <button
            type="submit"
            style={{ backgroundColor: 'salmon', border: 0, fontWeight: 500 }}
            className="rounded pl-4 pr-4 pt-2 pb-2"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewItemCard;
