export default function MessageInput() {
    return (
      <div className="border-t p-4 flex items-center bg-white">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 mr-2"
        />
        <button className="text-white bg-blue-500 px-4 py-2 rounded-full">Send</button>
      </div>
    );
  }
  