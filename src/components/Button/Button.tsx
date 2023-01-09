import styles from './Button.module.scss';

interface ButtonProps { }

export const Button = ({ }: ButtonProps) => (
  <div className={styles.Button} data-testid="Button">
    Button Component
  </div>
);
