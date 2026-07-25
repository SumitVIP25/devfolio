import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-700 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6  ">
        <Link href="/" className="text-2xl font-bold text-blue-400 px-3">
          DevFolio
        </Link>

        <div className="flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
