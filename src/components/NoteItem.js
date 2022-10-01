import React from 'react';
import NoteItemBody from './NoteItemBody';
 
function NoteItem({ title, body, id, createdAt }) {
 	return (
   	<div className="note-item">
		<NoteItemBody id={id} title={title} body={body} createdAt={createdAt}/>
   	</div>
 	);
}
 
export default NoteItem;