import styles from './style.module.css';

type ButtonVariants = 'primary' | 'secondary';

type ButtonProps = React.ComponentProps<'button'> & {
  variants: ButtonVariants;
};

const BUTTON_STYLE: Record<ButtonVariants, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
};

export const Button = ({children, variants, ...buttonProps}: ButtonProps) => {
  return (
    <button className={`${styles.button} ${BUTTON_STYLE[variants]} text-caption`} {...buttonProps}>
      {children}
    </button>
  );
};
