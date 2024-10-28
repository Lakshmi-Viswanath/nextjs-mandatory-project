import React, { createContext, useContext, useState } from 'react';

const PlayCardContext = createContext();

export const PlayCardProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const showCard = (product) => {
    setSelectedProduct(product);
    setIsCardVisible(true);
  };

  const closeCard = () => {
    setIsCardVisible(false);
    setSelectedProduct(null);
  };

  return (
    <PlayCardContext.Provider value={{ selectedProduct, isCardVisible, showCard, closeCard }}>
      {children}
    </PlayCardContext.Provider>
  );
};

export const usePlayCardContext = () => {
  return useContext(PlayCardContext);
};
