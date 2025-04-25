import React from 'react';

export default function Message({ msg }) {
  const isMine = msg.sender === 'me';

  return (
    <div className={`flex mb-2 ${isMine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-[70%] text-sm ${
          isMine
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p>{msg.text}</p>
        {msg.time && (
          <span className="block text-xs text-right mt-1 opacity-60">
            {msg.time}
          </span>
        )}
      </div>
    </div>
  );
}
