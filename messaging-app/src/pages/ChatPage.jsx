// src/pages/ChatPage.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';

// --- Mock Data (Replace with API calls later) ---
const MOCK_CHATS = [
  { id: 'chat1', name: 'Emma Johnson', lastMessage: 'Sure, that sounds good!', timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), avatarColor: 'bg-pink-200 text-pink-800' },
  { id: 'chat2', name: 'Liam Smith', lastMessage: 'Thank you!', timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), avatarColor: 'bg-purple-200 text-purple-800' },
  { id: 'chat3', name: 'Olivia Brown', lastMessage: 'Are you free today?', timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), avatarColor: 'bg-indigo-200 text-indigo-800' },
  { id: 'chat4', name: 'Mason Williams', lastMessage: 'I\'ll call you later', timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(), avatarColor: 'bg-green-200 text-green-800' },
  { id: 'chat5', name: 'Sophia Miller', lastMessage: 'Yes, I will do that', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), avatarColor: 'bg-yellow-200 text-yellow-800' },
  { id: 'chat6', name: 'James Anderson', lastMessage: 'Hello!', timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), avatarColor: 'bg-red-200 text-red-800' },
  { id: 'chat7', name: 'Lucas Carlson', lastMessage: 'Great to hear!', timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), avatarColor: 'bg-blue-200 text-blue-800' }, // Added Lucas for consistency
];

const MOCK_MESSAGES = {
  chat1: [
    { id: 'm1-1', text: 'Hey Emma!', senderId: 'currentUser', timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString() },
    { id: 'm1-2', text: 'Hi! What\'s up?', senderId: 'chat1', timestamp: new Date(Date.now() - 9 * 60 * 1000).toISOString() },
    { id: 'm1-3', text: 'Want to grab coffee later?', senderId: 'currentUser', timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString() },
    { id: 'm1-4', text: 'Sure, that sounds good!', senderId: 'chat1', timestamp: MOCK_CHATS.find(c=>c.id==='chat1').timestamp }, // Match last message time
  ],
  chat2: [
    { id: 'm2-1', text: 'Did you get the file I sent?', senderId: 'chat2', timestamp: new Date(Date.now() - 35 * 60 * 1000).toISOString() },
    { id: 'm2-2', text: 'Yes, got it.', senderId: 'currentUser', timestamp: new Date(Date.now() - 32 * 60 * 1000).toISOString() },
    { id: 'm2-3', text: 'Thank you!', senderId: 'chat2', timestamp: MOCK_CHATS.find(c=>c.id==='chat2').timestamp },
  ],
   chat7: [ // Added messages for Lucas Carlson
    { id: 'm7-1', text: 'Hello! How are you?', senderId: 'chat7', timestamp: new Date(Date.now() - 6 * 60 * 1000).toISOString() },
    { id: 'm7-2', text: 'Hi! I\'m fine, thanks. How about you?', senderId: 'currentUser', timestamp: new Date(Date.now() - 5.5 * 60 * 1000).toISOString() },
    { id: 'm7-3', text: 'I\'m doing well, working on the project.', senderId: 'chat7', timestamp: new Date(Date.now() - 5.2 * 60 * 1000).toISOString() },
    { id: 'm7-4', text: 'Great to hear! Let me know if you need any help.', senderId: 'currentUser', timestamp: MOCK_CHATS.find(c=>c.id==='chat7').timestamp },
  ],
  // Add more messages for other chats as needed...
  chat3: [],
  chat4: [],
  chat5: [],
  chat6: [],
};

// Assume the logged-in user's ID
const CURRENT_USER_ID = 'currentUser';

function ChatPage() {
  const [chats, setChats] = useState(MOCK_CHATS);
  const [selectedChatId, setSelectedChatId] = useState(MOCK_CHATS[0]?.id || null); // Select first chat initially
  const [currentMessages, setCurrentMessages] = useState([]);
  const [selectedChatInfo, setSelectedChatInfo] = useState(null);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);

  // Effect to load messages when selectedChatId changes
  useEffect(() => {
    if (!selectedChatId) {
      setCurrentMessages([]);
      setSelectedChatInfo(null);
      return;
    }

    setIsLoadingMessages(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      const chatInfo = chats.find(c => c.id === selectedChatId);
      const messages = MOCK_MESSAGES[selectedChatId] || [];
      setSelectedChatInfo(chatInfo);
      setCurrentMessages(messages);
      setIsLoadingMessages(false);
    }, 300); // Simulate 300ms loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount or ID change

  }, [selectedChatId, chats]); // Re-run when selection or chat list changes

  // Handler to select a chat
  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  // Handler to send a message (Optimistic Update)
  const handleSendMessage = (messageText) => {
    if (!selectedChatId) return;

    const newMessage = {
      id: `msg-${Date.now()}`, // Temporary unique ID
      text: messageText,
      senderId: CURRENT_USER_ID,
      timestamp: new Date().toISOString(),
    };

    // 1. Optimistically update the UI
    setCurrentMessages(prevMessages => [...prevMessages, newMessage]);

    // 2. Update the last message in the sidebar (optional but good UX)
    setChats(prevChats =>
        prevChats.map(chat =>
            chat.id === selectedChatId
                ? { ...chat, lastMessage: messageText, timestamp: newMessage.timestamp }
                : chat
        ).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) // Keep sorted by time
    );


    // 3. TODO: Send the message to the backend API
    console.log(`Sending message to chat ${selectedChatId}:`, newMessage);
    // In a real app:
    // sendMessageApi(selectedChatId, messageText)
    //   .then(savedMessage => { /* Maybe update message ID from server */ })
    //   .catch(error => { /* Handle error, maybe revert optimistic update */ });
  };

  return (
    // Use flexbox to create the two-column layout, fixed height
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={handleSelectChat}
      />
      <ChatWindow
        key={selectedChatId} // Add key to potentially reset ChatWindow state on chat change
        selectedChatInfo={selectedChatInfo}
        messages={currentMessages}
        isLoading={isLoadingMessages}
        onSendMessage={handleSendMessage}
        currentUserId={CURRENT_USER_ID}
      />
    </div>
  );
}

export default ChatPage;