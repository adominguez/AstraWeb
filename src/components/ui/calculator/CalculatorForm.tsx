// src/components/MultiStepForm.tsx
import { useState, useEffect } from 'preact/hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import type { FormDataCalculator } from '@components/ui/multistepform/Types';
import { PRICE_CALCULATOR } from '@data/calculator';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState<FormDataCalculator>({
    siteType: '',
    auditSEO: false,
    landingDesign: 'basic',
    corporativeDesign: 'profesional',
    ecommerceDesign: 'profesional',
    customDesign: 'profesional',
    fullName: '',
    email: '',
    phone: '',
    privacyPolicy: false,
  });

  const calculateHour = (hours: number) => hours * 30;

  const calculatePrice = () => {
    const { siteType } = formData;
    const site = PRICE_CALCULATOR[siteType as keyof typeof PRICE_CALCULATOR];
    const siteTypePrice = site?.basePrice ?? 0;
    let landingDesignHours = PRICE_CALCULATOR.landing.types.options.find(item => item.value === formData.landingDesign ?? item.hours === 0)?.hours || 0;
    let corporativeDesignHours = PRICE_CALCULATOR.corporative.types.options.find(item => item.value === formData.corporativeDesign)?.hours || 0;
    let ecommerceDesignHours = PRICE_CALCULATOR.corporative.types.options.find(item => item.value === formData.ecommerceDesign)?.hours || 0;
    let customDesignHours = PRICE_CALCULATOR.corporative.types.options.find(item => item.value === formData.customDesign)?.hours
    let auditSEOPrice = 0;
    let typesPrice = 0
    if (site) {
      auditSEOPrice = formData.auditSEO ? calculateHour(site.auditSEO.hours) : 0;
      let landingDesignPrice = formData.landingDesign ? calculateHour(landingDesignHours) : 0
      let corporativeDesignPrice = formData.corporativeDesign ? calculateHour(corporativeDesignHours) : 0
      let ecommerceDesignPrice = formData.ecommerceDesign ? calculateHour(ecommerceDesignHours) : 0
      let customDesignPrice = formData.customDesign ? calculateHour(customDesignHours) : 0
      switch (siteType) {
        case 'landing':
          typesPrice = landingDesignPrice;
          break;
        case 'corporative':
          typesPrice = corporativeDesignPrice;
          break;
        case 'ecommerce':
          typesPrice = ecommerceDesignPrice;
          break;
        case 'custom':
          typesPrice = customDesignPrice;
          break;
      }
    }
    setPrice(siteTypePrice + auditSEOPrice + typesPrice);
  }

  useEffect(() => {
    const savedData = localStorage.getItem('formDataCalculator');
    const savedStep = localStorage.getItem('currentStepCalculator');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    if (savedStep) {
      setStep(parseInt(savedStep, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formDataCalculator', JSON.stringify(formData));
    calculatePrice();
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('currentStepCalculator', step.toString());
    if (step === 5) {
      localStorage.removeItem('formDataCalculator');
      localStorage.removeItem('currentStepCalculator');
    }
  }, [step]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = async () => {
    setLoading(true);
    // Crear un nuevo FormData con los datos de formData
    const body = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof typeof formData] || ''; // Provide a default value of an empty string if formData[key] is undefined
      const valueString = typeof value === 'boolean' ? value.toString() : value; // Convert boolean value to string
      body.append(key, valueString);
    });
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
        siteType: '',
        auditSEO: false,
        landingDesign: '',
        corporativeDesign: '',
        ecommerceDesign: '',
        customDesign: '',
        privacyPolicy: false,
      });
    } else {
      setError('Ha habido un error al enviar el formulario, por favor inténtalo de nuevo');
    }
    setLoading(false);
  };

  const showStep = () => {
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
  }

  return <><span class="text-primary">{price} €</span>
  {showStep()}
  </>
};

export default MultiStepForm;