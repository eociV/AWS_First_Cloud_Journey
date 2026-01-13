
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Check, Facebook, Languages, RotateCcw, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>(['worklog']);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredItems = NAV_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="w-72 h-screen bg-[#232f3e] text-gray-300 flex flex-col flex-shrink-0 overflow-hidden">
      {/* AWS Logo */}
      <div className="p-6 cursor-pointer" onClick={() => navigate('/')}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
          alt="AWS" 
          className="h-10 invert brightness-0"
        />
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative group">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" />
          <input 
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1a202c] border border-[#4a5568] rounded py-1.5 pl-10 pr-8 text-sm focus:outline-none focus:border-[#ff9900] text-white"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar text-[14px]">
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <div 
                onClick={() => {
                  if (item.hasChildren) toggleExpand(item.id);
                  navigate(item.path);
                }}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                  isActive(item.path) ? 'bg-[#37475a] text-white' : 'hover:bg-[#37475a]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium">{item.number}.</span>
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {isActive(item.path) && <Check size={14} className="text-[#3b82f6]" />}
                  {item.hasChildren && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`} 
                    />
                  )}
                </div>
              </div>

              {/* Sub items */}
              {item.hasChildren && expandedItems.includes(item.id) && item.subItems && (
                <ul className="bg-[#1a202c]">
                  {item.subItems.map((sub, idx) => (
                    <li 
                      key={sub.id}
                      onClick={() => navigate(sub.path)}
                      className={`flex items-center justify-between pl-8 pr-4 py-2 cursor-pointer transition-colors text-xs ${
                        location.pathname === sub.path ? 'bg-[#37475a] text-white' : 'hover:bg-[#2d3748]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">{item.number}.{idx + 1}.</span>
                        <span>{sub.title}</span>
                      </div>
                      {location.pathname === sub.path && <Check size={12} className="text-[#3b82f6]" />}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* More Section */}
        <div className="mt-8 px-4">
          <h3 className="text-gray-500 text-[18px] uppercase font-light tracking-wider mb-4">More</h3>
          <div className="flex items-center gap-2 hover:text-white cursor-pointer px-1 py-1 transition-colors">
            <Facebook size={16} />
            <span>AWS Study Group</span>
          </div>
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 bg-[#1a202c] text-[12px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white">
            <Languages size={14} />
            <span>English</span>
            <ChevronDown size={12} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white">
            <RotateCcw size={14} />
            <span>Clear History</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="text-gray-500">Last Updated</div>
          <div className="text-[#ff9900] italic font-medium">13/01/2026</div>
          <div className="mt-2 text-gray-500">Team</div>
          <div className="text-[#ff9900] italic font-medium underline">First Cloud Journey</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
