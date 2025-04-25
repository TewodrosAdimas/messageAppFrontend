// src/components/ChatWindow/Message.jsx
import React from 'react';

const Message = ({ message, isSentByCurrentUser }) => {
  const alignment = isSentByCurrentUser ? 'justify-end' : 'justify-start';
  const bubbleStyles = isSentByCurrentUser
    ? 'bg-blue-500 text-white rounded-l-lg rounded-tr-lg'
    : 'bg-gray-200 text-gray-800 rounded-r-lg rounded-tl-lg';
  const messageContainerStyles = isSentByCurrentUser ? 'ml-auto' : 'mr-auto';

  return (
    <div className={`flex ${alignment} mb-2`}>
      <div className={`max-w-[70%] md:max-w-[60%] ${messageContainerStyles}`}>
        <div className={`px-4 py-2 ${bubbleStyles}`}>
          {message.text}
        </div>
        {/* Optional: Add timestamp below or on hover */}
        {/* <span className={`text-xs text-gray-400 mt-1 ${isSentByCurrentUser ? 'text-right' : 'text-left'} block`}>
           {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
         </span> */}
      </div>
    </div>
  );
};

export default Message;