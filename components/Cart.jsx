// components/Cart.js
import { useCartContext } from '@/pages/context/CartContext'; // Adjust the path as necessary
import styles from "@/styles/components/Cart.module.css";
import { useRouter } from 'next/router';

const Cart = () => {
  console.log("i am in cart")
  const router = useRouter();
  const { cart, removeItemFromCart } = useCartContext(); // Use the context

  const removeItem = (id) => {
    removeItemFromCart(id); // Call the remove function from context
  };

  const goToCheckout = () => {
    router.push('/checkout'); 
  };
console.log("cart prod",cart)
  const cards = cart.map((product, index) => (
    
    <div className={styles.cardContainer} key={index}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={product.cover_medium}
            alt={product.title}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{product.title}</h5>
          <h5 className={styles.cardTitle}>{product.artist.name}</h5>
          <p className={styles.cardText}>${Math.floor(Math.random() * 90) + 10}</p>
        </div>
        <div className={styles.cardFooter}>
          <button
            className={styles.removeButton}
            onClick={() => removeItem(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2>Cart Page</h2>
      <div className={styles.cardsContainer}>{cards}</div>
      <div className={styles.checkoutContainer}>
        <button className={styles.checkoutButton} onClick={() => goToCheckout()}>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
