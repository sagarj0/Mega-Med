import SideNav from '@/ui/admin/sidenav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col py-4 md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 md:ml-2 px-3  md:px-2">
        <SideNav />
      </div>
      <div className="flex-grow h-full px-6 md:overflow-y-auto  md:px-6">
        {children}
      </div>
    </div>
  );
}
