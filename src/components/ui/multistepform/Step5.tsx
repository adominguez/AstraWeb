// src/components/Step4.tsx
import type { FormData } from '@components/ui/multistepform/Types';

interface Step4Props {
  formData: FormData;
  submitForm: () => void;
  prevStep: () => void;
}

const Step5 = ({ formData, prevStep, submitForm } : Step4Props) => {
  return (
    <div className="flex flex-col max-h-[500px]">
      <h2 className="text-2xl text-secondary">Paso 5: Envío de formulario</h2>
      <div className="relative wrapper-text px-4 overflow-auto flex-1">
        <p className="text-slate-400 text-base text-pretty mb-4">Muchas gracias por ponerte en contacto con nosotros. Hemos recibido el formulario correctamente, te hemos enviado un correo con los datos que nos has enviado.</p>
        <p className="text-slate-400 text-base text-pretty">Vamos a revisar y estudiar los datos que nos has enviado. Pronto nos pondremos en contacto contigo. Puedes cerrar este diálogo</p>
      </div>
    </div>
  );
};

export default Step5;