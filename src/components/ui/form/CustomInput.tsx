// src/components/CustomInput.tsx

import type { ChangeEvent } from "react";

interface CustomInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const CustomInput = ({ type = "text", name, value, onChange, placeholder = 'rellena el campo', error, className } : CustomInputProps) => (
  <div className="mb-4">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary focus:border-secondary hover:bg-white/5 focus:bg-white/5 outline-none"
    />
    {error && <p className="text-red-500 text-sm pt-2 px-4">{error}</p>}
  </div>
);

export default CustomInput;