// src/components/Step4.tsx
import Footer from '@components/ui/multistepform/Footer';
import type { FormData } from '@components/ui/multistepform/Types';

interface Step4Props {
  formData: FormData;
  submitForm: () => void;
  prevStep: () => void;
}

const Step4 = ({ formData, prevStep, submitForm } : Step4Props) => {
  return (
    <div class="flex flex-col max-h-96">
      <h2 class="text-2xl text-secondary">Paso 4: Confirmación</h2>
      <div class="wrapper-text p-4 overflow-auto flex-1">
        <h3 class="text-xl mt-2 mb-2 text-primary">Información personal</h3>
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
      </div>
      <Footer handleNext={submitForm} handlePrev={prevStep} nextText='Enviar' />
    </div>
  );
};

export default Step4;