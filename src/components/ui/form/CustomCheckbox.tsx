// src/components/CustomCheckbox.tsx

import { h } from 'preact';
import { useState } from 'preact/hooks';

interface CustomCheckboxProps {
  /**
   * Define si queremos un checkbox ('checkbox') o un radio ('radio').
   * Para que sea redondo, usa 'radio'.
   */
  type?: 'checkbox' | 'radio';
  name: string;
  label?: string;
  checked: boolean;
  onChange: (e: Event) => void;
  value?: string;
  error?: string;
  className?: string;
}

/**
 * CustomCheckbox - Componente reutilizable para mostrar un input 
 * tipo checkbox o radio con estilo.
 *
 * Si `type = 'radio'`, se mostrará con estilo circular,
 * si `type = 'checkbox'`, se mostrará con estilo cuadrado por defecto.
 */
const CustomCheckbox = ({
  type = 'checkbox',
  name,
  label,
  checked,
  onChange,
  value,
  error,
  className
}: CustomCheckboxProps) => {
  // Genera un id único para asociar el label con el input
  const inputId = `${name}-${value || 'value'}`;

  return (
    <div class={`mb-4 ${className || ''}`}>
      <label
        for={inputId}
        class="inline-flex items-center cursor-pointer gap-2"
      >
        {/* Input base: checkbox o radio */}
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          class={`
            appearance-none
            h-5 w-5
            border border-white
            bg-transparent
            outline-secondary
            hover:border-secondary
            checked:border-secondary
            checked:bg-secondary
            ${
              type === 'radio'
                ? 'rounded-full' // redondo para radio
                : 'rounded'     // cuadrado para checkbox
            }
          `}
        />
        {label && (
          <span class="text-white">
            {label}
          </span>
        )}
      </label>

      {/* Mensaje de error, si aplica */}
      {error && (
        <p class="text-red-500 text-sm pt-2 px-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomCheckbox;
