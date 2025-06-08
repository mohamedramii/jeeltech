'use client';
import React, { useState } from 'react';
import { PaperPlaneRight, Microphone, Plus } from '@phosphor-icons/react';

/**
 * AIChatInput component - Input field for AI chat with different layouts
 * @param {Object} props - Component props
 * @param {string} props.variant - 'A' for vertical layout, 'B' for horizontal layout
 * @param {function} props.onSend - Function to call when send button is clicked
 * @param {function} props.onMic - Function to call when mic button is clicked
 * @param {function} props.onAdd - Function to call when add button is clicked
 */
export default function AIChatInput({
  variant = 'A',
  onSend,
  onMic,
  onAdd
}) {
  const [inputValue, setInputValue] = useState('');

  // Handle the submission of the chat message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSend) onSend(inputValue);
  };

  const handleSendClick = () => {
    if (onSend) onSend(inputValue);
  };

  // Render variant A (vertical layout with + button on right)
  if (variant === 'A') {
    return (
      <form onSubmit={handleSubmit} className="box-border flex flex-col p-4 gap-6 w-full  bg-white border border-[#CECECE] rounded-xl">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="إرسال في أي شئ"
          className="text-sm font-normal text-[#222222] font-['Noto_Kufi_Arabic'] bg-transparent border-none outline-none placeholder:text-[#6C6C6C] text-right"
        />
        <div className="flex flex-row justify-between items-center w-full gap-6">
          {/* Add Button */}
          <button
            type="button"
            onClick={onAdd}
            className="flex justify-center items-center p-3 w-12 h-12 bg-white border border-[#CECECE] rounded-full"
          >
            <Plus size={24} color="#222222" weight="regular" />
          </button>
          <div className="flex flex-row items-center gap-2">
            {/* Green Send Button */}
            <button
              type="submit"
              onClick={handleSendClick}
              className="flex justify-center items-center p-3 w-12 h-12 bg-[#01DD86] rounded-full"
            >
              <PaperPlaneRight size={24} color="#FFFFFF" weight="fill" />
            </button>
            {/* Microphone Button */}
            <button
              type="button"
              onClick={onMic}
              className="flex justify-center items-center p-3 w-12 h-12 bg-white border border-[#CECECE] rounded-full"
            >
              <Microphone size={24} color="#222222" weight="regular" />
            </button>
          </div>
        </div>
      </form>
    );
  }

  // Render variant B (horizontal layout)
  return (
    <form onSubmit={handleSubmit} className="box-border flex items-center justify-between w-full max-w-[872px] h-16 bg-white border border-[#CECECE] rounded-xl px-4">
      {/* Text on the right side */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="إرسال في أي شئ"
        className="flex-1 font-['Noto_Kufi_Arabic'] text-sm text-[#222222] bg-transparent border-none outline-none placeholder:text-[#6C6C6C] text-right mr-4"
      />
      {/* Controls on left side */}
      <div className="flex flex-row items-center gap-2">
        {/* Green Send Button */}
        <button
          onClick={onSend}
          className="flex justify-center items-center p-3 w-12 h-12 bg-[#01DD86] rounded-full"
        >
          <PaperPlaneRight size={24} color="#FFFFFF" weight="fill" />
        </button>
        {/* Microphone Button */}
        <button
          onClick={onMic}
          className="flex justify-center items-center p-3 w-12 h-12 bg-white border border-[#CECECE] rounded-full"
        >
          <Microphone size={24} color="#222222" weight="regular" />
        </button>
      </div>
    </form>
  );
}