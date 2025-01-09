import {Button} from '../Button';
import {Modal} from '../Modal';
import {Select} from '../Select';
import styles from './style.module.css';

export const AddRestaurantModal = () => {
  return (
    <Modal name="add" title="새로운 음식점">
      <form>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <Select name="category" id="category" required value="" onChange={() => {}}>
            <option value="">선택해 주세요</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </Select>
        </div>

        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="name text-caption">이름</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="description text-caption">설명</label>
          <textarea name="description" id="description" cols={30} rows={5}></textarea>
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>

        <Button variants="primary" />
      </form>
    </Modal>
  );
};
