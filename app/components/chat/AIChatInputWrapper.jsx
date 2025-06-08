'use client';

import React from 'react';
import AIChatInput from './AIChatInput';

/**
 * Cliente wrapper for AIChatInput component
 * This component is used to handle client-side events and pass them to AIChatInput
 */
export default function AIChatInputWrapper({ variant }) {
  const handleSend = () => {
    console.log('Send clicked');
  };

  const handleMic = () => {
    console.log('Mic clicked');
  };

  const handleAdd = () => {
    console.log('Add clicked');
  };

  return (
    <AIChatInput
      variant={variant}
      onSend={handleSend}
      onMic={handleMic}
      onAdd={handleAdd}
    />
  );
}
