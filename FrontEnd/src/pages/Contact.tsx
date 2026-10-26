import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General enquiry");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [topicError, setTopicError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setTopicError("");
    setMessageError("");
    setSubmitted(false);

    let valid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!topic) {
      setTopicError("Please select a topic");
      valid = false;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      valid = false;
    }

    if (!valid) return;

    const subject = `AutoUniversal enquiry: ${topic}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

    window.location.href = `mailto:info@autouniversal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#111214] text-white">
      <Navbar />

      <main className="mt-15">
        <section className="mx-auto max-w-[1500px] px-5 pt-12 sm:px-10 sm:pt-16">
          <div className="relative flex min-h-[350px] flex-col justify-center overflow-hidden border border-white/[0.08] bg-[#0d1420] px-7 py-16 sm:min-h-[420px] sm:px-14 lg:px-20">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2000&q=90"
              alt="Automotive workshop"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#111214] via-[#111214]/80 to-transparent" />

            <div className="relative max-w-2xl">
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-blue-400">
                AUTOUNIVERSAL / GET IN TOUCH
              </p>

              <h1 className="text-4xl font-medium uppercase leading-[1.08] tracking-tight sm:text-6xl">
                LET'S TALK
                <br />
                <span className="text-[#6595ff]">CARS.</span>
              </h1>

              <p className="mt-6 max-w-lg text-xs leading-6 text-gray-300 sm:text-sm">
                Questions about buying a car, renting a vehicle, or finding the
                right spare part? Our team is here to help.
              </p>

              <a
                href="#contact-form"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#3968d9] px-5 py-3 text-[11px] transition hover:bg-[#4b7cff]"
              >
                Send us a message <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1500px] px-5 py-12 sm:px-10 sm:py-16">
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:info@autouniversal.com"
              className="bg-[#15171c] p-6 transition hover:bg-[#1a1d24]"
            >
              <Mail size={20} className="text-blue-400" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Email us
              </p>
              <p className="mt-2 break-words text-sm">
                info@autouniversal.com
              </p>
              <ArrowUpRight size={14} className="mt-4 text-gray-500" />
            </a>

            <div className="bg-[#15171c] p-6">
              <Phone size={20} className="text-blue-400" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Call us
              </p>
              <p className="mt-2 text-sm">Contact our team</p>
              <p className="mt-2 text-[10px] text-gray-500">
                Add your business phone number
              </p>
            </div>

            <div className="bg-[#15171c] p-6">
              <MapPin size={20} className="text-blue-400" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Visit us
              </p>
              <p className="mt-2 text-sm">AutoUniversal</p>
              <p className="mt-2 text-[10px] text-gray-500">
                Add your showroom address
              </p>
            </div>

            <div className="bg-[#15171c] p-6">
              <Clock size={20} className="text-blue-400" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Business hours
              </p>
              <p className="mt-2 text-sm">Monday – Saturday</p>
              <p className="mt-2 text-[10px] text-gray-500">
                Add your opening hours
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact-form"
          className="mx-auto grid max-w-[1500px] gap-10 px-5 pb-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-32"
        >
          <div className="pt-2">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
              We'd love to hear from you
            </p>

            <h2 className="text-3xl font-medium uppercase leading-tight sm:text-5xl">
              HOW CAN WE
              <br />
              HELP YOU?
            </h2>

            <p className="mt-5 max-w-md text-xs leading-6 text-gray-400 sm:text-sm">
              Send us your question and include any useful details, such as a
              vehicle model, rental dates, or spare part number. We'll get back
              to you as soon as we can.
            </p>

            <div className="mt-8 border-l border-blue-500/60 pl-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                For direct enquiries
              </p>

              <a
                href="mailto:info@autouniversal.com"
                className="mt-2 inline-flex items-center gap-2 text-sm transition hover:text-blue-300"
              >
                info@autouniversal.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="border border-white/[0.08] bg-[#15171c] p-5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-[10px] uppercase tracking-wider text-gray-400">
                Full name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                    setSubmitted(false);
                  }}
                  placeholder="Your name"
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-4 py-3 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
                {nameError && (
                  <p className="mt-2 text-xs normal-case tracking-normal text-red-400">
                    {nameError}
                  </p>
                )}
              </label>

              <label className="text-[10px] uppercase tracking-wider text-gray-400">
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                    setSubmitted(false);
                  }}
                  placeholder="you@example.com"
                  className="mt-2 block w-full border border-white/10 bg-[#101114] px-4 py-3 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
                {emailError && (
                  <p className="mt-2 text-xs normal-case tracking-normal text-red-400">
                    {emailError}
                  </p>
                )}
              </label>
            </div>

            <label className="mt-5 block text-[10px] uppercase tracking-wider text-gray-400">
              What is your enquiry about?
              <select
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                  setTopicError("");
                  setSubmitted(false);
                }}
                className="mt-2 block w-full border border-white/10 bg-[#101114] px-4 py-3 text-xs text-gray-300 outline-none focus:border-blue-500"
              >
                <option value="General enquiry">General enquiry</option>
                <option value="Car purchase">Car purchase</option>
                <option value="Car rental">Car rental</option>
                <option value="Spare parts">Spare parts</option>
                <option value="After-sales support">After-sales support</option>
              </select>
              {topicError && (
                <p className="mt-2 text-xs normal-case tracking-normal text-red-400">
                  {topicError}
                </p>
              )}
            </label>

            <label className="mt-5 block text-[10px] uppercase tracking-wider text-gray-400">
              Message
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setMessageError("");
                  setSubmitted(false);
                }}
                rows={6}
                placeholder="Tell us how we can help..."
                className="mt-2 block w-full resize-y border border-white/10 bg-[#101114] px-4 py-3 text-xs leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
              />
              {messageError && (
                <p className="mt-2 text-xs normal-case tracking-normal text-red-400">
                  {messageError}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#3968d9] px-6 py-4 text-[11px] transition hover:bg-[#4b7cff] sm:w-auto"
            >
              {submitted ? "Open email app again" : "Send enquiry"}
              <Send size={14} />
            </button>

            <p className="mt-4 text-[10px] leading-5 text-gray-500">
              Submitting opens your default email app with your message
              prepared. It does not send the email automatically.
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
