// components/Products.js
import { useProductContext } from '@/pages/context/ProductContext';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Product.module.css';
import { useCartContext } from '@/pages/context/CartContext';
import { usePlayNowContext } from '@/pages/context/PlayNowContext';

const Products = () => {
  
  const { products, addToCart } = useProductContext();
  const { playTrack } = usePlayNowContext();

  const { addItemToCart } = useCartContext();
  const router = useRouter();

  const goToDetails = (productId) => {
    router.push(`/product/${productId}`);
  };

  const cards = products.map((product, index) => (
    <div className={styles.cardContainer} key={index}>
      <div className={styles.card}>
        <div className="text-center">
          <img src={product.album.cover_medium} alt={product.title} className={styles.cardImage} />
        </div>
        <div className={styles.cardBody}>
          <h4 className="text-center">Album :  {product.album.title}</h4>
          <p className="text-center">Artist : {product.artist.name}</p>
          <p className="text-center">Price: ${Math.floor(Math.random() * 90) + 10}</p>
        </div>
        <div className={styles.cardFooter}>
        <button onClick={() => playTrack({
            name: product.album.title,
            artist: product.artist.name
          })}>
            Play Now
          </button>
          <button className={styles.learnMoreButton} onClick={() => goToDetails(product.album.id)}>
            Learn More
          </button>
          <button className={styles.buyButton} onClick={() => addItemToCart(product)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2>Top Albums</h2>
      <section className={styles.productsSection}>{cards}</section>
    </>
  );
};

export default Products;
