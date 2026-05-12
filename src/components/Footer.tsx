"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { companyData } from "../data/companyData";
import { featuresData, footerData } from "../data/appContent";
import { useSmoothScrollContext } from "../context/SmoothScrollProvider";
import DownloadItem from "./DownloadItem";
import Socials from "./Socials";
import bgIcon from "../assets/images/bg-logo-illustration.svg";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeSection, scrollToSection, isHomePage } =
    useSmoothScrollContext();
  const { company, regulated } = companyData;
  const { featuresText } = featuresData;
  const { footerLinks, copyright, otherLinks } = footerData;

  const handleScrollLink = (url: string) => {
    const offset = url === "features" ? 280 : 120;
    const shouldScroll =
      isHomePage ||
      (!isHomePage && (url === "contact-us" || url === "download"));

    if (shouldScroll) {
      scrollToSection(url, { offset });
    } else {
      router.replace("/#" + url);
    }
  };

  return (
    <footer
      role="contentinfo"
      className="rounded-t-[50px] max-md:rounded-t-[30px] bg-[#1B1B1B] text-white text-start w-full"
    >
      <div className="grid grid-cols-1 justify-between items-center max-w-300.5 mx-auto px-2.5 pt-25 pb-12.5 gap-x-10 md:pt-37.5 md:grid-cols-[1fr_auto] max-md:place-items-center max-md:text-center max-md:gap-y-10">
        <div className="flex gap-2.5 items-center col-span-full">
          <Image
            src={company.lemonLogo}
            alt={`${company.name} logo`}
            className="w-7 m:w-12.5 px-0 py-1.25 md:px-6.5 sm:py-2.5 md:w-30"
          />
          <h1 className=" text-secondary-color tracking-[-1.92px] max-m:tracking-[-1.36px]">
            {company.name}
          </h1>
        </div>

        <div className="-mt-10 max-w-175 flex flex-col gap-2.5 items-start max-md:items-center z-20 mx-5 max-md:mx-10">
          <h1 className="max-w-275 pt-0 p-2.5 text-[clamp(16px,5.117vw,34px)] max-m:tracking-[-0.44px] font-semibold tracking-[-1.36px] leading-none max-md:mx-10 max-m:mx-1!">
            {company.slogan}
            {/* <span className="bg-linear-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
              {company.name}
            </span> */}
          </h1>
          <p className="small-text p-2.5">{featuresText[2]}</p>
        </div>
        <div
          aria-label="Footer links"
          className="flex lg:gap-12.5 gap-10  max-md:gap-7"
        >
          {footerLinks.map((links, index) => (
            <div className="flex flex-col gap-1.25" key={index}>
              <h2 className="title-text text-white p-1.5 md:p-2.5">
                {links.category}
              </h2>

              {links.links.map((link) => {
                const isActive = pathname === link.url;
                const commonClasses = `small-text text-left py-1.25 px-2.5 hover:text-secondary-color transition-all cursor-pointer max-md:text-center ${
                  isActive ? "text-secondary-color font-bold" : ""
                }`;

                return link.type === "route" ? (
                  <Link
                    key={`footer-route-${link.url}`}
                    href={link.url}
                    onClick={(e) => {
                      if (isActive) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className={commonClasses}
                    aria-label={`Navigate to ${link.label} page`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={`footer-scroll-${link.url}`}
                    onClick={() => handleScrollLink(link.url)}
                    className={commonClasses}
                    aria-label={`Scroll to ${link.label} section`}
                    aria-current={
                      activeSection === link.url ? "location" : undefined
                    }
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className="col-span-full mx-5 max-md:mx-10 max-md:row-2">
          <DownloadItem />
        </div>
        <div className="flex justify-between items-center col-span-full mx-5 max-md:mx-10 max-md:flex-col-reverse">
          <Socials />
          <div className="relative flex gap-5 max-w-79 rounded-[30px] py-2.5 px-6 items-center justify-center overflow-hidden bg-primary-shade-10">
            <Image
              className="max-w-147.5 absolute opacity-40 rotate-[133.24deg] z-99"
              src={bgIcon}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <Image
              src={regulated.icon}
              alt="Regulated by Bank of Sierra Leone"
              className="w-8 md:w-10 filter grayscale invert"
            />
            <span className="small-text font-normal py-2.5">
              {regulated.text}
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex justify-between items-center col-span-full text-[clamp(12px,3.721vw,18px)] tracking-[-0.18px] border-t border-white max-md:mx-10 max-md:flex-col-reverse max-md:w-full max-md:gap-10">
          <p className="pb-2.5 pt-5 font-normal">
            {copyright}
            <span className="text-secondary-color">{company.name}</span>
          </p>
          <div>
            {otherLinks.map((link, index) => (
              <Link
                href={link.url}
                onClick={(e) => {
                  if (pathname === link.url) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                key={index}
                className="py-4 px-5 m:px-7.5 font-semibold hover:text-secondary-color transition-all"
                aria-label={`Navigate to ${link.label} page`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
