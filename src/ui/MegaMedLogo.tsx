import React from 'react';
import Image from 'next/image';

export default function MegaMedLogo() {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src="/MegaMedLogo.png"
        alt="MegaMed Logo"
        width={120}
        height={120}
      />
    </div>
  );
}
