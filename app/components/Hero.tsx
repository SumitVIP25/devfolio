import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center text-center md:text-left">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/*Left Side*/}
          <div>
            <p className="text-sky-400 text-lg font-medium mb-3">Hi, I'm</p>
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition">
                Download Resume
              </button>

              <button className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition duration-300">
                View Projects
              </button>
            </div>
          </div>

          {/*Right Side*/}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl">
              <Image
                src="/images/professional-image.png"
                alt="Sumit Prashant"
                width={384}
                height={384}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
