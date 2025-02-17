// src/components/MultiStepForm.tsx
import { useState, useEffect } from 'preact/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import type { FormData as FormDataType } from '@components/ui/multistepform/Types';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    phone: '',
    project: '',
    web: '',
    projectType: '',
    projectGoal: '',
    budget: '',
    projectDetails: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    const savedStep = localStorage.getItem('currentStep');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('currentStep', step.toString());
  }, [step]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = async () => {
    console.log('Form submitted:', formData);
    // Crear un nuevo FormData con los datos de formData
    const body = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData] || ''; // Provide a default value of an empty string if formData[key] is undefined
      body.append(key, value);
    });
    // Enviar el formulario a la API
    const response = await fetch("/api/form", {
      method: "POST",
      body,
    });
    const data = await response.json();
    debugger
    // Aquí puedes manejar el envío del formulario
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4 formData={formData} submitForm={submitForm} prevStep={prevStep} />;
    default:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default MultiStepForm;