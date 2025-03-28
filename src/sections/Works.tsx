import { worksData } from "../data/appContent";
import Step from "../components/Step";

function Works() {
  const { title, intro, instruction, steps } = worksData;
  return (
    <section
      id="works"
      className="section max-w-400 py-25 px-5 gap-5 md:gap-10 bg-text-color text-white rounded-[50px]"
    >
      <h2 className="primary-heading font-bold p-2.5 tracking-[-2.1px]">
        {title}
      </h2>
      <p className="p-2.5 mx-2.5 max-w-300">{intro}</p>
      <h3 className="p-2.5 secondary-heading">{instruction}</h3>
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2.5 place-items-center justify-center">
        {steps.map((step, index) => (
          <Step
            key={index}
            index={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
