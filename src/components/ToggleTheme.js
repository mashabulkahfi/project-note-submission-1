import { ThemeConsumer } from '../contexts/ThemeContext';
import { FaRegMoon, FaMoon, FaSun } from 'react-icons/fa';

 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button className="toggle-theme" onClick={toggleTheme}>{theme === 'light' ? <FaRegMoon /> : <FaSun />}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;