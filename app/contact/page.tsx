export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/*Heading*/}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Let's connect! Whether you have a job opportunity, project, or just
            want to say hello, feel free to get in touch.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/*Left Side*/}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900">Get In Touch</h2>
            <p className="mt-4 text-slate-600 leading-7">
              I'm always open to discussing frontend development opportunities,
              freelance projects, or simply connecting with fellow developers.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">prashantsumit3@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <p className="text-slate-600">870 0252 496</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Location</h3>
                <p className="text-slate-600">
                  Greater Noida West, Uttar Pradesh, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">GitHub</h3>
                <a
                  href="https://github.com/SumitVIP25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline"
                >
                  github.com/SumitVIP25
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sumit-prashant-1ab200295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:underline"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/*Right Side*/}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Send a Message
            </h2>
            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                ></label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
