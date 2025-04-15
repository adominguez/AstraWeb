export interface Step1Props {
  fullName: string;
  email: string;
  phone: string;
}

export interface Step1PropsWithSocial extends Step1Props {
  socialUser?: string;
}

export interface Step2Props {
  project: string;
  web?: string;
  projectType: string;
}

export interface Privacy {
  privacyPolicy: boolean;
}

export interface FreeDesignFormData extends Step1PropsWithSocial, Step2Props, Privacy {
  projectDetails: string;
  materials?: File[];
}

export interface FormData extends Step1Props, Step2Props, Privacy {
  projectGoal?: string;
  budget: string;
  projectDetails?: string;
}
