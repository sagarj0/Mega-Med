import react from "react"
// import Link from 'next/link';
import { Button, Link } from '@nextui-org/react';
import MegaMedLogo from "../MegaMedLogo";


interface NavLinkProps {
    href: string; 
    label: string;
  }

export default function Navbar(){
    return (
        <div className="bg-white-50/50 rounded-md p-4 flex items-center justify-between w-full">
          {/* Logo */}
          <div>
           <MegaMedLogo/>
          </div>

          
          <div className="flex space-x-4 ">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/mentors" label="Mentors" />
            <NavLink href="/courses" label="Courses" />
          </div>
          <div className="space-x-4  flex justify-end">
        <Link href="/auth/signup">
          <Button color="primary">Signup</Button>
        </Link>
        <Link href="/auth/login">
          <Button color="primary">Login</Button>
        </Link>
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
