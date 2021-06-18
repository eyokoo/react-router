import React from 'react';
import Navigation from './components/Navigation'
import AppRouter from './Router'
import { BrowserRouter } from "react-router-dom"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
