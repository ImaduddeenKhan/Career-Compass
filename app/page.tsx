import CareerBanner from "@/components/CareerBanner";
import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CareerBanner/>
      <Landing />
      <Footer />
    </div>
  );
}
