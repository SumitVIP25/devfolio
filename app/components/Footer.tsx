export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold">
              <span className="text-white">Dev</span>
              <span className="text-sky-400">Folio</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto md:mx-0 text-slate-300 leading-8">
              Frontend Developer passionate about building modern, responsive,
              and user-friendly web applications using React.js, Next.js,
              JavaScript, and Tailwind CSS.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold">Connect</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>
                <a
                  href="mailto:prashantsumit3@gmail.com"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SumitVIP25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sumit-prashant-1ab200295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-sky-400 transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
          © 2026 Sumit Prashant. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
