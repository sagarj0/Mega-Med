import CardWrapper from '@/ui/admin/Cards';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/ui/skeleton.tsx/cardSkeleton';

export default function Page() {
  return (
    <div className="w-full">
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>
  );
}
