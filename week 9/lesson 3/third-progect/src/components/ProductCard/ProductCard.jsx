import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ item, handleEdit, deleteProduct }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Description: {item.desc} <br />
          Price: {item.price}
        </Card.Text>
        <Button variant="danger" onClick={() => {
          deleteProduct(item.id)
        }}>Delete</Button>
        <Button
          className="mx-1"
          variant="dark"
          onClick={() => handleEdit(item.id)}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;