import AdvancedIcon from "./assets/images/icon-advanced.svg";
import ArcadeIcon from "./assets/images/icon-arcade.svg";
import ProIcon from "./assets/images/icon-pro.svg";
import { AddOns, Plans } from "./interfaces";

export const steps: string[] = ["Your Info", "Select Plan", "Add-ons", "Summary"];

export const plans: Plans[] = [
  {
    icon: ArcadeIcon,
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    discount: 2,
  },
  {
    icon: AdvancedIcon,
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    discount: 2,
  },
  {
    icon: ProIcon,
    name: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    discount: 2,
  },
];

export const addOns: AddOns[] = [
  {
    name: "Online Service",
    desc: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: "Larger Storage",
    desc: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: "Customizable Profile",
    desc: "Custom them on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];