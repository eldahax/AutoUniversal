import { Link } from "react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password_regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPassError("");
    setTermsError("");

    let hasError = false;

    if (!firstName.trim()) {
      setFirstNameError("First name is required.");
      hasError = true;
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required.");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email address is required.");
      hasError = true;
    } else if (!email_regex.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (!password) {
      setPassError("Password is required.");
      hasError = true;
    } else if (!password_regex.test(password)) {
      setPassError(
        "Password must contain at least 8 characters, a letter, and a number."
      );
      hasError = true;
    }

    if (!acceptedTerms) {
      setTermsError("You must agree to the terms to continue.");
      hasError = true;
    }

    if (hasError) return;
  };

  return (
    <main className="min-h-screen bg-[#111214] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden h-screen overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=90"
            alt="Sports car"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/45 to-black/20" />

          <Link
            to="/"
            className="absolute left-10 top-10 z-10 text-sm font-semibold tracking-[0.25em]"
          >
            AUTO<span className="text-[#6595ff]">UNIVERSAL</span>
          </Link>

          <div className="absolute bottom-12 left-10 right-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8eafff]">
              Join AutoUniversal
            </p>

            <h1 className="max-w-xl text-5xl font-medium uppercase leading-tight">
              Find the drive that fits you.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-300">
              Create an account to make it easier to explore our vehicles and services.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-10 inline-block text-sm font-semibold tracking-[0.2em] lg:hidden"
            >
              AUTO<span className="text-[#6595ff]">UNIVERSAL</span>
            </Link>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8eafff]">
              Get started
            </p>

            <h2 className="mt-3 text-3xl font-medium uppercase sm:text-4xl">
              Create account
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              Fill in your details to get started.
            </p>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
              aria-live="polite"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs text-gray-300"
                  >
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onClick={() => setFirstNameError("")}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className={`mt-2 w-full border bg-[#17191e] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#6595ff] ${
                      firstNameError ? "border-red-500" : "border-white/10"
                    }`}
                  />

                  {firstNameError && (
                    <p className="mt-2 text-xs text-red-400">
                      {firstNameError}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs text-gray-300"
                  >
                    Last name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onClick={() => setLastNameError("")}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className={`mt-2 w-full border bg-[#17191e] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#6595ff] ${
                      lastNameError ? "border-red-500" : "border-white/10"
                    }`}
                  />

                  {lastNameError && (
                    <p className="mt-2 text-xs text-red-400">
                      {lastNameError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onClick={() => setEmailError("")}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`mt-2 w-full border bg-[#17191e] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-600 focus:border-[#6595ff] ${
                    emailError ? "border-red-500" : "border-white/10"
                  }`}
                />

                {emailError && (
                  <p className="mt-2 text-xs text-red-400">{emailError}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs text-gray-300"
                >
                  Password
                </label>

                <span
                  className={`mt-2 flex border bg-[#17191e] focus-within:border-[#6595ff] ${
                    passError ? "border-red-500" : "border-white/10"
                  }`}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    value={password}
                    onClick={() => setPassError("")}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-gray-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="px-4 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </span>

                {passError && (
                  <p className="mt-2 text-xs text-red-400">{passError}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 pt-1 text-xs leading-5 text-gray-400">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={acceptedTerms}
                    onClick={() => setTermsError("")}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 accent-[#3968d9]"
                  />

                  <span>
                    I agree to the terms of service and privacy policy.
                  </span>
                </label>

                {termsError && (
                  <p className="mt-2 text-xs text-red-400">{termsError}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#3968d9] px-5 py-4 text-xs font-medium transition hover:bg-[#4b7cff]"
              >
                Create account
                <ArrowRight size={15} />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-gray-400">
              Already have an account?
              <Link to="/login" className="text-[#8eafff] hover:text-white">
                Sign in
              </Link>
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}