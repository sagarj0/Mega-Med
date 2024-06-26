import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

const BreadCrumb: React.FC<{ breadCrumbVal: string }> = ({ breadCrumbVal }) => {
  const breadCrumbItems = breadCrumbVal.split('/');

  return (
    <div className="flex w-full flex-row items-center gap-4 px-4 py-2">
      <h1 className="text-md">Questions adding to:</h1>
      <Breadcrumbs
        separator="/"
        itemClasses={{
          separator: 'px-2',
        }}
      >
        {breadCrumbItems.map((item, index) => {
          return <BreadcrumbItem key={index}>{item}</BreadcrumbItem>;
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
