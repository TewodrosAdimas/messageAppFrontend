// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import ChatItem from './ChatItem';

const Sidebar = ({ chats, selectedChatId, onSelectChat }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 bg-white flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        {/* Optional: Add search bar or new chat button here */}
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto flex-grow">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              isSelected={chat.id === selectedChatId}
              onClick={() => onSelectChat(chat.id)}
            />
          ))
        ) : (
          <p className="p-4 text-gray-500">No chats yet.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;