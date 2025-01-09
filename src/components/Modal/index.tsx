import {Button} from '../Button';
import styles from './style.module.css';

type ModalProps = React.PropsWithChildren & {
  title: string;
  isOpen: boolean;
};

export const Modal = ({children, isOpen, title}: ModalProps) => {
  return (
    <div className={`${styles.modal} ${isOpen && styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
        {children}
        <Button variants="primary">닫기</Button>
      </div>
    </div>
  );
};
