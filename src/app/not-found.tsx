import Link from "next/link";
import Image from "next/image";
import errorImage from "@/assets/images/illustrations/404_image.svg";

export default function NotFound() {
  return (
    <>
      <main className="h-screen bg-transparent text-white p-10 gap-35 max-md:gap-20">
        <div>
          <h1 className="flex-center gap-10 max-md:gap-5 max-sm:gap-2!">
            <span className="font-semibold text-[clamp(24px,36vw,300px)]">
              4
            </span>
            <Image
              src={errorImage}
              alt="error image"
              className="h-[clamp(24px,24vw,200px)] w-auto"
            />
            <span className="font-semibold text-[clamp(24px,36vw,300px)]">
              4
            </span>
          </h1>
          <div className="flex-center flex-col gap-2">
            <span className="text-[clamp(16px,5.117vw,40px)] font-semibold ">
              whoops!
            </span>
            <ul className="list-disc text-left text-[clamp(16px,5.117vw,27px)] tracking-wide">
              <li>The address you entered may be incorrect</li>
              <li>It may be a broken or outdated link.</li>
            </ul>
          </div>
        </div>
        <Link
          href="/"
          className="bg-secondary-color p-3 px-6 text-primary-color small-text font-semibold rounded-[15px]"
        >
          Visit SafulPay
        </Link>
      </main>
    </>
  );
}
