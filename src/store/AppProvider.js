// AppProvider.js
import React, { useState } from 'react';
import AppContext from './auth-context';

const AppProvider = (props) => {
  const [close, setClose] = useState('');

  return (
    <AppContext.Provider value={{ close, setClose }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
