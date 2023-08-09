import React from 'react';
import './App.css';
import Header from './components/Header';
import AllRoutes from './routes/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
