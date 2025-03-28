import { companyData } from "../data/companyData";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Team() {
  const { team } = companyData;
  const { title, intro, members } = team;

  return (
    <section className="section relative">
      <img
        className="max-w-147.5 absolute top-[-8%] right-[-24%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
      />
      <img
        className="max-w-147.5 absolute top-[6%] left-[-30%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
      />
      <img
        className="max-w-147.5 absolute bottom-[-12%] left-[-16%] opacity-80 max-md:max-w-120 max-sm:max-w-100"
        src={bgIcon}
        alt=""
      />
      <div className="max-w-250 flex-center flex-col gap-7.5 py-2.5 mx-12.5">
        <h1 className="p-2.5">
          Meet Our Team of <span className="text-primary-color">Experts</span>
        </h1>
        <h2 className="p-2.5 text-[clamp(16px,5.117vw,34px)] font-semibold tracking-[-1.36px] max-m:tracking-[-0.44px]">
          {title}
        </h2>

        <p className="p-2.5 w-full!">{intro}</p>

        <div className="w-fit grid grid-cols-3 gap-7.5 max-lg:grid-cols-2 max-md:flex max-md:overflow-x-scroll">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-[#f1f1f1] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden"
            >
              <img src={member.img} alt="" className="max-w-75" />
              <div className="p-6.75">
                <p className="title-text">{member.name}</p>
                <p className="text-[14px]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
