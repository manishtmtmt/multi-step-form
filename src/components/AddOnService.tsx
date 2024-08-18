import { AddOns, SelectedAddOnsType } from "@/interfaces";
import { Checkbox } from "./ui/checkbox";

interface AddOnServiceProps {
  addOn: AddOns;
  isYearlyPlan: boolean;
  selectedAddOns: SelectedAddOnsType;
  setSelectedAddOns: (selectedAddOns: SelectedAddOnsType) => void;
}

const AddOnService = ({
  addOn,
  selectedAddOns,
  setSelectedAddOns,
  isYearlyPlan,
}: AddOnServiceProps) => {
  const handleCheckedChange = (
    checked: boolean | "indeterminate",
    addOn: AddOns
  ) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [addOn.name]: checked,
    });
  };

  const isAddOnSelected = selectedAddOns[addOn.name];

  return (
    <div
      key={addOn.name}
      className={`flex justify-between items-center mt-4 rounded-md border border-cool-gray px-4 py-3 cursor-pointer hover:border-2 hover:border-pastel-blue ${
        isAddOnSelected ? "bg-Alabaster" : ""
      }`}
    >
      <div className="flex gap-4 items-center">
        <div>
          <Checkbox
            checked={isAddOnSelected}
            onCheckedChange={(checked) => handleCheckedChange(checked, addOn)}
          />
        </div>
        <div>
          <h4 className="font-bold text-marine-blue leading-none">
            {addOn.name}
          </h4>
          <p className="text-sm text-cool-gray">{addOn.desc}</p>
        </div>
      </div>
      <div className="">
        {isYearlyPlan ? (
          <span className="font-bold text-purplish-blue text-sm">
            +${addOn.price.yearly}/yr
          </span>
        ) : (
          <span className="font-bold text-purplish-blue text-sm">
            +${addOn.price.monthly}/mo
          </span>
        )}
      </div>
    </div>
  );
};

export default AddOnService;
