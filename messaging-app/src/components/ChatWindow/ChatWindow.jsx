import Message from './Message';

const dummyMessages = [
  { id: 1, sender: 'me', text: 'Hi! How are you?' },
  { id: 2, sender: 'them', text: "I'm good, thanks!" },
];

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {dummyMessages.map(msg => (
        <Message key={msg.id} msg={msg} />
      ))}
    </div>
  );
}
