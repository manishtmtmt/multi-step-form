import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { UserInfo } from "@/interfaces";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface PersonalInfoProps {
  setCurrentStep: (step: string) => void;
  userInfo: UserInfo;
  setUserInfo: (UserInfo: UserInfo) => void;
}

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(8).max(15),
});

const PersonalInfo = ({
  setCurrentStep,
  userInfo,
  setUserInfo,
}: PersonalInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userInfo.name,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setUserInfo(values);
    setCurrentStep("Select Plan");
  }

  return (
    <div className="py-8 md:py-4 px-4 md:px-8 md:w-2/3 h-fit md:h-full bg-background w-11/12 m-auto rounded-md flex flex-col">
      <h1 className="text-2xl text-marine-blue font-bold">Personal Info</h1>
      <p className="text-sm text-cool-gray">
        Please provide your name, email address and phone number.
      </p>
      <Form {...form}>
        <form
          className="mt-4 flex flex-col gap-3 flex-1"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field, formState }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-sm font-bold text-marine-blue leading-none">
                    Name
                  </FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. Stephen King"
                    {...field}
                    className={`${
                      formState.errors?.name
                        ? "border border-strawberry-red"
                        : ""
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-sm font-bold text-marine-blue">
                    Email Address
                  </FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. stephenking@lorem.com"
                    {...field}
                    className={`${
                      formState.errors?.email
                        ? "border border-strawberry-red"
                        : ""
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field, formState }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="text-sm font-bold text-marine-blue">
                    Phone Number
                  </FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                    {...field}
                    className={`${
                      formState.errors?.phoneNumber
                        ? "border border-strawberry-red"
                        : ""
                    }`}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="mt-auto flex justify-end md:relative absolute bottom-0 left-0 w-full bg-background p-4 md:p-0">
            <Button
              className="bg-marine-blue hover:bg-purplish-blue"
              type="submit"
            >
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PersonalInfo;
