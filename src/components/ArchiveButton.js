import React from 'react';
import { MdArchive, MdUnarchive } from "react-icons/md";

function ArchiveButton({ id, onArchive, titleButton }) {
  if (titleButton==='Arsipkan'){
    return <button className='action' onClick={() => onArchive(id)}><MdArchive /></button>
  }
  return <button className='action' onClick={() => onArchive(id)}><MdUnarchive /></button>  
}

export default ArchiveButton;