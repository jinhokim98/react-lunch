import {AddRestaurantModal} from '../components/AddRestaurantModal';
import {FilterContainer} from '../components/FilterContainer';
import {GNB} from '../components/gnb';
import {RestaurantInfoModal} from '../components/RestaurantInfoModal';
import {RestaurantList} from '../components/RestaurantList';
import {LoadRestaurants} from '../hooks/LoadRestaurants';
import {useModalStore} from '../store/modal';

import {MODAL_NAME} from '../constants/modal';

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
        {modals[MODAL_NAME.info] && <RestaurantInfoModal />}
        {modals[MODAL_NAME.add] && <AddRestaurantModal />}
      </aside>
    </LoadRestaurants>
  );
};
