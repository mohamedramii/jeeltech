'use client';

import React from 'react';
import NotesLabel from './NotesLabel';

export default function NotesLabelWrapper(props) {
  // Event handlers defined in the client component
  const handleEdit = () => {
    console.log('Edit note');
    // Add your edit logic here
  };
  
  const handleDelete = () => {
    console.log('Delete note');
    // Add your delete logic here
  };
  
  return (
    <NotesLabel
      {...props}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}
