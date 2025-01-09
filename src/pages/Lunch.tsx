import {AddRestaurantModal} from '../components/AddRestaurantModal';
import {FilterContainer} from '../components/FilterContainer';
import {GNB} from '../components/gnb';
import {RestaurantInfoModal} from '../components/RestaurantInfoModal';
import {RestaurantList} from '../components/RestaurantList';
import {useModalStore} from '../store/modal';

export const Lunch = () => {
  const {modals} = useModalStore();

  return (
    <>
      <GNB />
      <main>
        <FilterContainer />
        <RestaurantList />
      </main>
      <aside>
        {modals['info'] && <RestaurantInfoModal />}
        {modals['add'] && <AddRestaurantModal />}
      </aside>
    </>
  );
};
