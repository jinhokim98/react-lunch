import {IMAGE_SRC} from '../../constants/imageSrc';
import styles from './style.module.css';

type FavoriteButtonProps = React.ComponentProps<'button'> & {
  isFavorite: boolean;
};

export const FavoriteButton = ({isFavorite, ...buttonProps}: FavoriteButtonProps) => {
  return (
    <button className={styles.icon} {...buttonProps}>
      <img src={isFavorite ? IMAGE_SRC.favoriteIconFilled : IMAGE_SRC.favoriteIconLined} alt="favorite" />
    </button>
  );
};
