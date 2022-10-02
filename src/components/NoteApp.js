import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { LocaleProvider } from '../contexts/LocaleContext';
import Navigation from './Navigation';
import HomePageWrapper from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import ArchivePage from '../pages/ArchivePage';
import DetailPageWrapper from '../pages/DetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';


class NoteApp extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            // mengembalikan state dengan nilai locale terbaru
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: prevState.localeContext.locale === 'id' ? 'en' : 'id',
              }
            }
          })
        }
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      };
    });

    putAccessToken('');
  }

  async onLoginSuccess({ accessToken }){
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="app-container">
            <header>
              <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />}/>
                <Route path="/register" element={<RegisterPage />}/>
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }
    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <header>
            <h1><Link to="/">{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
            <Navigation logout={this.onLogout} name={this.state.authedUser.name}/>
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
      </LocaleProvider>
    );
  }
}

export default NoteApp;
