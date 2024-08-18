import { addOns } from "@/constants";
import { SelectedAddOnsType } from "@/interfaces";
import AddOnService from "./AddOnService";
import { Button } from "./ui/button";

interface AddOnsProps {
  setCurrentStep: (step: string) => void;
  isYearlyPlan: boolean;
  selectedAddOns: SelectedAddOnsType;
  setSelectedAddOns: (selectedAddOns: SelectedAddOnsType) => void;
}

const AddOnsStep = ({
  setCurrentStep,
  isYearlyPlan,
  selectedAddOns,
  setSelectedAddOns,
}: AddOnsProps) => {
  return (
    <div className="py-8 md:py-4 px-4 md:px-8 md:w-2/3 h-fit md:h-full bg-background w-11/12 m-auto rounded-md flex flex-col">
      <h1 className="text-2xl text-marine-blue font-bold">Pick add-ons</h1>
      <p className="text-sm text-cool-gray">
        Add-ons help enhance your gaming experience.
      </p>
      <div>
        {addOns.map((addOn) => (
          <AddOnService
            key={addOn.name}
            addOn={addOn}
            selectedAddOns={selectedAddOns}
            setSelectedAddOns={setSelectedAddOns}
            isYearlyPlan={isYearlyPlan}
          />
        ))}
      </div>
      <div className="mt-auto flex justify-between items-center md:relative absolute bottom-0 left-0 w-full bg-background p-4 md:p-0">
        <span
          className="font-bold text-purplish-blue hover:text-marine-blue cursor-pointer"
          onClick={() => setCurrentStep("Select Plan")}
        >
          Go Back
        </span>
        <Button
          className="bg-marine-blue hover:bg-purplish-blue"
          onClick={() => setCurrentStep("Summary")}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default AddOnsStep;
