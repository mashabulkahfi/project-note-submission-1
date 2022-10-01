import React from 'react';

function NoteSearch({ keyword, keywordChange }) {
	return (
		<input 
			className='search-bar'
			type="text" 
			placeholder="Cari catatan ..." 
			value={keyword} 
			onChange={(event) => keywordChange(event.target.value)}
		/>
	)
}

export default NoteSearch;