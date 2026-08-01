import React, { createContext, useContext, useState } from 'react';

interface OrderModalContextType {
  isModalOpen: boolean;
  preselectedMedicine: string;
  openOrderModal: (medicineName?: string) => void;
  closeOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export const OrderModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedMedicine, setPreselectedMedicine] = useState('');

  const openOrderModal = (medicineName?: string) => {
    if (medicineName) {
      setPreselectedMedicine(medicineName);
    } else {
      setPreselectedMedicine('');
    }
    setIsModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsModalOpen(false);
    setPreselectedMedicine('');
  };

  return (
    <OrderModalContext.Provider value={{ isModalOpen, preselectedMedicine, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = (): OrderModalContextType => {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
};
