// src/components/CustomRadioImage.tsx

interface CustomRadioImageOption {
  value: string;
  label: string;
  imageUrl: string;
}

interface CustomRadioImageProps {
  name: string;
  options: CustomRadioImageOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

const CustomRadioImage = ({
  name,
  options,
  selectedValue,
  onChange,
  error,
  className
}: CustomRadioImageProps) => {
  return (
    <div className={`my-2 mx-2 ${className || ''}`}>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => {
          const isSelected = opt.value === selectedValue;
          return (
            <button
              key={opt.value}
              className={`
                cursor-pointer 
                px-4 py-2 
                bg-transparent 
                border 
                ${isSelected ? 'ring-4 ring-secondary border-transparent' : 'border-white border'} 
                rounded-2xl 
                text-white 
                hover:border-secondary 
                outline-secondary 
                flex flex-col items-center flex-1
                min-w-32
              `}
              onClick={() => onChange(opt.value)}
            >
              <img
                src={opt.imageUrl}
                alt={opt.label}
                className="w-24 h-24 object-cover rounded-xl"
              />
              <p className="mt-2 text-sm text-center">{opt.label}</p>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-red-500 text-sm pt-2 px-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomRadioImage;
