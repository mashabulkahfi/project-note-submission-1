import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteDetail({ note, onDelete, onArchive }) {
  const { id, title, body, createdAt, archived } = note;
  let titleButton;

  if (archived === true){
    titleButton = 'Pindahkan'
  } else {
    titleButton = 'Arsipkan'
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <DeleteButton id={id} onDelete={onDelete}/>
        <ArchiveButton id={id} onArchive={onArchive} titleButton={titleButton}/>
			</div>
    </section>
  );
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
};

export default NoteDetail;
