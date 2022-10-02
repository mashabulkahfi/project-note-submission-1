import React from 'react';
// import { addNote } from '../utils/local-data';
import { addNote } from '../utils/api';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
	const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
		navigate('/');
  }
 
  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddPage;