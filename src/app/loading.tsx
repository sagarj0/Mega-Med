import React from 'react';
import { Spinner } from '@nextui-org/react';
const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center ">
      <Spinner size="lg" />;
    </div>
  );
};

export default Loading;
