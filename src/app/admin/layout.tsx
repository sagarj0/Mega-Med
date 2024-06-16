import SideNav from '@/ui/admin/sidenav';
import Header from '@/ui/admin/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-3  py-3 pl-1 md:flex-row">
      <div className="h-fit w-full  md:h-[96vh] md:w-64 ">
        <SideNav />
      </div>
      <div className="md:h-[96vh] md:w-5/6">
        <main className="flex h-full w-full flex-col items-center gap-4 px-2 md:overflow-y-scroll ">
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
}
