import AnimatedStep from "../hooks/animations/AnimatedStep";
import mockUp from "../assets/mockup-login.png";
import type { SecurityFeature } from "../data/appContent";

interface FeatureProps {
  data: SecurityFeature;
  index: number;
}

function SecurityFeature({ data, index }: FeatureProps) {
  const { icon, title, description } = data;

  return (
    <>
      {index === 1 && (
        <div className="col-span-1 row-span-2 items-center justify-center hidden lg:flex">
          <img
            src={mockUp}
            alt="Login mockup image"
            className="w-full object-cover"
          />
        </div>
      )}
      <AnimatedStep index={index}>
        <div
          tabIndex={0}
          role="group"
          aria-label={title}
          aria-description={description}
          className="max-w-75 p-2.5 flex flex-col gap-x-2.5 lg:w-75"
        >
          <div className="py-5 px-7.5 bg-primary-shade-10 rounded-[30px] flex justify-center">
            <img src={icon} alt={`${title} icon`} className="w-10 md:w-15" />
          </div>
          <h3 className="secondary-heading py-2.5">{title}</h3>
          <p className="py-2.5">{description}</p>
        </div>
      </AnimatedStep>
    </>
  );
}

export default SecurityFeature;

// import AnimatedStep from "../animations/AnimatedStep";
// import mockUp from "../assets/mockup-login.png";
// import type { SecurityFeature as FeatureType } from "../data/appContent";
// import { forwardRef } from "react";
// import { useArrowKeyNavigation } from "../hooks/useArrowKeyNavigation";

// interface FeatureProps {
//   data: FeatureType;
//   index: number;
//   refs: (HTMLElement | null)[];
//   direction?: "horizontal" | "vertical" | "both";
// }

// const SecurityFeature = forwardRef<HTMLDivElement, FeatureProps>(
//   ({ data, index, refs, direction = "both" }, ref) => {
//     const { icon, title, description } = data;
//     const { handleKeyDown } = useArrowKeyNavigation({ refs, index, direction });

//     return (
//       <>
//         {index === 1 && (
//           <div className="col-span-1 row-span-2 items-center justify-center hidden lg:flex">
//             <img
//               src={mockUp}
//               alt="Login mockup image"
//               className="w-full object-cover"
//             />
//           </div>
//         )}
//         <AnimatedStep index={index}>
//           <div
//             ref={ref}
//             onKeyDown={handleKeyDown}
//             tabIndex={0}
//             role="group"
//             aria-label={title}
//             aria-description={description}
//             className="max-w-75 p-2.5 flex flex-col gap-x-2.5 lg:w-75"
//           >
//             <div className="py-5 px-7.5 bg-primary-shade-10 rounded-[30px] flex justify-center">
//               <img src={icon} alt={`${title} icon`} className="w-10 md:w-15" />
//             </div>
//             <h3 className="secondary-heading py-2.5">{title}</h3>
//             <p className="py-2.5">{description}</p>
//           </div>
//         </AnimatedStep>
//       </>
//     );
//   }
// );

// export default SecurityFeature;
