import { featuresData } from "../data/appContent";

function KeyFeatures() {
  const { keyFeatures } = featuresData;

  return (
    <div className="secondary-heading p-2.5 flex-center gap-2.5 max-m:tracking-[-0.4px]">
      {keyFeatures.map((feature, index) => (
        <span
          className={`${
            index === 0
              ? `text-primary-color`
              : `${index === 1 ? "text-error-color" : "text-secondary-color"}`
          }`}
          key={index}
        >
          {feature}
          {index !== keyFeatures.length - 1 && (
            <span className="text-text-color"> - </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default KeyFeatures;
