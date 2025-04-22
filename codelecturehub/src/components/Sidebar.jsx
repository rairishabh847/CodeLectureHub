// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Lecture', icon: '📖', path: '/lecture' },
    { name: 'Notes', icon: '📝', path: '/notes' },
    { name: 'Editor', icon: ' 💻', path: '/editor' },
    // { name: 'YT', icon: '👤', path: '/yt' },
    { name: 'SplitView', icon: '📚', path: '/splitview' },
    {name: 'CLH', icon:'🚀',path:'/clh'},
    {name: 'About', icon:'❓',path:'/about'}
  ];

  return (
    <div className={`h-screen bg-gray-800 text-white p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-[10%]'}`}>      
      <div className="flex justify-end mb-2">
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="text-white bg-gray-700 rounded cursor-pointer"
        >
          {collapsed ? '➡️' : '⬅️'}
        </button>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="flex items-center p-2 hover:bg-gray-700">
              <span className="text-lg mr-3">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
