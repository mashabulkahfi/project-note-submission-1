import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';
 
function NoteItem({ title, body, id, createdAt }) {
 	return (
   	<div className="note-item">
		<NoteItemBody id={id} title={title} body={body} createdAt={createdAt}/>
   	</div>
 	);
}

NoteItem.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
  };
 
export default NoteItem;