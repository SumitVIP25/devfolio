import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900">
          About Me
        </h2>

        <p className="mt-3 text-lg text-slate-500 text-center">
          Get to know me better
        </p>
      </div>

      <div className="mt-14 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-slate-900">
          Frontend Developer
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          I'm Sumit Prashant, a Frontend Developer with a strong foundation in
          React.js, Next.js, JavaScript, TypeScript, HTML, CSS, Bootstrap, and
          Tailwind CSS.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          After completing my MCA in 2025, I transitioned into software
          development, bringing over 11 years of professional experience in
          Technical Recruitment, MIS Reporting, and Business Operations. I enjoy
          creating responsive, accessible, and user-friendly web applications
          while continuously improving my frontend development skills.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Experience</h3>
          <p className="mt-3 text-slate-600">
            11+ Years Professional Experience
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Education</h3>
          <p className="mt-3 text-slate-600">MCA (2025)</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Location</h3>
          <p className="mt-3 text-slate-600">Greater Noida West</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-slate-900">Focus</h3>
          <p className="mt-3 text-slate-600">Frontend Development</p>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/resume/Sumit_Prashant_FrontendDeveloper_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition duration-300 text-center"
        >
          Download Resume
        </a>

        <Link
          href="/contact"
          className="border-2 border-sky-500 text-sky-500 px-6 py-3 rounded-lg font-medium hover:bg-sky-500 hover:text-white transition duration-300 text-center"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
