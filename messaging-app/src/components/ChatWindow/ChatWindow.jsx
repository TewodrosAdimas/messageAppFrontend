// src/components/ChatWindow/ChatWindow.jsx
import React, { useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ selectedChatInfo, messages, isLoading, onSendMessage, currentUserId }) => {
  const messagesEndRef = useRef(null); // Ref to scroll to bottom

  // Scroll to bottom whenever messages change or a new chat is selected
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedChatInfo]); // Dependency includes selectedChatInfo to scroll when chat switches


  // --- Render Logic ---

  if (isLoading) {
    return (
        <div className="flex-grow flex flex-col items-center justify-center bg-white h-full">
            <p className="text-gray-500">Loading messages...</p>
            {/* Add a spinner component here later */}
        </div>
    );
  }

  if (!selectedChatInfo) {
    return (
        <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 h-full">
            <p className="text-gray-500 text-center px-4">
                Select a chat from the sidebar to start messaging.
            </p>
        </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col bg-white h-full overflow-hidden">
      {/* Chat Header */}
      <ChatHeader participant={selectedChatInfo} />

      {/* Message List */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50 space-y-1"> {/* Message area */}
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isSentByCurrentUser={message.senderId === currentUserId}
          />
        ))}
        {/* Empty div at the end to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;