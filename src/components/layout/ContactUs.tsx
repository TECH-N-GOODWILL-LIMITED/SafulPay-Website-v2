"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { companyData } from "@/data/companyData";
import { useScaleFadeIn } from "@/hooks/animations/useScaleFadeIn";
import bgIcon from "@/assets/images/illustrations/bg-logo-illustration.svg";

function ContactUs() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { company } = companyData;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useScaleFadeIn({ containerRef: contactRef });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitizedEmail = email.trim();

    if (!sanitizedEmail) {
      setError("Email address is required");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(""), 3000);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setError("Enter a valid email address");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: sanitizedEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Your email has been submitted successfully!");
      setEmail("");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setSuccess(""), 4000);
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error while typing
    if (success) setSuccess("");
  };

  const handleBlur = () => {
    const sanitizedEmail = email.trim();
    if (!sanitizedEmail) {
      setError("Email address is required");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(""), 3000);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitizedEmail)) {
      setError("Enter a valid email address");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
  };

  return (
    <section
      ref={contactRef}
      id="contact-us"
      role="region"
      aria-labelledby="contact-us-heading"
      className="w-full flex-center"
      data-section
    >
      <form
        onSubmit={handleSubmit}
        aria-labelledby="contact-us-heading"
        className="relative max-m:w-87.5 max-w-250 w-full mx-5 z-2 bg-white px-10 py-20 rounded-[20px] flex flex-col gap-7.5 items-center justify-center overflow-hidden shadow-[0_0_30px_0_rgba(11,70,80,0.4)] md:mb-[-80px] mb-[-36px]"
      >
        <img
          src={bgIcon.src}
          width={590}
          height={187}
          alt=""
          aria-hidden="true"
          role="presentation"
          loading="lazy"
          decoding="async"
          className="max-w-147.5 absolute rotate-[152.08deg] opacity-80 left-[-176px] top-[-6%] max-md:hidden"
        />
        <h2 id="contact-us-heading" className="sr-only">
          Contact {company.name}
        </h2>

        <div className="flex sm:gap-2.5 gap-0 items-center">
          <Image
            src={company.greenLogo}
            unoptimized
            alt={`${company.name} logo`}
            className="w-15 py-1.25 px-3.25 max-sm:w-10 max-sm:py-[3.33px] max-sm:px-2"
          />
          <span className="text-[clamp(16px,5.117vw,34px)] font-semibold tracking-[-1.36px] bg-linear-to-r from-primary-color to-secondary-color bg-clip-text text-transparent max-m:tracking-[-0.44px]">
            {company.name}
          </span>
        </div>
        <div className="relative focus-within:outline focus-within:outline-secondary-color flex justify-center max-w-lg w-full border p-1 border-secondary-color rounded-[20px] mx-5 max-sm:pt-2.5 max-sm:flex-col max-sm:gap-2.5">
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            disabled={isSubmitting}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter your email address"
            aria-required="true"
            className="focus:outline-none focus:ring-0 focus:shadow-none title-text font-extralight text-primary-color placeholder:text-[#67967b] block border-none bg-none w-full px-2.5 py-3 min-h-12 caret-primary-color disabled:opacity-50"
          />
          {error && (
            <div className="absolute -bottom-3.5 left-0 bg-error-color text-sm p-1 px-4 text-white rounded-md z-99">
              {error}
            </div>
          )}
          {success && (
            <div className="absolute -bottom-3.5 left-0 bg-primary-color text-sm p-1 px-4 text-white rounded-md z-99">
              {success}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting || !!error || !email.trim()}
            aria-label={`Submit your email address to ${company.name} so we can contact you`}
            className={`small-text font-semibold text-white bg-linear-to-r from-primary-color to-[#67967B] px-6 py-3 min-h-12 rounded-2xl ${
              isSubmitting || !!error || !email.trim()
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
