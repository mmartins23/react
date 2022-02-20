import React from 'react';
import Header from './components/Header'
import './App.css'

export default function App() {
  return (
    <Header name="M23" links={["About", "Buy", "Contact"]}></Header>
  );
}

