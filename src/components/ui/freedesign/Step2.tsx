// src/components/Step2.tsx
import { useState } from 'preact/hooks';
import CustomInput from '@components/ui/form/CustomInput';
import CustomTextarea from '@components/ui/form/CustomTextarea';
import CustomSelect from '../form/CustomSelect';
import type { Step2Props as Step } from '@components/ui/multistepform/Types';
import Footer from '@components/ui/multistepform/Footer';

interface Step2Props {
  formData: Step;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

interface Errors {
  project?: string;
  web?: string;
  projectType?: string;
}

const Step2 = ({ formData, setFormData, nextStep, prevStep } : Step2Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name: string, value: string) => {
    let tempErrors = { ...errors };
    if (name === 'project' && !value) {
      tempErrors.project = 'El nombre del proyecto es requerido';
    } else if (name === 'project') {
      delete tempErrors.project;
    }
    if (name === 'projectType' && !value) {
      tempErrors.projectType = 'Tipo de Proyecto es requerido';
    } else if (name === 'projectType') {
      delete tempErrors.projectType;
    }
    setErrors(tempErrors);
  };

  const validate = () => {
    let tempErrors = {} as Errors;
    if (!formData.project) tempErrors.project = 'El nombre del proyecto es requerido';
    if (!formData.projectType) tempErrors.projectType = 'Tipo de Proyecto es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col max-h-[500px]">
      <h2 className="text-2xl mb-4 text-secondary">Paso 2: Detalles del Proyecto</h2>
      <div className="overflow-auto pr-3 flex-1">
        <CustomInput
          type="text"
          name="project"
          value={formData.project}
          onChange={handleChange}
          placeholder="Nombre de tu proyecto"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.project}
        />
        <CustomInput
          type="text"
          name="web"
          value={formData.web || ''}
          onChange={handleChange}
          placeholder="Si tienes una web actual, ponla aquí"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.web}
        />
        <CustomSelect
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          placeholder="Selecciona una opción"
          options={[
            { value: 'corporate', label: 'Página Web Corporativa' },
            { value: 'ecommerce', label: 'Tienda Online' },
            { value: 'landing', label: 'Landing Page' },
            { value: 'custom', label: 'Proyecto Personalizado' },
          ]}
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.projectType}
        />
      </div>
      <Footer handleNext={handleNext} handlePrev={prevStep} />
    </div>
  );
};

export default Step2;