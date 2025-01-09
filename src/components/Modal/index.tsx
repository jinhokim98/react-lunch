import {useRef} from 'react';
import {useModalStore} from '../../store/modal';
import {ModalName} from '../../type/serviceType';
import {Button} from '../Button';
import {ClickOutsideDetector} from '../ClickOutsideDetector';
import styles from './style.module.css';

type ModalProps = React.PropsWithChildren & {
  name: ModalName;
  title: string;
  button?: React.ComponentProps<'button'>;
  buttonName: string;
};

export const Modal = ({children, name, title, button, buttonName}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const {modals, closeModal} = useModalStore();

  const isOpen = modals[name];

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (button && button.onClick) {
      button.onClick(event);
    }
    closeModal(name);
  };

  return (
    <ClickOutsideDetector targetRef={modalRef} onClickOutside={() => closeModal(name)}>
      <div className={`${styles.modal} ${isOpen && styles.modalOpen}`}>
        <div className={styles.modalBackdrop} />
        <div className={styles.modalContainer} ref={modalRef}>
          <h2 className={`${styles.modalTitle} text-title`}>{title}</h2>
          {children}
          <Button type={button?.type} variants="primary" {...button} onClick={handleOnClick}>
            {buttonName}
          </Button>
        </div>
      </div>
    </ClickOutsideDetector>
  );
};
