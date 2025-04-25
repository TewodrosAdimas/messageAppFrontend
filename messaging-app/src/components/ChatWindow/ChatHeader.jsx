// src/components/ChatWindow/ChatHeader.jsx
import React from 'react';
import Avatar from '../UI/Avatar';

const ChatHeader = ({ participant }) => {
  if (!participant) return null; // Don't render if no participant data

  return (
    <div className="p-3 border-b border-gray-200 flex items-center flex-shrink-0 bg-white">
      <Avatar name={participant.name} size="sm" />
      <span className="ml-3 font-semibold text-gray-800">{participant.name}</span>
      {/* Optional: Add status indicator or action buttons (call, info, etc.) */}
    </div>
  );
};

export default ChatHeader;