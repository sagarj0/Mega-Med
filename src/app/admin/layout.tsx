import SideNav from '@/ui/admin/sidenav';
import Header from '@/ui/admin/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:flex-row items-stretch md:overflow-hidden  gap-3 px-2 py-3">
      <div className="w-full md:h-full flex-none md:w-64 h-fit ">
        <SideNav />
      </div>
      <div className="h-[96vh] md:w-5/6">
        <main className="w-full h-full flex flex-col items-center gap-4 ">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
