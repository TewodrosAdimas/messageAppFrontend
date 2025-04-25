// src/components/Sidebar/ChatItem.jsx
import React from 'react';
import Avatar from '../UI/Avatar';

// Simple date formatter for demo
const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    // In a real app, use a library like date-fns or moment
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        // Today: return time HH:MM
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    } else if (diffDays === 1) {
        return 'yesterday';
    } else if (diffDays < 7) {
        // Within a week: return day name
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
        // Older: return date
        return date.toLocaleDateString('en-US');
    }
}


const ChatItem = ({ chat, isSelected, onClick }) => {
  const formattedTime = formatTimestamp(chat.timestamp);

  return (
    <div
      className={`flex items-center p-3 hover:bg-gray-100 cursor-pointer border-l-4 ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-transparent'
      }`}
      onClick={onClick}
    >
      <Avatar name={chat.name} />
      <div className="ml-3 flex-grow min-w-0"> {/* min-w-0 prevents text overflow issues */}
        <div className="flex justify-between items-center">
          <span className="font-semibold truncate text-sm text-gray-800">{chat.name}</span>
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{formattedTime}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;