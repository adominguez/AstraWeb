// src/components/CustomButton.tsx
import { mergeClasses } from "@lib/utils";

interface CustomButtonProps {
  handleClick: () => void;
  text: string;
  className?: string;
}

const defaultClasses = "rounded-full border border-secondary hover:border-primary text-center px-4 py-2 transition-all";

const CustomButton = ({ handleClick, text, className = '' } : CustomButtonProps) => (
  <button onClick={handleClick} className={mergeClasses(defaultClasses, className)}>{text}</button>
);

export default CustomButton;