// src/components/Step1.tsx
import { useState } from 'preact/hooks';
import CustomRadioImage from '@components/ui/form/CustomRadioImage';
import type { FormDataCalculator as FormData } from '@components/ui/multistepform/Types';
import Footer from '@components/ui/multistepform/Footer';
import { PRICE_CALCULATOR, auditSEO } from '@data/calculator';
import CustomSwitch from '@components/ui/form/CustomSwitch';

interface Step1Props {
  formData: FormData;
  setFormData: (data: any) => void;
  nextStep: () => void;
}

interface Errors {
  siteType?: string;
  auditSEO?: string;
}

const Step1 = ({ formData, setFormData, nextStep }: Step1Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const changeType = (siteType: string) => {
    setFormData({ ...formData, siteType });
  };

  const changeAudit = (auditSEO: Boolean) => {
    setFormData({ ...formData, auditSEO });
  };

  const validate = () => {
    let tempErrors = {} as any;
    if (!formData.siteType) tempErrors.fullName = 'Tipo de Sitio es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  console.log(formData.auditSEO);

  return (
    <div class="flex flex-col max-h-[400px] md:h-4/5 ">
      <h2 class="text-2xl text-secondary">Paso 1: Selecciona el tipo de proyecto</h2>
      <div class="overflow-auto flex-1 relative wrapper-text">
        <CustomRadioImage
          name="siteType"
          options={Object.values(PRICE_CALCULATOR).map(({value, label, imageUrl}) => ({
            value,
            label,
            imageUrl,
          }))}
          selectedValue={formData.siteType}
          onChange={changeType}
          error={errors.siteType}
        />
        <CustomSwitch
          className='my-4 mx-2'
          disabled={formData.siteType === ''}
          name={auditSEO.name}
          label={auditSEO.label}
          checked={formData.auditSEO}
          onChange={(value) => changeAudit(value)}
        />
      </div>
      <Footer hidePrev handleNext={handleNext} />
    </div>
  );
};

export default Step1;