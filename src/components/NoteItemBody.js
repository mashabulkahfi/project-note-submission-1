import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
 
function NoteItemBody({ id, title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">
				<Link to={`/notes/${id}`}>{title}</Link>
    	</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
 );
}
 
export default NoteItemBody;