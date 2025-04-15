// @ts-nocheck
// src/components/CustomSelect.tsx

import type { ChangeEvent } from "react";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

const CustomSelect = ({ options, name, value, onChange, placeholder = 'Selecciona una opción', error = '' } : CustomSelectProps) => {
  return (
  <div className="mb-4">
    <select
      name={name}
      className="custom-select w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary focus:border-secondary hover:bg-white/5 focus:bg-white/5 outline-none appearance-none"
      placeholder={placeholder}
      value={value ? value : ''}
      onChange={onChange}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <div className="text-red-500">{error}</div>}
  </div>
)};

export default CustomSelect;