import SideNav from '@/ui/admin/sidenav';
import Header from '@/ui/admin/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden px-2 py-3">
      <div className="w-full h-full flex-none md:w-64 pr-5">
        <SideNav />
      </div>
      <div className="h-full md:overflow-y-auto md:w-5/6">
        <main className=" h-full w-full flex flex-col items-center gap-4">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
