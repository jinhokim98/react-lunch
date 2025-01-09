import {FilterContainer} from '../components/FilterContainer';
import {GNB} from '../components/gnb';
import {RestaurantList} from '../components/RestaurantList';

export const Lunch = () => {
  return (
    <>
      <GNB />
      <main>
        <FilterContainer />
        <RestaurantList />
      </main>
      <aside></aside>
    </>
  );
};
