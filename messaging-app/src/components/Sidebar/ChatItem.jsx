import React from 'react';

export default function ChatItem({ chat, onSelect, isSelected }) {
  return (
    <div
      onClick={() => onSelect(chat)}
      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold mr-3">
        {/* Use avatar image if available, fallback to initials */}
        {chat.avatar ? (
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          chat.name.charAt(0).toUpperCase()
        )}
      </div>
      <div className="flex-1">
        <p className="font-medium text-sm">{chat.name}</p>
        <p className="text-xs text-gray-500 truncate">
          {chat.lastMessage || 'No messages yet'}
        </p>
      </div>
    </div>
  );
}
