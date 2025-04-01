import { companyData } from "../data/companyData";
import DownloadItem from "../components/DownloadItem";
import mockupImage from "../assets/mockup-login-signup.png";

function Download() {
  const { downloads } = companyData;
  const { title, subtitle, text } = downloads;

  return (
    <section
      id="download"
      className="section max-w-400 py-12.5 px-10 flex-row justify-center bg-text-color text-white rounded-[50px] max-md:flex-col max-md:gap-2.5"
      data-section
    >
      <div className="hide text-left max-w-[705px] px-2.5  min-w-1/2 max-md:text-center max-md:flex-center max-md:flex-col max-md:gap-2.5">
        <h2 className="text-[clamp(20px,7.907vw,64px)] text-secondary-color font-semibold py-2.5 tracking-[-2.56px] max-m:tracking-[-1.36px]">
          {title}
        </h2>
        <h3 className="secondary-heading py-2.5">{subtitle}</h3>
        <p className="py-2.5">{text}</p>
        <DownloadItem />
      </div>
      <img
        src={mockupImage}
        alt=""
        className="show max-w-1/2 max-md:max-w-89"
      />
      <DownloadItem />
    </section>
  );
}

export default Download;
