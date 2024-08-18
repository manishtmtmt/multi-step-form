import { useState } from "react";

import { plans } from "@/constants";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

interface SelectPlanProps {
  setCurrentStep: (step: string) => void;
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  isYearlyPlan: boolean;
  setIsYearlyPlan: (isYearlyPlan: boolean) => void;
}

const SelectPlan = ({
  setCurrentStep,
  selectedPlan,
  setSelectedPlan,
  isYearlyPlan,
  setIsYearlyPlan,
}: SelectPlanProps) => {
  const [error, setError] = useState("");
  const togglePlan = () => {
    setIsYearlyPlan(!isYearlyPlan);
  };

  const handleSelectPlan = (plan: string) => {
    setError("");
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    if (!selectedPlan) {
      setError("Please select at least one plan");
      return;
    }
    setCurrentStep("Add-ons");
  };

  return (
    <div className="py-8 md:py-4 px-4 md:px-8 md:w-2/3 h-fit md:h-full bg-background w-11/12 m-auto rounded-md flex flex-col">
      <h1 className="text-2xl text-marine-blue font-bold">Select your Plan</h1>
      <p className="text-sm text-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`shadow-md md:p-4 p-2 rounded-md cursor-pointer hover:border hover:border-pastel-blue ${
              selectedPlan === plan.name
                ? "bg-magnolia border border-pastel-blue"
                : ""
            }`}
            onClick={() => handleSelectPlan(plan.name)}
          >
            <img src={plan.icon} alt={`${plan.name}-icon`} className="w-8" />
            <p className="mt-6 font-bold text-marine-blue text-sm md:text-base">
              {plan.name}
            </p>
            {isYearlyPlan ? (
              <>
                <p className="leading-0 text-xs md:text-sm text-cool-gray">
                  ${plan.price.yearly}/yr
                </p>
                <p className="leading-0 text-xs text-purplish-blue">
                  {plan.discount} months free
                </p>
              </>
            ) : (
              <p className="leading-0 text-sm text-cool-gray">
                ${plan.price.monthly}/mo
              </p>
            )}
          </div>
        ))}
      </div>
      {error ? (
        <small className="text-strawberry-red font-bold mt-2">{error}</small>
      ) : null}
      <div className="min-w-full bg-Alabaster flex justify-center gap-2 py-2 mt-5">
        <span className="text-sm font-bold text-cool-gray">Monthly</span>
        <Switch checked={isYearlyPlan} onCheckedChange={togglePlan} />
        <span className="text-sm font-bold text-cool-gray">Yearly</span>
      </div>

      <div className="mt-auto flex justify-between items-center md:relative absolute bottom-0 left-0 w-full bg-background p-4 md:p-0">
        <span
          className="font-bold text-purplish-blue hover:text-marine-blue cursor-pointer"
          onClick={() => setCurrentStep("Your Info")}
        >
          Go Back
        </span>
        <Button
          className="bg-marine-blue hover:bg-purplish-blue"
          onClick={handleSubmit}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default SelectPlan;
