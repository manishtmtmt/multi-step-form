import { useEffect, useState } from "react";

import AddOnsStep from "./components/AddOnsStep";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import { steps } from "./constants";
import { SelectedAddOnsType, UserInfo } from "./interfaces";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Navbar from "./components/Navbar";

const App = () => {
  const [currentStep, setCurrentStep] = useState<string>(steps[0]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isYearlyPlan, setIsYearlyPlan] = useState<boolean>(false);
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOnsType>({
    "Online Service": false,
    "Larger Storage": false,
    "Customizable Profile": false,
  });

  const windowDimensions = useWindowDimensions();

  return (
    <>
      {windowDimensions.width > 600 ? (
        <div className="flex justify-center items-center md:h-screen">
          <div className="bg-background rounded-md p-2 flex w-1/2 gap-4 h-2/3">
            <Sidebar currentStep={currentStep} />
            {currentStep === steps[0] ? (
              <PersonalInfo
                setCurrentStep={setCurrentStep}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ) : currentStep === steps[1] ? (
              <SelectPlan
                setCurrentStep={setCurrentStep}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                isYearlyPlan={isYearlyPlan}
                setIsYearlyPlan={setIsYearlyPlan}
              />
            ) : currentStep === steps[2] ? (
              <AddOnsStep
                setCurrentStep={setCurrentStep}
                isYearlyPlan={isYearlyPlan}
                selectedAddOns={selectedAddOns}
                setSelectedAddOns={setSelectedAddOns}
              />
            ) : currentStep === steps[3] ? (
              <Summary
                setCurrentStep={setCurrentStep}
                selectedPlan={selectedPlan}
                isYearlyPlan={isYearlyPlan}
                selectedAddOns={selectedAddOns}
              />
            ) : (
              <ThankYou />
            )}
          </div>
        </div>
      ) : (
        <div className="relative h-screen">
          <Navbar currentStep={currentStep} />
          <div className="absolute w-full h-[86%] flex-1 bottom-0">
            {currentStep === steps[0] ? (
              <PersonalInfo
                setCurrentStep={setCurrentStep}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            ) : currentStep === steps[1] ? (
              <SelectPlan
                setCurrentStep={setCurrentStep}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                isYearlyPlan={isYearlyPlan}
                setIsYearlyPlan={setIsYearlyPlan}
              />
            ) : currentStep === steps[2] ? (
              <AddOnsStep
                setCurrentStep={setCurrentStep}
                isYearlyPlan={isYearlyPlan}
                selectedAddOns={selectedAddOns}
                setSelectedAddOns={setSelectedAddOns}
              />
            ) : currentStep === steps[3] ? (
              <Summary
                setCurrentStep={setCurrentStep}
                selectedPlan={selectedPlan}
                isYearlyPlan={isYearlyPlan}
                selectedAddOns={selectedAddOns}
              />
            ) : (
              <ThankYou />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
