// src/components/Step3.tsx
import { useState } from 'preact/hooks';
import CustomTextarea from '@components/ui/form/CustomTextarea';
import CustomSelect from '../form/CustomSelect';
import type { FreeDesignFormData as FormData } from '@components/ui/multistepform/Types';
import Footer from '@components/ui/multistepform/Footer';
import FileDropzone from '@components/ui/fileDropzone/FileDropzone';

interface Step3Props {
  formData: FormData;
  setFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

interface Errors {
  projectDetails?: string;
}

const Step3 = ({ formData, setFormData, nextStep, prevStep }: Step3Props) => {
  const [errors, setErrors] = useState<Errors>({});

  const validateField = (name: string, value: string) => {
    let tempErrors = {};
    if (name === 'projectDetails' && !value) {
      tempErrors = {
        projectDetails: 'Añade algunos detalles sobre el proyecto'
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
    if (!formData.projectDetails) tempErrors.projectDetails = 'Añade algunos detalles sobre el proyecto';
    setErrors(tempErrors);
    return tempErrors; // Return the errors object
  };

  const handleNext = () => {
    const errors = validate(); // Get the errors object from the validate function
    if (Object.keys(errors).length === 0) { // Check if there are any errors
      nextStep();
    }
  };

  const onFilesChange = (materials: File[]) => {
    setFormData({ ...formData, materials });
  }

  return (
    <div class="flex flex-col max-h-[500px]">
      <h2 class="text-2xl mb-4 text-secondary">Paso 3: Información para el diseño</h2>
      <div class="overflow-auto pr-3 flex-1">
        <CustomTextarea
          name="projectDetails"
          value={formData.projectDetails || ''}
          onChange={handleChange}
          placeholder="¿Añade algunos detalles sobre tu proyecto, ¿qué colores te gustaría? ¿qué funcionalidades necesitas?"
          className="w-full p-2 mb-4 rounded-2xl"
          error={errors.projectDetails}
        />
        <FileDropzone
          onFilesChange={onFilesChange}
          maxFiles={10}
          acceptedFileTypes={['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf']}
          initialFiles={formData.materials}
          errorMessages={{
            validFiles: "Sólo puedes subir imágenes (jpg, png, svg) y PDFs",
            maxFiles: "No puedes subir más de 10 archivos",
          }}
          placeholder="Sube tus archivos de referencia (imágenes, PDFs)"
        />
      </div>
      <Footer handleNext={handleNext} handlePrev={prevStep} />
    </div>
  );
};

export default Step3;