import ChatItem from './ChatItem';

const dummyChats = [
  { id: 1, name: 'Emma Johnson', message: 'Sure, that sounds good!', time: '10:40' },
  { id: 2, name: 'Liam Smith', message: 'Thank you!', time: '09:25' },
];

export default function Sidebar() {
  return (
    <div className="w-72 border-r bg-white p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      {dummyChats.map(chat => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
