import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <nav className="bg-slate-800 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">Dev</span>
          <span className="text-sky-400">Folio</span>
        </Link>

        <DesktopMenu />

        <MobileMenu />
      </div>
    </nav>
  );
}
