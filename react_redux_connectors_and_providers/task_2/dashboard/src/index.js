import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import { Provider } from 'react-redux'; // Import Provider from react-redux
import uiReducer from './reducers/uiReducer'; // Ensure the path to your reducer is correct

// Create a Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;
