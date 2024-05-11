import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const EditProduct = ({
  editProduct,
  showEditModal,
  handleEditClose,
  handleSave,
}) => {
  const [product, setProduct] = useState(editProduct);

  const editTitle = (e) => {
    let newObj = {
      ...product,
      title: e.target.value,
    };
    setProduct(newObj);
  };

  const editDesc = (e) => {
    let newObj = {
      ...product,
      desc: e.target.value,
    };
    setProduct(newObj);
  };

  const editPrice = (e) => {
    let newObj = {
      ...product,
      price: e.target.value,
    };
    setProduct(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...product,
      image: e.target.value,
    };
    setProduct(newObj);
  };
  // console.log(editProduct);
  // console.log(product);

  function saveChanges() {
    handleSave(product);
  }

  return (
    <div>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div classname="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Title"
              value={product.title}
              onChange={editTitle}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Description"
              value={product.desc}
              onChange={editDesc}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Price"
              value={product.price}
              onChange={editPrice}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Url"
              value={product.image}
              onChange={editImage}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="dark" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;