
import React from 'react';
import WarningBanner from './WarningBanner';
import { Link } from 'react-router-dom';

const WorklogContent: React.FC = () => {
  const weeks = [
    { title: "Getting familiar with AWS and basic AWS services", path: "/worklog/week-1" },
    { title: "Doing task A...", path: "/worklog/week-2" },
    { title: "Doing task B...", path: "/worklog/week-3" },
    { title: "Doing task C...", path: "/worklog/week-4" },
    { title: "Doing task D...", path: "/worklog/week-5" },
    { title: "Doing task E...", path: "/worklog/week-6" },
    { title: "Doing task G...", path: "/worklog/week-7" },
    { title: "Doing task H...", path: "/worklog/week-8" },
    { title: "Doing task I...", path: "/worklog/week-9" },
    { title: "Doing task L...", path: "/worklog/week-10" },
    { title: "Doing task M...", path: "/worklog/week-11" },
    { title: "Doing task N...", path: "/worklog/week-12" },
  ];

  return (
    <div className="max-w-4xl animate-fadeIn">
      <h1 className="text-5xl font-light text-[#7e96b3] text-center mb-12 uppercase tracking-wide">Worklog</h1>
      
      <WarningBanner />

      <div className="text-[#37475a] space-y-6 leading-relaxed">
        <p>
          On this page, you will need to introduce your worklog. <span className="font-bold">How</span> did you complete it? How many weeks did you take to complete the program? <span className="font-bold">What</span> did you do in those weeks?
        </p>
        <p>
          Typically, and as a standard, a worklog is carried out over about 3 months (throughout the internship period) with weekly contents as follows:
        </p>

        <div className="space-y-4 pt-4">
          {weeks.map((week, idx) => (
            <div key={idx} className="flex gap-1">
              <span className="font-bold">Week {idx + 1}:</span>
              <Link 
                to={week.path} 
                className="text-[#3b82f6] hover:text-[#ff9900] hover:underline"
              >
                {week.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorklogContent;
