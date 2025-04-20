// src/components/Step4.tsx
import type { FreeDesignFormData } from '@components/ui/multistepform/Types';

interface Step4Props {
  formData: FreeDesignFormData;
  submitForm: () => void;
  prevStep: () => void;
}

const Step5 = ({ formData, prevStep, submitForm } : Step4Props) => {
  return (
    <div className="flex flex-col max-h-[500px]">
      <h2 className="text-2xl text-secondary">Paso 5: Envío de formulario</h2>
      <div className="relative wrapper-text px-4 overflow-auto flex-1">
        <p className="text-slate-400 text-base text-pretty mb-4">¡Gracias por compartir tu proyecto! 🌟. Hemos recibido correctamente tu formulario y nos encantará conocer más sobre tu proyecto.</p>
        <p className="text-slate-400 text-base text-pretty">Te hemos enviado un correo agradeciéndote tu candidatura. Ahí podrás encontrar también más información sobre el proceso. En los próximos días revisaremos todas las candidaturas con calma.</p>
      </div>
    </div>
  );
};

export default Step5;