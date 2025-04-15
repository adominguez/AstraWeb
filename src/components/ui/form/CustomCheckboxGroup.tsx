// @ts-nocheck
// src/components/CustomCheckboxGroup.tsx
import CustomCheckbox from './CustomCheckbox';

interface CheckboxOption {
  label: string;
  value: string;
}

interface CustomCheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  selectedValues: string[];             // Lista de valores que están activados
  onChange: (newValues: string[]) => void;
  error?: string;
  className?: string;
}

const CustomCheckboxGroup = ({
  name,
  options,
  selectedValues,
  onChange,
  error,
  className
}: CustomCheckboxGroupProps) => {

  // Función para manejar el cambio en cada checkbox
  const handleCheckboxChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const clickedValue = target.value;

    // Si ya está seleccionado, lo eliminamos, sino lo añadimos
    let updatedValues: string[];
    if (selectedValues.includes(clickedValue)) {
      updatedValues = selectedValues.filter(val => val !== clickedValue);
    } else {
      updatedValues = [...selectedValues, clickedValue];
    }

    onChange(updatedValues);
  };

  return (
    <div className={`mb-4 ${className || ''}`}>
      {options.map((option) => {
        const isChecked = selectedValues.includes(option.value);
        return (
          <CustomCheckbox
            key={option.value}
            type="checkbox"
            name={name}
            label={option.label}
            value={option.value}
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mb-2"
          />
        );
      })}

      {error && (
        <p className="text-red-500 text-sm pt-2 px-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomCheckboxGroup;
