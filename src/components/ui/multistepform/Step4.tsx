// src/components/Step4.tsx
import { useState } from 'preact/hooks';
import Footer from '@components/ui/multistepform/Footer';
import type { FormData } from '@components/ui/multistepform/Types';

interface Step4Props {
  formData: FormData;
  submitForm: () => void;
  prevStep: () => void;
  loading?: boolean;
  error?: string;
  setFormData: (data: any) => void;
}

interface Errors {
  privacyPolicy?: string;
}

const Step4 = ({ formData, prevStep, submitForm, setFormData, loading = false, error = '' } : Step4Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const validate = () => {
    let tempErrors = {} as Errors;
    if (!formData.privacyPolicy) {
      tempErrors.privacyPolicy = 'Debes aceptar la política de privacidad'
      setErrors(tempErrors);
    };
    return tempErrors; // Return the errors object
  }

  const sendForm = () => {
    const validated = validate(); // Get the errors object from the validate function
    if (Object.keys(validated).length === 0) { // Check if there are any errors
      submitForm();
    }
  }

  return (
    <div class="flex flex-col max-h-[400px]">
      <h2 class="text-2xl text-secondary">Paso 4: Confirmación</h2>
      <div class="relative wrapper-text px-4 overflow-auto flex-1">
        {
          error ? <p class="text-red-400 text-base text-pretty mb-4">{error}</p> : null
        }
        {
          loading ? (
            <p class="text-slate-400 text-base text-pretty mb-4">Enviando formulario...</p>
          ) : (
            <>
              <h3 class="text-xl mb-2 text-primary">Información personal</h3>
              <p><strong>Nombre Completo:</strong> {formData.fullName}</p>
              <p><strong>Correo Electrónico:</strong> {formData.email}</p>
              <p><strong>Teléfono:</strong> {formData.phone}</p>
              <h3 class="text-xl mt-4 mb-2 text-primary">Detalles del proyecto</h3>
              <p><strong>Nombre del proyecto:</strong> {formData.project}</p>
              <p><strong>Web:</strong> {formData.web}</p>
              <p><strong>Tipo de Proyecto:</strong> {formData.projectType}</p>
              <p><strong>Objetivo del Proyecto:</strong> {formData.projectGoal}</p>
              <h3 class="text-xl mt-4 mb-2 text-primary">Presupuesto y detalles</h3>
              <p><strong>Presupuesto:</strong> {formData.budget}</p>
              <p><strong>Detalles del Proyecto:</strong> {formData.projectDetails}</p>
            </>
          )
        }
      </div>
      <div class="flex gap-2 my-2">
        {!formData.privacyPolicy ?
          <span class={errors.privacyPolicy ? 'text-red-400' : '' }>Debes aceptar la <a href="/politica-de-privacidad" target="_blank">política de privacidad</a></span> :
          <span>Aceptas la <a target="_blank" href="/politica-de-privacidad">política de privacidad</a></span>} <input type="checkbox" checked={formData.privacyPolicy} onChange={handleChange} id="privacyPolicy" name="privacyPolicy" required />
      </div>
      <Footer handleNext={sendForm} handlePrev={prevStep} nextText='Enviar' />
    </div>
  );
};

export default Step4;