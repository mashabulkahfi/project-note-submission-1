import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete, onArchive, active }) {
//   let validNote;
  let titleButton;
  const validNote=notes;

  if (active === true) {
    titleButton = 'Arsipkan'
  } else {
    titleButton = 'Pindahkan'
  }
  if (validNote.length > 0) {
    return (
      <section className="notes-list">
        { validNote.map((note) => (
         <NoteItem 
          key={note.id} 
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          titleButton={titleButton}
          {...note} />
       ))}
      </section>
    )
  }
  return (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  );
}
 
export default NoteList;