import {Button} from '../Button';
import styles from './style.module.css';

type ModalProps = React.PropsWithChildren & {
  name: string;
  title: string;
  isOpen: boolean;
  closeModal: (name: string) => void;
};

export const Modal = ({children, name, isOpen, title, closeModal}: ModalProps) => {
  return (
    <div className={`${styles.modal} ${isOpen && styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
        {children}
        <Button variants="primary" onClick={() => closeModal(name)}>
          닫기
        </Button>
      </div>
    </div>
  );
};
