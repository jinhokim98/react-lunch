import {IMAGE_SRC} from '../../constants/imageSrc';
import {MODAL_NAME} from '../../constants/modal';
import {useModalStore} from '../../store/modal';
import styles from './style.module.css';

export const GNB = () => {
  const {openModal} = useModalStore();

  const onClick = () => {
    openModal(MODAL_NAME.add);
  };

  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnbTitle} text-title`}>점심 뭐 먹지</h1>
      <button type="button" className={styles.gnbButton} aria-label="음식점 추가" onClick={onClick}>
        <img className={styles.gnbButtonImg} src={IMAGE_SRC.addButton} alt="음식점 추가" />
      </button>
    </header>
  );
};
