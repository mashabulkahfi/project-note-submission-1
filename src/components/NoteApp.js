import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import DetailPageWrapper from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';

function NoteApp() {
    return (
        <div className="note-app">
          <header className='note-app__header'>
            <h1><Link to="/">Aplikasi Catatan</Link></h1>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/notes/:id" element={<DetailPageWrapper />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      );
}

export default NoteApp;
