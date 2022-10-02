import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';
 
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
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <section className="notes-list-empty">
              <p className="notes-list__empty">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>
            </section>
          )
        }
      }
    </LocaleConsumer>
  );
}

NoteList.propTypes = {
  notes : PropTypes.arrayOf(PropTypes.object).isRequired
};
 
export default NoteList;