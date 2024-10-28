import styles from '@/styles/components/PlayCard.module.css';

const PlayCard = ({ product, onClose }) => {
  if (!product) return null; // Return null if no product is passed

  return (
    <div className={styles.fixedCard}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <h4>Now Playing</h4>
      <p>Album: {product.album.title}</p>
      <p>Artist: {product.artist.name}</p>
      <p>Price: ${Math.floor(Math.random() * 90) + 10}</p>
    </div>
  );
};

export default PlayCard;
