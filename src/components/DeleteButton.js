import React from 'react';
import { MdDelete } from 'react-icons/md';

function DeleteButton({ id, onDelete }) {
  return <button className='action' onClick={() => onDelete(id)}><MdDelete /></button>
}

export default DeleteButton;