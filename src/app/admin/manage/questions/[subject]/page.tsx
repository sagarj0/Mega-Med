import React from 'react';

export default function Page({ params }: { params: { subject: string } }) {
  return (
    <div>
      <h1>Questions for {params.subject} appear here</h1>
    </div>
  );
}
