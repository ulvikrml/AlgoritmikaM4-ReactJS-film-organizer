import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SavedFavoritesPage from './pages/SavedFavoritesPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/main' />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/saved-favorite/:id' element={<SavedFavoritesPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
