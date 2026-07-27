export default function Project() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Some of the projects I've built during my frontend development
            journey.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            SeriesHub – Series Discovery Web Application
          </h2>
          <p className="mt-2 text-sky-500 font-medium">
            Next.js, React.js, JavaScript, Tailwind CSS, TVMaze API, Git,
            GitHub, Vercel.
          </p>
          <p className="mt-6 text-slate-600 leading-8">
            A responsive movie discovery application that allows users to
            browse, search, and explore movie details using an external movie
            API. Integrated the TVMaze API to search and display TV series with
            details such as ratings, genres, language, status, and images.
            Implemented dynamic routing to create detailed series pages with
            summaries, cast, episodes, and season information. Developed search
            functionality with real-time API integration to display relevant TV
            series based on user queries. Designed a responsive and
            mobile-friendly user interface using Next.js and Tailwind CSS,
            ensuring seamless navigation and optimized performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/SumitVIP25?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition"
              aria-label="GitHub"
            >
              Github
            </a>

            <a
              href="https://series-hub-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-500 text-sky-500 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
              aria-label="Live Demo"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900">HRMS Dashboard</h2>
          <p className="mt-2 text-sky-500 font-medium">
            React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, React Router,
            Git, GitHub.
          </p>
          <p className="mt-6 text-slate-600 leading-8">
            Developed a responsive HRMS dashboard for employee management and
            attendance tracking, utilizing LocalStorage for persistent
            client-side data storage. Built reusable React components, ensuring
            data consistency by syncing component state with browser storage.
            Implemented search, filtering, and responsive layouts to handle
            real-time data processing on the client side.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/SumitVIP25?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition"
              aria-label="GitHub"
            >
              Github
            </a>

            <a
              href="https://sumitvip25.github.io/hrms-dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-500 text-sky-500 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
              aria-label="Live Demo"
            >
              Live Demo
            </a>

            <div className="mt-4 text-sm text-slate-600">
              <p>
                <strong>Email: </strong>admin@hrms.com
              </p>
              <p>
                <strong>Password: </strong>admin123
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            DevFolio Website - My Personal Portfolio
          </h2>
          <p className="mt-2 text-sky-500 font-medium">
            Next.js, React.js, Tailwind CSS, Git, GitHub, Vercel.
          </p>
          <p className="mt-6 text-slate-600 leading-8">
            Designed and developed a modern, responsive portfolio website using
            Next.js and Tailwind CSS. Built SEO-friendly pages with optimized
            metadata to improve search engine visibility. Showcased technical
            skills, projects, education, certifications, and professional
            experience through a clean, user-focused interface. Optimized
            performance, accessibility, and responsiveness to deliver a seamless
            experience across desktop, tablet, and mobile devices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/SumitVIP25?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition"
              aria-label="GitHub"
            >
              Github
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-sky-500 text-sky-500 px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition"
              aria-label="Live Demo"
            >
              Live Demo
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-20 mb-8">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Book Store</h3>
            <p className="mt-2 text-slate-600">
              A responsive one-page bookstore website built using HTML and CSS.
            </p>
            <p className="mt-4 text-sm text-sky-500 font-medium">
              HTML • CSS • Grid • Media Queries
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Trip Together</h3>
            <p className="mt-2 text-slate-600">
              A one-page travel website with interactive features and responsive
              design.
            </p>
            <p className="mt-4 text-sm text-sky-500 font-medium">
              HTML • CSS • JavaScript • Grid • Forms • DOM
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">IT Website</h3>
            <p className="mt-2 text-slate-600">
              Converted a Figma design into a responsive IT company website.
            </p>
            <p className="mt-4 text-sm text-sky-500 font-medium">
              HTML • CSS • CSS Grid • jQuery • Media Queries
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Shopping Card UI</h3>
            <p className="mt-2 text-slate-600">
              Responsive shopping cart interface developed using modern CSS
              techniques.
            </p>
            <p className="mt-4 text-sm text-sky-500 font-medium">
              HTML • CSS • CSS Variables • Grid • Media Queries
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Figma Primal Training</h3>
            <p className="mt-2 text-slate-600">
              Responsive UI created from a Figma design using SCSS and
              Bootstrap.
            </p>
            <p className="mt-4 text-sm text-sky-500 font-medium">
              HTML • SCSS • Bootstrap • Flexbox • Media Queries
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
