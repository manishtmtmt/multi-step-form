import ThankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="py-4 md:px-8 md:w-2/3 bg-background w-11/12 m-auto md:relateve rounded-md h-96 flex flex-col justify-center items-center gap-2">
      <img src={ThankYouIcon} alt="thank-you-icon" className="w-20" />
      <h1 className="font-extrabold text-2xl text-marine-blue">Thank You!</h1>
      <p className="text-cool-gray text-sm text-center px-6">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
