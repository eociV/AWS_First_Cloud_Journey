import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningBanner: React.FC = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 rounded-r-md shadow-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-amber-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-amber-800">Lưu ý</h3>
          <div className="mt-2 text-sm text-amber-700">
            <p>
              Đây là nội dung mẫu. Vui lòng cập nhật thông tin thực tế của bạn trong mã nguồn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;