import SideNav from '@/ui/admin/sidenav';
import Header from '@/ui/admin/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:gap-0 gap-3 px-2 py-3">
      <div className="w-full md:h-full flex-none md:w-64 pr-5 h-fit ">
        <SideNav />
      </div>
      <div className="h-full md:overflow-y-auto md:w-5/6">
        <main className=" md:h-full w-full flex flex-col items-center gap-4 h-fit">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
