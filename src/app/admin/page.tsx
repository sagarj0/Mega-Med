import CardWrapper from '@/ui/admin/Cards';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/ui/admin/skeleton';

export default function Page() {
  return (
    <div className="w-full">
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
      </Suspense>
    </div>
  );
}
