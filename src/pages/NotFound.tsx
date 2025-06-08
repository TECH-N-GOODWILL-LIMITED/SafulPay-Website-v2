// import NavBar from "../sections/NavBar";
import { Link } from "react-router";
import errorImage from "../assets/404_image.svg";

const NotFound: React.FC = () => {
  return (
    <>
      {/* <NavBar /> */}
      <main className="h-screen bg-transparent text-white p-10 gap-35 max-md:gap-20">
        <div>
          <h1 className="flex-center gap-10 max-md:gap-5 max-m:gap-2!">
            {/* <span className="font-semibold text-[300px]">4</span> */}
            <span className="font-semibold text-[clamp(24px,36vw,300px)]">
              4
            </span>
            {/* <img src={errorImage} alt="error image" className="h-50" /> */}
            <img
              src={errorImage}
              alt="error image"
              className="h-[clamp(24px,24vw,200px)]"
            />
            {/* <span className="font-semibold text-[300px]">4</span> */}
            <span className="font-semibold text-[clamp(24px,36vw,300px)]">
              4
            </span>
          </h1>
          <p className="flex-center flex-col gap-2">
            <span className="text-[clamp(16px,5.117vw,40px)] font-semibold ">
              whoops!
            </span>
            <ul className="list-disc text-left text-[clamp(16px,5.117vw,27px)] tracking-wide">
              <li>The address you entered may be incorrect</li>
              <li>It may be a broken or outdated link.</li>
            </ul>
          </p>
        </div>
        <Link
          to="/"
          className="bg-secondary-color p-3 px-6 text-primary-color small-text font-semibold rounded-[15px]"
        >
          Visit SafulPay
        </Link>
      </main>
    </>
  );
};

export default NotFound;
