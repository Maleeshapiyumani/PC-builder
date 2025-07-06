import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PCBuilder from './pages/PCBuilder';
import Catalog from './pages/Catalog';
import { PCBuilderProvider } from './context/PCBuilderContext';
export function App() {
  return <BrowserRouter>
      <PCBuilderProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/builder" element={<PCBuilder />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PCBuilderProvider>
    </BrowserRouter>;
}