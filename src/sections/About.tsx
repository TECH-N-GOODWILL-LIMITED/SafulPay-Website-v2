import bgImage from "/bg-about-icons.png";
import { companyData } from "../data/companyData";
import KeyFeatures from "../components/KeyFeatures";

function About() {
  const { aboutus, company } = companyData;
  return (
    <section className="section gap-50 py-2.5 max-lg:gap-25">
      <div className="relative w-screen flex-center mx-12.5">
        <h1 className="px-2.5 py-50 max-lg:py-25 max-md:pb-0">
          About&nbsp;
          <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent  ">
            {company.name}
          </span>
        </h1>
        <img
          src={bgImage}
          alt="background-image"
          className="absolute max-w-432.75 top-0 max-md:hidden max-lg:max-w-216.5"
        />
      </div>
      <div className="max-w-250 flex-center flex-col gap-2.5 ">
        <h2 className="primary-heading p-2.5">{aboutus.title}</h2>
        <KeyFeatures />
        <div className="mx-12.5">
          {aboutus.intro.map((intro, index) => (
            <p
              key={index}
              className={`secondary-heading font-normal ${
                index === 1 ? "mb-0" : "mb-5"
              }`}
            >
              {intro}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
