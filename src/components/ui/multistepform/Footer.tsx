// src/components/Footer.tsx
import CustomButton from "@components/ui/form/CustomButton";
import classnames from 'classnames';

interface FooterProps {
  hideNext?: boolean;
  hidePrev?: boolean;
  handlePrev?: () => void;
  handleNext?: () => void;
  prevText?: string;
  nextText?: string;
}

const Footer = ({ hideNext = false, hidePrev = false, handlePrev = () => {}, handleNext = () => {}, prevText = 'Anterior', nextText = 'Siguiente' } : FooterProps) => (
  <footer class={classnames({
    'justify-start': hideNext,
    'justify-end': hidePrev,
    'justify-between': !hideNext && !hidePrev,
    'flex py-4 border-t border-secondary/30': true,
  })}>
    {!hidePrev && <CustomButton className="border-secondary/30 hover:border-secondary" handleClick={handlePrev} text={prevText} />}
    {!hideNext && <CustomButton className="border-primary/30 hover:border-primary" handleClick={handleNext} text={nextText} />}
  </footer>
);

export default Footer;