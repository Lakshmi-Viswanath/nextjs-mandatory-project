import { useCartContext } from '@/pages/context/CartContext';
import { useProductContext } from '@/pages/context/ProductContext';
import styles from '@/styles/components/ProductDetails.module.css';
import axios from 'axios';
import Navigation from '@/components/Navigation';

const ProductDetails = ({ product }) => {
  const { addItemToCart } = useCartContext(); 
  

  return (
    <>
      
      <div className={styles.productDetailsContainer}>
        <div className={styles.imageContainer}>
          <img src={product.cover_medium} alt={product.title} height='100' width='100' className={styles.productImage} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.productName}>{product.title}</h1>
          <p className={styles.productDescription}>Duration:{product.duration}</p>
          <p className={styles.productPrice}>${Math.floor(Math.random() * 90) + 10}</p>
          <button className={styles.addToCartButton} onClick={() => addItemToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await axios.get('https://api.deezer.com/chart');
  const data = res.data.tracks.data;
  const paths = data.map((product) => ({
        params: { id: product.album.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(`https://api.deezer.com/album/${params.id}`);
  const product = res.data;
  return {
    props: { product },
  };
};

export default ProductDetails;
