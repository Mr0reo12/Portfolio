// components/LoadingSpinner.tsx
import React from 'react';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full border-b-2 border-white w-10 h-10"></div>
    </div>
  );
};

export default LoadingSpinner