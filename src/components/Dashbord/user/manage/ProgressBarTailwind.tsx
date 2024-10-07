// ProgressBarTailwind.tsx
import React from 'react';

interface ProgressBarProps {
  name: string;
  percentage: number;
}

const ProgressBarTailwind: React.FC<ProgressBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-3">
      <div className="mb-1 font-bold">{name}</div>
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className={`h-full pl-5 text-sm ${percentage > 50 ? 'bg-green-500' : 'bg-red-500'} rounded-full`}
          style={{ width: `${percentage}%`, transition: 'width 0.3s ease' }}
        >
          <span className="text-white font-bold text-right pr-2">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarTailwind;
