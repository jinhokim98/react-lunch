import {useModalStore} from '../../store/modal';
import {Button} from '../Button';
import styles from './style.module.css';

type ModalProps = React.PropsWithChildren & {
  name: string;
  title: string;
  onClose?: () => void;
};

export const Modal = ({children, name, title, onClose}: ModalProps) => {
  const {modals, closeModal} = useModalStore();

  const isOpen = modals[name];
  const handleClose = () => {
    if (onClose) onClose();
    closeModal(name);
  };

  return (
    <div className={`${styles.modal} ${isOpen && styles.modalOpen}`}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
        {children}
        <Button variants="primary" onClick={handleClose}>
          닫기
        </Button>
      </div>
    </div>
  );
};
