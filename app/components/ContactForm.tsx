"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Thank you for your message! This contact form is currently under development. Please contact me via email or LinkedIn.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
          required
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
          required
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
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Message
        </label>

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
  );
}
