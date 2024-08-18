import { SelectedAddOnsType } from "@/interfaces";
import { Button } from "./ui/button";
import { addOns, plans } from "@/constants";

interface SummaryProps {
  setCurrentStep: (step: string) => void;
  selectedPlan: string;
  isYearlyPlan: boolean;
  selectedAddOns: SelectedAddOnsType;
}

const Summary = ({
  setCurrentStep,
  selectedPlan,
  isYearlyPlan,
  selectedAddOns,
}: SummaryProps) => {
  const plan = plans.find((plan) => plan.name === selectedPlan);

  const selectedPlanPrice = isYearlyPlan
    ? plan?.price.yearly
    : plan?.price.monthly;

  const totalAddOnsPrice = isYearlyPlan
    ? addOns.reduce((acc, addOn) => {
        if (selectedAddOns[addOn.name]) {
          acc += addOn.price.yearly;
        }
        return acc;
      }, 0)
    : addOns.reduce((acc, addOn) => {
        if (selectedAddOns[addOn.name]) {
          acc += addOn.price.monthly;
        }
        return acc;
      }, 0);

  const totalPrice = (selectedPlanPrice || 0) + totalAddOnsPrice;

  return (
    <div className="py-8 md:py-4 px-4 md:px-8 md:w-2/3 h-fit md:h-full bg-background w-11/12 m-auto rounded-md flex flex-col">
      <h1 className="text-2xl text-marine-blue font-bold">Finishing Up</h1>
      <p className="text-sm text-cool-gray">
        Double-check everything look OK before confirming.
      </p>
      <div className="mt-6 p-4 bg-magnolia">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold text-marine-blue leading-none">
              {selectedPlan} ({isYearlyPlan ? "Yearly" : "Monthly"})
            </h4>
            <small
              className="text-cool-gray underline decoration-solid cursor-pointer hover:text-purplish-blue"
              onClick={() => setCurrentStep("Select Plan")}
            >
              Change
            </small>
          </div>
          <div>
            {isYearlyPlan ? (
              <span className="text-sm font-bold text-marine-blue">
                ${plan?.price.yearly}/yr
              </span>
            ) : (
              <span className="text-sm font-bold text-marine-blue">
                ${plan?.price.monthly}/mo
              </span>
            )}
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4 flex flex-col gap-2">
          {addOns.map((addOn) => {
            if (selectedAddOns[addOn.name]) {
              return (
                <div className="flex justify-between">
                  <span className="text-sm text-cool-gray">{addOn.name}</span>
                  {isYearlyPlan ? (
                    <span className="text-sm text-marine-blue">
                      +${addOn.price.yearly}/yr
                    </span>
                  ) : (
                    <span className="text-sm text-marine-blue">
                      +${addOn.price.monthly}/mo
                    </span>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mt-1 flex justify-between p-4 pb-0">
        <p className="text-sm text-cool-gray">
          Total (per {isYearlyPlan ? "year" : "month"})
        </p>
        <p className="font-bold text-purplish-blue">
          +${totalPrice}/{isYearlyPlan ? "yr" : "mo"}
        </p>
      </div>
      <div className="mt-auto flex justify-between items-center md:relative absolute bottom-0 left-0 w-full bg-background p-4 md:p-0">
        <span
          className="font-bold text-purplish-blue hover:text-marine-blue cursor-pointer"
          onClick={() => setCurrentStep("Add-ons")}
        >
          Go Back
        </span>
        <Button
          className="bg-marine-blue hover:bg-purplish-blue"
          onClick={() => setCurrentStep("Summary-Thank-You")}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Summary;
