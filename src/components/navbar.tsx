import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 lg:px-24 xl:px-52">
      {/* <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-12 lg:px-24 xl:px-52 bg-white/80 backdrop-blur-md shadow-sm"> */}
      <div className="font-poppins flex space-x-4 items-center">
        <Image src="/assets/mono.svg" alt="mono logo" width={37} height={31} />
      </div>
      <ul className="flex gap-6 md:gap-6 font-light text-kreafi-2 text-sm md:text-base">
        <li>
          <Link href="#hero" className="hover:text-kreafi-1 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-kreafi-1 transition-colors">
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:text-kreafi-1 transition-colors"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
