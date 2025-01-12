import {AddRestaurantModal} from '../components/AddRestaurantModal';
import {GNB} from '../components/gnb';
import {RestaurantInfoModal} from '../components/RestaurantInfoModal';
import {LoadRestaurants} from '../components/Loader/LoadRestaurants';
import {useModalStore} from '../store/modal';

import {MODAL_NAME} from '../constants/modal';
import {Tabs} from '../components/Tabs';
import {AllRestaurants} from '../components/AllRestaurants';
import {FavoriteRestaurants} from '../components/FavoriteRestaurants';

export const Lunch = () => {
  const {modals} = useModalStore();

  return (
    <LoadRestaurants>
      <GNB />
      <Tabs tabNames={['모든 음식점', '자주 가는 음식점']}>
        <AllRestaurants />
        <FavoriteRestaurants />
      </Tabs>
      <aside>
        {modals[MODAL_NAME.info] && <RestaurantInfoModal />}
        {modals[MODAL_NAME.add] && <AddRestaurantModal />}
      </aside>
    </LoadRestaurants>
  );
};
