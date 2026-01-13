
import React from 'react';
import { STUDENT_INFO, NAV_ITEMS } from '../constants';
import WarningBanner from './WarningBanner';

const HomeContent: React.FC = () => {
  return (
    <div className="max-w-4xl animate-fadeIn pb-20">
      <h1 className="text-6xl font-light text-[#7e96b3] text-center mb-16 uppercase tracking-wider">Internship Report</h1>
      
      <WarningBanner />

      <section className="mb-12">
        <h2 className="text-3xl font-medium text-[#7e96b3] mb-8">Student Information:</h2>
        <div className="space-y-4 text-lg">
          {Object.entries(STUDENT_INFO).map(([key, value]) => (
            <div key={key} className="grid grid-cols-1 md:grid-cols-[250px_1fr] items-start">
              <span className="font-bold text-[#37475a]">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              </span>
              <span className={key === 'email' ? 'text-blue-500 underline cursor-pointer' : 'text-gray-700'}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center mb-16">
         <div className="relative w-full max-w-lg aspect-[4/3] rounded shadow-lg overflow-hidden border border-gray-200 bg-white">
            <img 
              src="https://picsum.photos/seed/aws-intern/800/600" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-8 -translate-y-1/2 text-blue-600 font-medium text-xl bg-white/40 px-3 py-1 rounded backdrop-blur-sm">
              Ảnh avatar của bạn
            </div>
         </div>
         <div className="w-full h-1 bg-gray-200 mt-0.5 rounded-full max-w-lg"></div>
      </div>

      <section className="mb-12">
        <h2 className="text-4xl font-light text-[#7e96b3] mb-8">Report Content</h2>
        <ul className="space-y-3 pl-8 list-decimal text-lg font-medium text-[#3b82f6]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="hover:text-[#ff9900] cursor-pointer">
              <span className="hover:underline">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomeContent;
