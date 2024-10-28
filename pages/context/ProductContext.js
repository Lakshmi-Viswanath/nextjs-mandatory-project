// context/ProductContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children, initialProducts = [] }) => { // Default to empty array
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch {
          setError("Some error occurred while fetching products.");
        }
      };
      fetchProducts();
    }
  }, [products]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addToCart, cart, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
