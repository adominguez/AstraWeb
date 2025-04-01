export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  project: string;
  web?: string;
  projectType: string;
  projectGoal?: string;
  budget: string;
  projectDetails?: string;
  privacyPolicy: boolean;
}

export interface FormDataCalculator {
  fullName: string;
  email: string;
  phone: string;
  siteType: string;
  auditSEO: boolean;
  landingDesign?: string;
  corporativeDesign?: string;
  ecommerceDesign?: string;
  customDesign?: string;
  privacyPolicy: boolean;
}