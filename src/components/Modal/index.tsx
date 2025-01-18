import {useRef} from 'react';
import {useModalStore} from '../../store/modal';
import {ModalName} from '../../type/serviceType';
import {Button} from '../Button';
import {ClickOutsideDetector} from '../ClickOutsideDetector';
import styles from './style.module.css';

type ModalButton = React.ComponentProps<'button'> & {buttonName: string};

type ModalProps = React.PropsWithChildren & {
  name: ModalName;
  title: string;
  primaryButton: ModalButton;
  secondaryButton: ModalButton;
};

export const Modal = ({children, name, title, primaryButton, secondaryButton}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const {modals, closeModal} = useModalStore();

  const isOpen = modals[name];

  const handlePrimaryClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (primaryButton.onClick) {
      primaryButton.onClick(event);
    }
    closeModal(name);
  };

  const handleSecondaryClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (secondaryButton.onClick) {
      secondaryButton.onClick(event);
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
          <div className={styles.buttonContainer}>
            <Button
              type={secondaryButton.type ?? 'button'}
              variants="secondary"
              {...secondaryButton}
              onClick={handleSecondaryClick}
            >
              {secondaryButton.buttonName}
            </Button>
            <Button
              type={primaryButton.type ?? 'submit'}
              variants="primary"
              {...primaryButton}
              onClick={handlePrimaryClick}
            >
              {primaryButton.buttonName}
            </Button>
          </div>
        </div>
      </div>
    </ClickOutsideDetector>
  );
};
