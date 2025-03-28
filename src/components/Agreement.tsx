import { Link } from "react-router";
import { AgreementData } from "../data/agreementData";
import arrowBack from "/icon-arrow-back.svg";

interface AgreementProps {
  data: AgreementData;
}

const Agreement: React.FC<AgreementProps> = ({ data }) => {
  const { title, lastUpdated, sections } = data;

  return (
    <main className="gap-5 pb-30 pt-0 md:gap-12.5 md:py-37.5">
      <section className="section h-84.5 py-12.5 text-white justify-center bg-text-color rounded-[50px] max-md:rounded-t-none max-md:justify-end m:h-125 ">
        <div className="max-w-285 w-full text-left px-7.5">
          <Link to="/" className="flex gap-7.5">
            <img src={arrowBack} alt="" className="max-[600px]:w-6.75 w-15.5" />
            <span className="py-2.5">Back</span>
          </Link>
          <h2 className="py-0 md:py-2.5 text-[clamp(20px,7.907vw,64px)] font-semibold text-primary-color uppercase tracking-[-2.562x] max-md:tracking-[-1.36px]">
            {title}
          </h2>
          <p className="py-2.5">{lastUpdated}</p>
        </div>
      </section>
      <article className="max-w-250 flex flex-col gap-5 text-left lg:gap-12.5">
        {sections.map((section) => (
          <div>
            <h2 className="mx-10 py-2.5 text-primary-color text-[clamp(16px,5.117vw,34px)] max-m:tracking-[-0.4px] font-semibold tracking-[-1.36px]">
              {section.title}
            </h2>
            {section.content.map((content, index) => (
              <div key={index}>
                {content.subtitle && (
                  <p className="small-text font-normal tracking-normal max-w-230 mx-10 pb-2.5">
                    {content.subtitle}
                  </p>
                )}
                {content.text && (
                  <p className="small-text max-w-230 mx-10 pb-2.5">
                    {content.text}
                  </p>
                )}
                {content.list && (
                  <ul className="mx-15 pb-2.5 pt-1.25 ">
                    {content.list?.map((listItem, index) => (
                      <li
                        key={index}
                        className="small-text list-disc list-inside"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </article>
    </main>
  );
};

export default Agreement;
