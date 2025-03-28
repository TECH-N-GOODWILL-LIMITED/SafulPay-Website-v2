import Agreement from "../components/Agreement";
import { privacyPolicyData } from "../data/agreementData";
import MainFooter from "../sections/MainFooter";
import NavBar from "../sections/NavBar";
// import arrowBack from "/icon-arrow-back.svg";

function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      {/* <main className="gap-5 pb-30 md:gap-12.5 md:py-37.5">
        <section className="section h-125 py-12.5 px-50 text-white justify-center items-start bg-text-color rounded-[50px]">
          <div className="flex gap-7.5">
            <img src={arrowBack} alt="" className="w-15.5" />
            <span className="py-2.5">Back</span>
          </div>
          <h2 className="py-2.5 text-[clamp(20px,7.907vw,64px)] font-semibold text-primary-color uppercase tracking-[-2.562x] max-md:tracking-[-1.36px]">
            {title}
          </h2>
          <p className="py-2.5">{lastUpdated}</p>
        </section>
        <section className="max-w-250 flex flex-col gap-5 text-left lg:gap-12.5">
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
        </section>
      </main> */}

      <Agreement data={privacyPolicyData} />
      <MainFooter />
    </>
  );
}

export default PrivacyPolicy;
