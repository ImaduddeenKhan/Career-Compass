"use client";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="border-b fixed top-0 w-full z-50 bg-background">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/career-logo.png?height=40&width=40"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <Link href="/" className="text-2xl font-bold text-primary">Career Guidance</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          {/* Hide on Mobile (Show only on md and larger screens) */}
          {session && (
            <div className="hidden md:flex items-center gap-4">
              <span>Welcome, {session.user?.name}</span>
              <LogoutButton />
            </div>
          )}

          {/* Always Visible */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
