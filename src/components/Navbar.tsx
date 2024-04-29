import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center outline-1 outline-slate-300 outline shadow-lg rounded-md">
      <ul className="flex items-center gap-10">
        <li className="m-6 pl-6">
          <Image src="/icon.png" alt="Apa ini" width={64} height={64}></Image>
        </li>
        <li className="text-xl ">
          <Link href="">Home</Link>
        </li>
        <li className="text-xl">
          <Link href="/meals">Meals</Link>
        </li>
        <li className="text-xl">
          <Link href="/community">Community</Link>
        </li>
      </ul>
      <div></div>
      <ul>
        <li className="text-xl text-black mr-12">
          Created with <span className="text-red-500">Love</span>
        </li>
      </ul>
    </nav>
  );
}
