import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

function NoteSearch({ keyword, keywordChange }) {
	return (
		<LocaleConsumer>
      {({ locale }) => {
        return (
          <input 
            className='search-bar'
            type="text" 
            placeholder={locale === 'id' ? 'Cari catatan ...' : 'Find notes ...'}
            value={keyword} 
            onChange={(event) => keywordChange(event.target.value)}
          />
        )
      }}
		</LocaleConsumer>
	)
}

NoteSearch.propTypes = {
	keyword: PropTypes.string.isRequired,
	keywordChange: PropTypes.func.isRequired
};

export default NoteSearch;