import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('codelecturehub_token'));

  // Listen to localStorage changes (e.g., login/logout in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('codelecturehub_token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Optional: If login/logout occurs in same tab, you can also poll or use a custom event
  useEffect(() => {
    const checkToken = setInterval(() => {
      const currentToken = localStorage.getItem('codelecturehub_token');
      if (currentToken !== token) {
        setToken(currentToken);
      }
    }, 500); // check every 500ms

    return () => clearInterval(checkToken);
  }, [token]);

  const menuItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Lecture', icon: '📖', path: '/lecture' },
    { name: 'Notes', icon: '📝', path: '/notes' },
    { name: 'Editor', icon: '💻', path: '/editor' },
    { name: 'SplitView', icon: '📚', path: '/splitview' },
    { name: 'CLH', icon: '🚀', path: '/clh' },
  ];

  return (
    <div className={`h-screen bg-gray-800 text-white p-4 transition-all duration-300 ${collapsed ? 'w-16' : 'w-[11%]'}`}>
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
            {token ? (
              <Link to={item.path} className="flex items-center p-2 hover:bg-gray-700 rounded transition">
                <span className="text-lg mr-3">{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ) : (
              <div className="flex items-center p-2 bg-gray-700 rounded opacity-50 cursor-not-allowed">
                <span className="text-lg mr-3">{item.icon}</span>
                {!collapsed && <span>{item.name}</span>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
