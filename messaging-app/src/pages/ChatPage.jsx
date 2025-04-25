import Sidebar from '../components/Sidebar/Sidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import MessageInput from '../components/MessageInput/MessageInput';

export default function ChatPage() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <ChatWindow />
        <MessageInput />
      </div>
    </div>
  );
}
