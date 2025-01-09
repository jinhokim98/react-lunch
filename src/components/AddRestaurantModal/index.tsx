import {useRef, useState} from 'react';
import {Modal} from '../Modal';
import {Select} from '../Select';
import styles from './style.module.css';
import {Restaurant} from '../../type/serviceType';
import {useRestaurantStore} from '../../store/restaurants';

export const AddRestaurantModal = () => {
  const {addRestaurant} = useRestaurantStore();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<Restaurant>({
    id: '',
    name: '',
    description: '',
    category: '',
  });

  const disabled = formData.name.trim() === '' || formData.description.trim() === '' || formData.category === '';

  const handleChange = (field: keyof Restaurant, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleModalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addRestaurant({...formData, id: Date.now().toString()});
  };

  return (
    <Modal
      name="add"
      title="새로운 음식점"
      buttonName="추가하기"
      button={{type: 'submit', disabled, onClick: handleModalSubmit}}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <Select
            name="category"
            id="category"
            required
            value={formData.category}
            onChange={value => handleChange('category', value)}
          >
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
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={event => handleChange('name', event.target.value)}
            required
          />
        </div>

        <div className={styles.formItem}>
          <label htmlFor="description text-caption">설명</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={formData.description}
            onChange={event => handleChange('description', event.target.value)}
          ></textarea>
          <span className={`${styles.helpText} text-caption`}>메뉴 등 추가 정보를 입력해 주세요.</span>
        </div>
      </form>
    </Modal>
  );
};
