
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';
import HomeContent from './components/HomeContent';
import WorklogContent from './components/WorklogContent';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation buttons (next/prev)
  const currentPath = location.pathname;
  const flatPaths = ['/', ...NAV_ITEMS.map(i => i.path)];
  const currentIndex = flatPaths.indexOf(currentPath);
  
  const handleNext = () => {
    if (currentIndex < flatPaths.length - 1) {
      navigate(flatPaths[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(flatPaths[currentIndex - 1]);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-white">
        
        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className="fixed left-72 top-1/2 -translate-y-1/2 z-10 p-2 text-[#ff9900] hover:bg-gray-100 rounded-full transition-colors hidden lg:block"
            title="Previous Page"
          >
            <ChevronLeft size={48} strokeWidth={3} />
          </button>
        )}
        
        {currentIndex < flatPaths.length - 1 && (
          <button 
            onClick={handleNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-10 p-2 text-[#ff9900] hover:bg-gray-100 rounded-full transition-colors hidden lg:block"
            title="Next Page"
          >
            <ChevronRight size={48} strokeWidth={3} />
          </button>
        )}

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto pt-4 px-8 lg:px-24">
          <div className="max-w-6xl mx-auto py-8">
            <Breadcrumbs />
            
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/worklog" element={<WorklogContent />} />
              <Route path="/worklog/:weekId" element={
                <div className="max-w-4xl animate-fadeIn">
                   <h1 className="text-4xl font-light text-[#7e96b3] mb-8 uppercase">Week Worklog Detail</h1>
                   <div className="p-12 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400">
                      Content for this week would be rendered here...
                   </div>
                </div>
              } />
              <Route path="*" element={
                <div className="text-center py-20">
                  <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
                  <p className="text-gray-500 mt-4">This section is currently under construction.</p>
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
