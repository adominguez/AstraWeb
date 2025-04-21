// src/components/Step4.tsx
import { useState } from 'preact/hooks';
import Footer from '@components/ui/multistepform/Footer';
import type { FreeDesignFormData } from '@components/ui/multistepform/Types';
import FileList from '@components/ui/fileDropzone/FileList';
import CustomCheckbox from '@components/ui/form/CustomCheckbox';

interface Step4Props {
  formData: FreeDesignFormData;
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
    <div className="flex flex-col max-h-[500px]">
      <h3 className="text-2xl text-secondary">Paso 4: Revisa todos los datos.</h3>
      <p className="text-slate-400 text-base text-pretty">Si algo hay algún dato mal puedes volver atrás y modificarlo.</p>
      <div className="relative wrapper-text px-4 overflow-auto flex-1">
        {
          error ? <>
            <p className="text-red-400 text-base text-pretty">{error}</p>
            <p className="text-red-400 text-base text-pretty mb-4">Si el error persiste, por favor contacta con nosotros en <a href="mailto:info@astrahub.dev">info@astrahub.dev</a>.</p>
          </> : null
        }
        {
          loading ? (
            <p className="text-slate-400 text-base text-pretty mb-4">Enviando formulario...</p>
          ) : (
            <>
              <h3 className="text-xl mb-2 text-primary">Información personal</h3>
              <p><strong className="text-accent">Nombre Completo:</strong> {formData.fullName}</p>
              <p><strong className="text-accent">Correo Electrónico:</strong> {formData.email}</p>
              <p><strong className="text-accent">Teléfono:</strong> {formData.phone}</p>
              <h3 className="text-xl mt-4 mb-2 text-primary">Detalles del proyecto</h3>
              <p><strong className="text-accent">Nombre del proyecto:</strong> {formData.project}</p>
              <p><strong className="text-accent">Web:</strong> {formData.web}</p>
              <p><strong className="text-accent">Tipo de Proyecto:</strong> {formData.projectType}</p>
              <h3 className="text-xl mt-4 mb-2 text-primary">Presupuesto y detalles</h3>
              <p><strong className="text-accent">Detalles del Proyecto:</strong> {formData.projectDetails}</p>
              <p className="mb-2"><strong className="text-accent">Materiales para el diseño:</strong></p>
              {
                formData.materials ? (
                  <FileList files={formData.materials || []} hideRemoveButton />
                ) : <span>No hay materiales seleccionados</span>
              }
              
            </>
          )
        }
      </div>
      <div className="flex flex-col gap-2 my-2">
        <a href="/politica-de-privacidad" target="_blank" className="text-primary underline">Leer política de privacidad</a>
        <CustomCheckbox
          className='mb-2'
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleChange}
          label={errors.privacyPolicy ? '<span class="text-red-400">Debes aceptar la política de privacidad</span>' : '<span>Acepto la política de privacidad</span>'}
        />
        
      </div>
      <Footer handleNext={sendForm} handlePrev={prevStep} nextText='Enviar' nextDisabled={loading} />
    </div>
  );
};

export default Step4;