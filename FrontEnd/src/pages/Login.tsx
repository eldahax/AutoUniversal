import { Link } from "react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password_regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setEmailError("");
    setPassError("");

    let hasError = false;

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

    if (hasError) return;
  };

  return (
    <main className="min-h-screen bg-[#111214] text-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="relative hidden overflow-hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=90"
            alt="Luxury BMW vehicle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111214] via-[#111214]/60 to-black/20" />

          <Link
            to="/"
            className="absolute left-10 top-10 z-10 text-sm font-semibold tracking-[0.25em]"
          >
            AUTO<span className="text-[#6595ff]">UNIVERSAL</span>
          </Link>

          <div className="absolute bottom-14 left-10 right-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8eafff]">
              Welcome back
            </p>
            <h1 className="max-w-xl text-5xl font-medium uppercase leading-tight">
              Your next drive starts here.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-gray-300">
              Sign in to continue exploring vehicles, rentals and automotive services.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-12 inline-block text-sm font-semibold tracking-[0.2em] lg:hidden"
            >
              AUTO<span className="text-[#6595ff]">UNIVERSAL</span>
            </Link>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8eafff]">
              Your account
            </p>
            <h2 className="mt-3 text-3xl font-medium uppercase sm:text-4xl">
              Sign in
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Enter your details to access your account.
            </p>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="mt-9 space-y-6"
              aria-live="polite"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-gray-300"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onClick={() => setEmailError("")}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`mt-2 w-full border bg-[#17191e] px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-gray-600 focus:border-[#6595ff] ${
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
                  className="text-xs font-medium text-gray-300"
                >
                  Password
                </label>

                <div
                  className={`mt-2 flex border bg-[#17191e] transition-colors focus-within:border-[#6595ff] ${
                    passError ? "border-red-500" : "border-white/10"
                  }`}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onClick={() => setPassError("")}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-gray-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="px-4 text-gray-400 transition-colors hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {passError && (
                  <p className="mt-2 text-xs text-red-400">{passError}</p>
                )}
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-xs text-[#8eafff] transition-colors hover:text-white"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#3968d9] px-5 py-4 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#4b7cff]"
              >
                Sign in
                <ArrowRight size={16} />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#8eafff] hover:text-white">
                Create one
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}