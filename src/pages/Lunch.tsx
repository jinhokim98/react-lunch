import {AddRestaurantModal} from '../components/AddRestaurantModal';
import {FilterContainer} from '../components/FilterContainer';
import {GNB} from '../components/gnb';
import {RestaurantInfoModal} from '../components/RestaurantInfoModal';
import {RestaurantList} from '../components/RestaurantList';
import {LoadRestaurants} from '../hooks/LoadRestaurants';
import {useModalStore} from '../store/modal';

export const Lunch = () => {
  const {modals} = useModalStore();

  return (
    <LoadRestaurants>
      <GNB />
      <main>
        <FilterContainer />
        <RestaurantList />
      </main>
      <aside>
        {modals['info'] && <RestaurantInfoModal />}
        {modals['add'] && <AddRestaurantModal />}
      </aside>
    </LoadRestaurants>
  );
};
