import React from 'react';
import { Skeleton } from '@nextui-org/react';

export default function TableSkeleton() {
  return (
    <div className="space-y-0">
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-gray-800"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-white"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-gray-800"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-white"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-gray-800"></div>
      </Skeleton>
      <Skeleton className="w-full rounded-lg">
        <div className="h-14 w-full rounded-lg bg-white"></div>
      </Skeleton>
    </div>
  );
}
