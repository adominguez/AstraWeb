// src/components/MultiStepForm.tsx
import { useState, useEffect } from 'preact/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import type { FormData as FormDataType } from '@components/ui/multistepform/Types';

const composeFormData = (formData: FormDataType) => {
  const body = new FormData();
  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof typeof formData] || ''; // Provide a default value of an empty string if formData[key] is undefined
    const valueString = typeof value === 'boolean' ? value.toString() : value; // Convert boolean value to string
    body.append(key, valueString);
  });

  body.append('url', window.location.href);

  return body;
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
    privacyPolicy: false,
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
    if (step === 5) {
      localStorage.removeItem('formData');
      localStorage.removeItem('currentStep');
    }
  }, [step]);

  const nextStep = async () => {
    setStep(step + 1)
    if (step === 2) {
      const body = composeFormData(formData);
      // Enviar el formulario a la API
      await fetch("/api/start-lead", {
        method: "POST",
        body,
      });
    }
  };
  const prevStep = () => setStep(step - 1);
  const submitForm = async () => {
    setLoading(true);
    // Crear un nuevo FormData con los datos de formData
    const body = composeFormData(formData);
    // Enviar el formulario a la API
    const response = await fetch("/api/form", {
      method: "POST",
      body,
    });
    const data = await response.json();
    if (data.status === 200) {
      setStep(5);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        project: '',
        web: '',
        projectType: '',
        projectGoal: '',
        budget: '',
        projectDetails: '',
        privacyPolicy: false,
      });
    } else {
      setError('Ha habido un error al enviar el formulario, por favor inténtalo de nuevo');
    }
    setLoading(false);
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Step4 formData={formData} setFormData={setFormData} submitForm={submitForm} prevStep={prevStep} loading={loading} error={error} />;
    case 5:
      return <Step5 formData={formData} submitForm={submitForm} prevStep={prevStep} />;
    default:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default MultiStepForm;