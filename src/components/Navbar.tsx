import { steps } from "@/constants";

interface NavbarProps {
  currentStep: string;
}

const Navbar = ({ currentStep }: NavbarProps) => {
  return (
    <div className="w-full h-40 bg-sidebar-mobile bg-cover bg-center flex justify-center gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`mt-8 rounded-full border border-background w-8 h-8 flex justify-center items-center ${
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
      ))}
    </div>
  );
};

export default Navbar;
