import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
 
// function Navigation({ logout, name }) {
//   return (
//     <nav className="navigation">
//       <ul>
//         <li><Link to="/archive">Arsip</Link></li>
//         <li><button type="button" className="button-logout" onClick={logout}><FiLogOut/>{name}</button></li>
//       </ul>
//     </nav>
//   );
// }
class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') || 'dark',
      toggleTheme: () => {
        this.setState((prevState) => {
          // mendapatkan nilai tema baru berdasarkan state sebelumnya
          const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';

          // menyimpan nilai tema baru ke local storage
          localStorage.setItem('theme', newTheme);

          // mengembalikan state dengan nilai theme terbaru
          return {
            theme: newTheme,
          }
        })
      }
    }
  }

  componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <nav className="navigation">
          <ul>
            <li><Link to="/archive">Arsip</Link></li>
            <li><ToggleTheme /></li>
            <li><button type="button" className="button-logout" onClick={this.props.logout}><FiLogOut/>{this.props.name}</button></li>
          </ul>
        </nav>
      </ThemeProvider>
    );
  }
}
 
export default Navigation;