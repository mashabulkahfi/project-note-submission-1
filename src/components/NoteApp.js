import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from './Navigation';
import HomePageWrapper from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import DetailPageWrapper from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';


class NoteApp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    }
  }

  render() {
    if (this.state.authedUser === null){
      return (
        <div className="app-container">
          <header>
            <h1>Aplikasi Catatan</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<p>Halaman Login</p>}/>
              <Route path="/register" element={<RegisterPage />}/>
            </Routes>
          </main>
        </div>
      );
    }
    return (
      <div className="app-container">
        <header>
          <h1><Link to="/">Aplikasi Catatan</Link></h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/notes/:id" element={<DetailPageWrapper />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default NoteApp;
