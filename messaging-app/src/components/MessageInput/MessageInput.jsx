import React, { useState, useRef } from 'react';

// Example Send Icon (React Component)
const SendIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

// Example Placeholder Icons
const EmojiIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
);

const AttachmentIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.122 2.122l7.81-7.81" />
    </svg>
);


const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageText = text.trim();
    if (messageText) {
      onSendMessage(messageText);
      setText('');
       // Optional: Keep focus on input after sending
      // inputRef.current?.focus();
    }
  };

  // Function to handle Enter key press for sending
  const handleKeyDown = (e) => {
    // Send on Enter press (but not Shift+Enter for new line)
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Prevent default Enter behavior (like adding a newline in some cases)
        handleSubmit(e);    // Trigger the same submit logic
    }
  }

  return (
    <div className="p-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
         {/* Placeholder buttons */}
        <button type="button" className="text-gray-500 hover:text-gray-700">
             <EmojiIcon className="w-6 h-6"/>
        </button>
         <button type="button" className="text-gray-500 hover:text-gray-700">
             <AttachmentIcon className="w-6 h-6"/>
        </button>

        {/* Use a textarea for multi-line potential, or input for single line */}
        <input
          ref={inputRef}
          type="text" // If you change to textarea, handleKeyDown might work differently or not be needed depending on desired behavior
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown} // <<<--- UNCOMMENT THIS LINE
          placeholder="Type a message..."
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
          rows={1} // For textarea: initial rows
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          disabled={!text.trim()}
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;