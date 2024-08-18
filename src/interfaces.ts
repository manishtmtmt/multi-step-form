export interface UserInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface Plans {
  icon: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  discount: number;
}

export interface AddOns {
  name: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export interface SelectedAddOnsType {
  [addOn: string]: boolean | "indeterminate";
}
