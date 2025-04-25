// src/components/UI/Avatar.jsx
import React from 'react';

// Basic color generation for demo purposes
const generateBgColor = (name) => {
  const colors = [
    'bg-pink-200 text-pink-800', 'bg-purple-200 text-purple-800',
    'bg-indigo-200 text-indigo-800', 'bg-green-200 text-green-800',
    'bg-yellow-200 text-yellow-800', 'bg-red-200 text-red-800',
    'bg-blue-200 text-blue-800', 'bg-teal-200 text-teal-800'
  ];
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

// Get initials from name
const getInitials = (name) => {
  if (!name) return '?';
  const words = name.split(' ');
  if (words.length > 1) {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }
  return name[0].toUpperCase();
};

const Avatar = ({ name, size = 'md' }) => {
  const initials = getInitials(name);
  const bgColorClass = generateBgColor(name || 'Default'); // Ensure name is passed

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm', // Default size
    lg: 'w-12 h-12 text-base',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full font-semibold ${bgColorClass} ${sizeClasses[size]} flex-shrink-0`}
    >
      {initials}
    </div>
  );
};

export default Avatar;