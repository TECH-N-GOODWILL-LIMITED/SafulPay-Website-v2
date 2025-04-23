import { companyData } from "../data/companyData";

function DownloadItem() {
  const { downloads } = companyData;
  const { appStore, playStore } = downloads;

  return (
    <div className="hide flex gap-2.5 max-w-96 py-5 mx-2.5 max-m:gap-1.25">
      <a
        href={playStore.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download SafulPay from Google Play Store"
        className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:animate-pulse active:-translate-y-0"
      >
        <img
          src={playStore.image}
          alt="SafulPay app available on Google Play Store"
          className="max-w-full"
        />
      </a>
      <a
        href={appStore.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download SafulPay from Apple App Store"
        className="transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:animate-pulse active:-translate-y-0"
      >
        <img
          src={appStore.image}
          alt="SafulPay app available on the Apple App Store"
          className="max-w-full"
        />
      </a>
    </div>
  );
}

export default DownloadItem;
