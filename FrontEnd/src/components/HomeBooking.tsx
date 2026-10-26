import { useState, type FormEvent } from "react";
import { CarFront, Cog, ScanLine, Wrench, ArrowRight } from "lucide-react";

export default function HomeBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [vehicleError, setVehicleError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setVehicleError("");
    setServiceError("");
    setMessageError("");

    let valid = true;

    if (!name.trim()) {
      setNameError("Full name is required");
      valid = false;
    }

    if (!phone.trim()) {
      setPhoneError("Phone number is required");
      valid = false;
    }

    if (!vehicle.trim()) {
      setVehicleError("Vehicle make and model are required");
      valid = false;
    }

    if (!service) {
      setServiceError("Please select a service");
      valid = false;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      valid = false;
    }

    if (!valid) return;

    const subject = `AutoUniversal consultation request: ${service}`;
    const body = `Name: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nService: ${service}\n\nMessage: ${message}`;

    window.location.href = `mailto:info@autouniversal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="booking" className="bg-[#0d0f13] py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-blue-400">
            Workshop
          </p>

          <h2 className="max-w-xl text-3xl font-medium uppercase leading-tight sm:text-5xl">
            YOUR CAR DESERVES THE RIGHT CARE.
          </h2>

          <p className="mt-5 max-w-md text-xs leading-7 text-gray-400 sm:text-sm">
            Computer diagnostics, auto-electrical services and mechanical
            repairs. Tell us about your vehicle and the issue.
          </p>

          <div className="mt-8 space-y-4 text-xs text-gray-300">
            <p className="flex items-center gap-3">
              <ScanLine size={16} className="text-blue-400" />
              Computer diagnostics
            </p>
            <p className="flex items-center gap-3">
              <Wrench size={16} className="text-blue-400" />
              Mechanical and electrical repairs
            </p>
            <p className="flex items-center gap-3">
              <Cog size={16} className="text-blue-400" />
              Maintenance and spare parts
            </p>
            <p className="flex items-center gap-3">
              <CarFront size={16} className="text-blue-400" />
              Vehicle inspections
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="border border-white/[0.08] bg-[#15171c] p-6 sm:p-8"
        >
          <h3 className="text-sm font-medium uppercase tracking-wide">
            REQUEST A CONSULTATION
          </h3>

          <p className="mt-2 text-[11px] leading-5 text-gray-500">
            Leave your details and tell us what your car needs.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setNameError("");
                }}
                placeholder="Full name"
                className="w-full min-w-0 border border-white/10 bg-[#101114] px-4 py-3 text-xs outline-none placeholder:text-gray-600 focus:border-blue-500"
              />
              {nameError && (
                <p className="mt-2 text-xs text-red-400">{nameError}</p>
              )}
            </div>

            <div>
              <input
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  setPhoneError("");
                }}
                type="tel"
                placeholder="Phone number"
                className="w-full min-w-0 border border-white/10 bg-[#101114] px-4 py-3 text-xs outline-none placeholder:text-gray-600 focus:border-blue-500"
              />
              {phoneError && (
                <p className="mt-2 text-xs text-red-400">{phoneError}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <input
                value={vehicle}
                onChange={(event) => {
                  setVehicle(event.target.value);
                  setVehicleError("");
                }}
                placeholder="Vehicle make and model"
                className="w-full min-w-0 border border-white/10 bg-[#101114] px-4 py-3 text-xs outline-none placeholder:text-gray-600 focus:border-blue-500"
              />
              {vehicleError && (
                <p className="mt-2 text-xs text-red-400">{vehicleError}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <select
                value={service}
                onChange={(event) => {
                  setService(event.target.value);
                  setServiceError("");
                }}
                className="w-full min-w-0 border border-white/10 bg-[#101114] px-4 py-3 text-xs text-gray-400 outline-none focus:border-blue-500"
              >
                <option value="">Select a service</option>
                <option value="Computer diagnostics">
                  Computer diagnostics
                </option>
                <option value="Mechanical repair">Mechanical repair</option>
                <option value="Auto-electrical work">
                  Auto-electrical work
                </option>
                <option value="Maintenance">Maintenance</option>
                <option value="Spare parts">Spare parts</option>
              </select>
              {serviceError && (
                <p className="mt-2 text-xs text-red-400">{serviceError}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <textarea
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setMessageError("");
                }}
                rows={4}
                placeholder="How can we help?"
                className="w-full min-w-0 resize-y border border-white/10 bg-[#101114] px-4 py-3 text-xs outline-none placeholder:text-gray-600 focus:border-blue-500"
              />
              {messageError && (
                <p className="mt-2 text-xs text-red-400">{messageError}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-between bg-[#3968d9] px-5 py-4 text-[11px] transition hover:bg-[#4b7cff]"
          >
            SEND REQUEST <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}