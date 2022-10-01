import React from 'react';
import { MdArchive, MdUnarchive } from "react-icons/md";
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive, titleButton }) {
  if (titleButton==='Arsipkan'){
    return <button className='action' onClick={() => onArchive(id)}><MdArchive /></button>
  }
  return <button className='action' onClick={() => onArchive(id)}><MdUnarchive /></button>  
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  titleButton: PropTypes.string.isRequired
};

export default ArchiveButton;