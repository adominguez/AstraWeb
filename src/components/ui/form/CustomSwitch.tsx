// src/components/CustomSwitch.tsx

interface CustomSwitchProps {
  /** Indica si el switch está activado (ON) o no (OFF). */
  checked: boolean;
  /** Función que se llama al cambiar el estado del switch. */
  onChange: (newValue: boolean) => void;
  /** Nombre del input (para formularios). */
  name?: string;
  /** Texto para mostrar junto al switch. */
  label?: string;
  /** Deshabilitar la interacción. */
  disabled?: boolean;
  /** Texto de error, si aplica validación. */
  error?: string;
  /** Clases adicionales para ajustar el estilo. */
  className?: string;
}

const CustomSwitch = ({
  checked,
  onChange,
  name,
  label,
  disabled = false,
  error,
  className
}: CustomSwitchProps) => {
  // Generar un id único si fuera necesario enlazar <label> e <input>
  const switchId = name || 'custom-switch';

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={`mb-4 ${className || ''}`}>
      {/* Contenedor para agrupar el switch y el label */}
      <label
        htmlFor={switchId}
        className={`inline-flex gap-2 cursor-pointer items-start ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleToggle}
      >
        {/* Input real (checkbox) escondido con sr-only para accesibilidad */}
        <input
          id={switchId}
          type="checkbox"
          name={name}
          className="sr-only"
          checked={checked}
          disabled={disabled}
          onChange={handleToggle}
        />

        {/* Pista (track) del switch */}
        <div
          className={`
            min-w-12
            w-12 h-7 
            rounded-full 
            border border-white 
            bg-transparent 
            relative 
            transition-all 
            ${checked ? 'bg-secondary border-secondary' : 'bg-gray-500'}
          `}
        >
          {/* Círculo interno (thumb) que se mueve a la derecha o izquierda */}
          <div
            className={`
              absolute top-[1px] 
              left-0.5
              w-6 h-6 
              ${checked ? 'bg-secondary' : 'bg-white'}
              rounded-full 
              transition-all 
              ${
                checked 
                  ? 'transform translate-x-5' 
                  : 'transform translate-x-0'
              }
            `}
          />
        </div>

        {/* Texto opcional al lado del switch */}
        {label && (
          <span className="text-white">{label}</span>
        )}
      </label>

      {/* Mensaje de error, si aplica */}
      {error && (
        <p className="text-red-500 text-sm pt-2 px-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomSwitch;
