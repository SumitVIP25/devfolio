import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center text-center md:text-left py-12">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/*Left Side*/}
          <div>
            <p className="text-sky-400 text-lg font-medium mb-3 ">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
              Sumit Prashant
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
              A Frontend Developer
            </h2>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-slate-500 leading-8">
              I build modern, responsive, and user-friendly web applications
              using React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="w-full sm:w-auto mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="/resume/Sumit_Prashant_FrontendDeveloper_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition"
              >
                View Resume
              </a>

              <Link
                href="/projects"
                className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-10 flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/SumitVIP25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-sky-500 transition text-3xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sumit-prashant-1ab200295/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-sky-500 transition text-3xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:prashantsumit3@gmail.com"
                className="text-slate-700 hover:text-sky-500 transition text-3xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/*Right Side*/}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl">
              <Image
                src="/professional-image.png"
                alt="Sumit Prashant"
                width={384}
                height={384}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
