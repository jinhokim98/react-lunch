import {useRef, useState} from 'react';
import {Modal} from '../Modal';
import {Select} from '../Select';
import styles from './style.module.css';
import {Category, Restaurant} from '../../type/serviceType';
import {usePostRestaurants} from '../../hooks/usePostRestaurant';
import {MODAL_NAME} from '../../constants/modal';
import {categoryList} from '../../constants/condition';
import {typeCasting} from '../../utils/validate';

type FormData = Omit<Restaurant, 'category' | 'favorite'> & {
  category: Category | null;
};

export const AddRestaurantModal = () => {
  const {postRestaurant} = usePostRestaurants();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    id: '',
    name: '',
    description: '',
    distance: 0,
    category: null,
  });

  const disabled =
    formData.name.trim() === '' ||
    formData.description.trim() === '' ||
    formData.category === null ||
    formData.distance === 0;

  const handleChange = (field: keyof Restaurant, value: string | number) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleModalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const category = typeCasting.category(formData.category ?? '');
    postRestaurant({...formData, category, favorite: false, id: Date.now().toString()});
  };

  const handleCancel = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
      distance: 0,
      category: null,
    });
  };

  return (
    <Modal
      name={MODAL_NAME.add}
      title="새로운 음식점"
      primaryButton={{buttonName: '추가하기', type: 'submit', disabled, onClick: handleModalSubmit}}
      secondaryButton={{buttonName: '취소하기', onClick: handleCancel}}
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
            value={formData.category ?? ''}
            onChange={value => handleChange('category', value)}
          >
            <option value="">선택해 주세요</option>
            {categoryList.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
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

        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="distance" className="text-caption">
            거리(도보 이동 시간)
          </label>
          <Select
            name="distance"
            id="distance"
            required
            value={formData.distance}
            onChange={value => handleChange('distance', Number(value))}
          >
            <option value="">선택해 주세요</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </Select>
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

        <div className={`${styles.formItem}`}>
          <label htmlFor="name text-caption">참고 링크</label>
          <input
            type="text"
            name="link"
            id="link"
            value={formData.link}
            onChange={event => handleChange('link', event.target.value)}
          />
          <span className={`${styles.helpText} text-caption`}>매장 정보를 확인할 수 있는 링크를 입력해 주세요.</span>
        </div>
      </form>
    </Modal>
  );
};
