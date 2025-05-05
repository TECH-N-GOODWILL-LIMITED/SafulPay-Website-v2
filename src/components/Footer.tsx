import { NavLink, useNavigate } from "react-router";
import { companyData } from "../data/companyData";
import { featuresData, footerData } from "../data/appContent";
import { useSmoothScrollContext } from "../context/SmoothScrollProvider";
import DownloadItem from "./DownloadItem";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Footer() {
  const navigate = useNavigate();
  const { activeSection, scrollToSection, isHomePage } =
    useSmoothScrollContext();
  const { company, socials, regulated } = companyData;
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
      navigate("/", { state: { scrollTo: url }, replace: true });
    }
  };

  return (
    <footer
      role="contentinfo"
      className="rounded-t-[50px] max-md:rounded-t-[30px] bg-[#1B1B1B] text-white text-start w-full"
    >
      <div className="grid grid-cols-1 justify-between items-center max-w-300.5 mx-auto px-2.5 pt-25 pb-12.5 gap-x-10 md:pb-25 md:pt-37.5 md:grid-cols-[1fr_auto] max-md:place-items-center max-md:text-center max-md:gap-y-10">
        <div className="max-w-175 flex flex-col gap-2.5 items-start max-md:items-center z-20 mx-5 max-md:mx-10">
          <div className="flex gap-2.5 items-center">
            <img
              src={company.lemonLogo}
              alt={`${company.name} logo`}
              className="w-7 m:w-12.5 px-0 py-1.25 md:px-6.5 sm:py-2.5 md:w-30"
            />
            <span className="text-[clamp(20px,7.907vw,64px)] font-semibold text-secondary-color tracking-[-1.92px] max-m:tracking-[-1.36px]">
              {company.name}
            </span>
          </div>
          <h1 className="max-w-275 p-2.5 text-[clamp(16px,5.117vw,34px)] max-m:tracking-[-0.44px] font-semibold tracking-[-1.36px] leading-none max-md:mx-10 max-m:mx-1!">
            {company.slogan}
            <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
              {company.name}
            </span>
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

              {links.links.map((link) => (
                <>
                  {link.type === "route" ? (
                    <NavLink
                      to={link.url}
                      end
                      onClick={(e) => {
                        if (location.pathname === link.url) {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      key={`${link.type}-${link.url}`}
                      className={({ isActive }) =>
                        `small-text text-left py-1.25 px-2.5 hover:text-secondary-color transition-all cursor-pointer hover:cursor-pointer max-md:text-center ${
                          isActive && "text-secondary-color font-bold"
                        }`
                      }
                      aria-label={`Navigate to ${link.label} page`}
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <button
                      key={`route-${link.url}`}
                      onClick={() => handleScrollLink(link.url)}
                      className={`small-text text-left py-1.25 px-2.5 cursor-pointer hover:cursor-pointer hover:text-secondary-color transition-all max-md:text-center`}
                      aria-label={`Scroll to ${link.label} section`}
                      aria-current={
                        activeSection === link.url ? "location" : undefined
                      }
                    >
                      {link.label}
                    </button>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
        <div className="col-span-full mx-5 max-md:mx-10 max-md:row-[2]">
          <DownloadItem />
        </div>
        <div className="flex justify-between items-center col-span-full mx-5 max-md:mx-10 max-md:flex-col-reverse">
          <div className="flex flex-col w-fit gap-2.5 p-2.5">
            <p className="p-2.5 title-text text-white">Connect With Us</p>
            <div className="flex items-center gap-1.25">
              {socials.map((social, index) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  aria-label={`Visit SafulPay's ${social.name} page`}
                  className="w-full p-3 md:p-4 lg:p-5 bg-primary-shade-10 rounded-full transition-all hover:bg-primary-color max-md:bg-secondary-shade-10"
                >
                  <img
                    src={social.icon}
                    alt={`${social.name} icon`}
                    aria-hidden="true"
                    className="w-7.5"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex gap-5 w-79 rounded-[30px] py-5 px-7.5 items-center justify-center overflow-hidden bg-primary-shade-10">
            <img
              className="max-w-147.5 absolute opacity-40 rotate-[133.24deg]"
              src={bgIcon}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <img
              src={regulated.icon}
              alt="Regulated by Bank of Sierra Leone"
              className="w-8 md:w-10 filter grayscale invert"
            />
            <span className="text-[clamp(12px,3.721vw,16px)] font-semibold py-2.5">
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
              <NavLink
                to={link.url}
                end
                onClick={(e) => {
                  if (location.pathname === link.url) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                key={index}
                className="py-2.5 px-5 m:px-7.5 font-semibold hover:text-secondary-color transition-all"
                aria-label={`Navigate to ${link.label} page`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
