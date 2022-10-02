import { LocaleConsumer } from '../contexts/LocaleContext';
import { MdGTranslate } from "react-icons/md";
 
function ToggleLocale() {
  return (
    <LocaleConsumer>
      {({ toggleLocale }) => {
        return <button className='toggle-locale' onClick={toggleLocale}><MdGTranslate/></button>;
      }}
    </LocaleConsumer>
  );
}
 
export default ToggleLocale;