// src/components/CustomSelect.tsx

interface CustomSelectProps {
  options: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (e: Event) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

const CustomSelect = ({ options, name, value, onChange, placeholder = 'Selecciona una opción', className = '', error = '' } : CustomSelectProps) => {
  return (
  <div class="mb-4">
    <select
      name={name}
      class="custom-select w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary outline-secondary appearance-none"
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
    {error && <div class="text-red-500">{error}</div>}
  </div>
)};

export default CustomSelect;