import { companyData } from "../data/companyData";

function DownloadItem() {
  const { downloads } = companyData;
  const { appStore, playStore } = downloads;

  return (
    <div className="hide flex gap-2.5 max-w-96 py-5 mx-2.5 max-m:gap-1.25">
      <a href={playStore.link}>
        <img src={playStore.image} alt="" className="max-w-full" />
      </a>
      <a href={appStore.link}>
        <img src={appStore.image} alt="" className="max-w-full" />
      </a>
    </div>
  );
}

export default DownloadItem;
