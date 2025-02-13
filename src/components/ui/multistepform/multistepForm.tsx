// src/components/MultiStepForm.tsx
import { useState, useEffect } from 'preact/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
  const submitForm = () => {
    console.log('Form submitted:', formData);
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