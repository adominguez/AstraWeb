// src/components/CustomButton.tsx
import { mergeClasses } from "@lib/utils";

interface CustomButtonProps {
  handleClick: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

const defaultClasses = "rounded-full border border-secondary hover:border-primary text-center px-4 py-2 transition-all";

const CustomButton = ({ handleClick, text, disabled, className = '' } : CustomButtonProps) => (
  <button disabled={disabled} onClick={handleClick} className={mergeClasses(defaultClasses, className)}>{text}</button>
);

export default CustomButton;