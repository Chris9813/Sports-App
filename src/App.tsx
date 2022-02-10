import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

function App() {
  return <div>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </div>
}

export default App;
