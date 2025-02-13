// src/components/CustomTextarea.tsx

interface CustomTextareaProps {
  name: string;
  value: string;
  onChange: (e: Event) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

const CustomTextarea = ({ error, name, value, onChange, placeholder = 'Inserta algo de contenido aquí', className }: CustomTextareaProps) => (
  <div class="mb-4">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      class="w-full px-4 py-2 bg-transparent border border-white rounded-3xl text-white hover:border-secondary outline-secondary"
    />
    {error && <p class="text-red-500 text-sm mt-2">{error}</p>}
  </div>
);

export default CustomTextarea;