// src/components/Step1.tsx
import { useState } from 'preact/hooks';
import CustomInput from '@components/ui/form/CustomInput';
import type { FormData } from '@components/ui/multistepform/Types';
import Footer from '@components/ui/multistepform/Footer';

interface Step1Props {
  formData: FormData;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const Step1 = ({ formData, setFormData, nextStep }: Step1Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {} as any;
    if (!formData.fullName) tempErrors.fullName = 'Nombre Completo es requerido';
    if (!formData.email) tempErrors.email = 'Correo Electrónico es requerido';
    if (!formData.phone) tempErrors.phone = 'Teléfono es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div class="flex flex-col max-h-96">
      <h2 class="text-2xl mb-4 text-secondary">Paso 1: Información Personal</h2>
      <div class="overflow-auto pr-3 flex-1">
        <CustomInput
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre Completo"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.fullName}
        />
        <CustomInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo Electrónico"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.email}
        />
        <CustomInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.phone}
        />
      </div>
      <Footer hidePrev handleNext={handleNext} />
    </div>
  );
};

export default Step1;