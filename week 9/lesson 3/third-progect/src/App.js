import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import ProductList from "./components/ProductList/ProductList";
function App() {
  // state for add product modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // products state
  const [products, setProducts] = useState([]);
  console.log(products);

  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }

  // update
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editProduct, setEditProduct] = useState({});

  function handleEdit(id) {
    let obj = products.filter((item) => item.id === id);
    // console.log(obj[0]);
    setEditProduct(obj[0]);
    setShowEditModal(true);
  }

  const handleSave = (obj) => {
    let newProducts = products.map((item) => {
      if (item.id === obj.id) {
        return obj;
      }
      return item;
    });
    setProducts(newProducts);
    setShowEditModal(false);
  };


  // Delete

  const deleteProduct = (id) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setProducts(newProducts);
  };

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct
        show={show}
        handleClose={handleClose}
        handleAddProduct={handleAddProduct}
      />
      {showEditModal && (
        <EditProduct
          editProduct={editProduct}
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          handleSave={handleSave}
        />
      )}
      <ProductList products={products} handleEdit={handleEdit} deleteProduct={deleteProduct} />
    </>
  );
}

export default App;