import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";
import Services from "@/components/Services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portofolio/>
    </>
  );
}
