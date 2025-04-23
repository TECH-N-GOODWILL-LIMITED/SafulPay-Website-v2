import { featuresData } from "../data/appContent";

function KeyFeatures() {
  const { keyFeatures } = featuresData;

  return (
    <div
      role="list"
      aria-label="Key SafulPay's features"
      className="secondary-heading p-2.5 flex-center gap-2.5 max-m:tracking-[-0.4px]"
    >
      {keyFeatures.map((feature, index) => (
        <span
          key={index}
          role="listitem"
          aria-label={`Feature: ${feature}`}
          className={`${
            index === 0
              ? `text-primary-color`
              : `${index === 1 ? "text-error-color" : "text-secondary-color"}`
          }`}
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
