import { steps } from "@/constants";

const Sidebar = ({
  currentStep,
}: {
  currentStep: string;
}) => {
  return (
    <div className="w-1/3 bg-sidebar-desktop bg-no-repeat bg-cover bg-center py-8 px-4 rounded-md flex flex-col gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-2">
          <div
            className={`rounded-full border border-background w-8 h-8 flex justify-center items-center ${
              currentStep.includes(step) ? "bg-light-blue" : ""
            }`}
          >
            <span
              className={`text-background font-bold ${
                currentStep.includes(step) ? "text-foreground" : ""
              }`}
            >
              {index + 1}
            </span>
          </div>
          <div>
            <p className="uppercase text-light-gray text-xs leading-none">
              step {index + 1}
            </p>
            <p className="uppercase text-background font-bold text-sm">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
