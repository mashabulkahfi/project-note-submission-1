import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { LocaleConsumer } from '../contexts/LocaleContext';
import ToggleLocale from './ToggleLocale';
import PropTypes from 'prop-types';

class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') || 'dark',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme,
          };
        })
      }
    };
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
    if (this.props.account === false){
      return(
        <ThemeProvider value={this.state}>
          <ToggleLocale/>
          <ToggleTheme />
        </ThemeProvider>
      )
    }
    return (
      <LocaleConsumer>
        {
          ({ locale }) => {
            return (
              <ThemeProvider value={this.state}>
                <nav className="navigation">
                  <ul>
                    <li><Link to="/archive">{locale === 'id' ? 'Terarsip' : 'Archived'}</Link></li>
                  </ul>
                </nav>
                <ToggleLocale/>
                <ToggleTheme />
                <button type="button" className="button-logout" onClick={this.props.logout}><FiLogOut/>{this.props.name}</button>
              </ThemeProvider>
            )
          }
        }
      </LocaleConsumer>
    )
  }
}

Navigation.propTypes = {
  account: PropTypes.bool.isRequired,
  logout: PropTypes.func,
  name: PropTypes.string
};
 
export default Navigation;