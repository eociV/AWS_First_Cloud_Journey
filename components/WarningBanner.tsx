
import React from 'react';
import { AlertCircle, AlertTriangle } from 'lucide-react';

const WarningBanner: React.FC = () => {
  return (
    <div className="mb-8 overflow-hidden rounded shadow-sm">
      <div className="bg-[#e57373] text-white px-4 py-2 flex items-center gap-2 font-medium">
        <AlertCircle size={18} />
        Warning
      </div>
      <div className="bg-[#ffebee] border-l-4 border-[#e57373] px-4 py-4 text-gray-700 flex items-start gap-3">
        <AlertTriangle size={20} className="text-[#fbc02d] flex-shrink-0 mt-0.5" />
        <p className="text-sm">
          <span className="font-bold">Note:</span> The information below is for reference purposes only. Please <span className="font-bold">do not copy verbatim</span> for your report, including this warning.
        </p>
      </div>
    </div>
  );
};

export default WarningBanner;
