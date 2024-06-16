import React from 'react';
import { Spinner } from '@nextui-org/react';
const Loading: React.FC = () => {
  return (
    <div className="flex h-full w-full justify-center ">
      <Spinner size="lg" />;
    </div>
  );
};

export default Loading;
