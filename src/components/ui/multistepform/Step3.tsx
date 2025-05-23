// src/components/Step3.tsx
import { useState } from 'preact/hooks';
import CustomTextarea from '@components/ui/form/CustomTextarea';
import CustomSelect from '../form/CustomSelect';
import type { FormData } from '@components/ui/multistepform/Types';
import Footer from '@components/ui/multistepform/Footer';

interface Step3Props {
  formData: FormData;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

interface Errors {
  budget?: string;
}

const Step3 = ({ formData, setFormData, nextStep, prevStep }: Step3Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const validateField = (name: string, value: string) => {
    let tempErrors = {};
    if (name === 'budget' && !value) {
      tempErrors = {
        budget: 'selecciona tu presupuesto'
      }
    };
    setErrors(tempErrors);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validate = () => {
    let tempErrors = {} as Errors;
    if (!formData.budget) tempErrors.budget = 'selecciona tu presupuesto';
    setErrors(tempErrors);
    return tempErrors; // Return the errors object
  };

  const handleNext = () => {
    const errors = validate(); // Get the errors object from the validate function
    if (Object.keys(errors).length === 0) { // Check if there are any errors
      nextStep();
    }
  };

  return (
    <div className="flex flex-col max-h-[500px]">
      <h2 className="text-2xl mb-4 text-secondary">Paso 3: Presupuesto</h2>
      <div className="overflow-auto pr-3 flex-1">
        <CustomSelect
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Selecciona tu rango de presupuesto"
          options={[
            { value: '500-1000', label: '500€ - 1.000€' },
            { value: '1000-3000', label: '1000€ - 3.000€' },
            { value: '3000-5000', label: '3.000€ - 5.000€' },
            { value: '5000+', label: 'Más de 5.000€' },
          ]}
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.budget}
        />
        <CustomTextarea
          name="projectDetails"
          value={formData.projectDetails || ''}
          onChange={handleChange}
          placeholder="¿Quieres añadir algún detalle más sobre tu proyecto?"
          className="w-full p-2 mb-4 rounded-2xl"
        />
      </div>
      <Footer handleNext={handleNext} handlePrev={prevStep} />
    </div>
  );
};

export default Step3;