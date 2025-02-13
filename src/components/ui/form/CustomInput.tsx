// src/components/CustomInput.tsx

interface CustomInputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: Event) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const CustomInput = ({ type = "text", name, value, onChange, placeholder = 'rellena el campo', error, className } : CustomInputProps) => (
  <div class="mb-4">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      class="w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary outline-secondary"
    />
    {error && <p class="text-red-500 text-sm pt-2 px-4">{error}</p>}
  </div>
);

export default CustomInput;