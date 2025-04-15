// src/components/CustomTextarea.tsx

import type { ChangeEvent } from "react";

interface CustomTextareaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const CustomTextarea = ({ error, name, value, onChange, placeholder = 'Inserta algo de contenido aquí' }: CustomTextareaProps) => (
  <div className="mb-4">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary focus:border-secondary hover:bg-white/5 focus:bg-white/5 outline-none"
    />
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

export default CustomTextarea;