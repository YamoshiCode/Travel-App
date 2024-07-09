import { Linefont } from "next/font/google";
import Link from "next/link";
import Image from 'next/image'
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className = "py-5 px-6 z-30 justify-around  relative flex items-center "> 
        <Link href={"/"} className="justify-start">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="Picture of the author"/>
        </Link>
        <ul className="flex gap-12  ">
          {NAV_LINKS.map((link)=>(
            <Link className =" hover:font-bold text-slate-500"href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className ="pt-1 hidden lg:block">
         <Button title ="Login" iconcond = {true} color = "bg-black"/>
        </div>
      
    </div>
  );
}
 
export default Navbar;