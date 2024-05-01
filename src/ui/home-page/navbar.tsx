import react from "react"
import Link from 'next/link';


interface NavLinkProps {
    href: string; 
    label: string;
  }

export default function Navbar(){
    return (
        <div className="bg-white-50/50 rounded-md p-4 flex items-center justify-between w-full">
          {/* Logo */}
          <div>
            <Link href="/">
              Next.js App {/* Removed the `<a>` tag here */}
            </Link>
          </div>
      
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/mentors" label="Mentors" />
            <NavLink href="/courses" label="Courses" />
          </div>
        </div>
      
    )}


    const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
        return (
          <Link href={href as string}>
            {label}
          </Link>
        );
      };
