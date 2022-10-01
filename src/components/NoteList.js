import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
 
function NoteList({ notes }) {
  const validNote = notes;

  if (validNote.length > 0) {
    return (
      <section className="notes-list">
        { validNote.map((note) => (
         <NoteItem 
          key={note.id} 
          id={note.id}
          {...note} />
       ))}
      </section>
    )
  }
  return (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  );
}

NoteList.propTypes = {
  notes : PropTypes.arrayOf(PropTypes.object).isRequired
};
 
export default NoteList;