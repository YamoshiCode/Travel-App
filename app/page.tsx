import Image from "next/image";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Hero from "@/component/Hero";
import Camp from "@/component/Camp";
import Guide from "@/component/Guide";
import Features from "@/component/Features";
import GetApp from "@/component/GEtApp";
export default function Home() {
  return (
   <div>
   <Hero/>
   <Camp/>
   <Guide/>
   <Features/>
   <GetApp/>
   </div>

  );
}
