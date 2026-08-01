import ContactForm from "../components/ContactForm";

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

                <a
                  href="mailto:prashantsumit3@gmail.com"
                  className="text-sky-500 hover:underline"
                >
                  prashantsumit3@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>

                <a
                  href="tel:+918700252496"
                  className="text-sky-500 hover:underline"
                >
                  +91 87002 52496
                </a>
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

            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
