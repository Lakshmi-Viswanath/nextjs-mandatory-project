// components/Navigation.js
import Link from 'next/link';
import { useState } from 'react';
import { useCartContext } from '@/pages/context/CartContext'; 
import { useProductContext } from '@/pages/context/ProductContext'; 
import styles from '@/styles/components/Navigation.module.css';

const Navigation = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cart } = useCartContext();

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/product" className={styles.brand}>
          <h3>Music Store</h3>
        </Link>
        <div className={styles.cartContainer}>
          <Link href="/cart" className={styles.cartLink}>
            My Cart {cart.length}
          </Link>
        </div>
        <div className={styles.profileContainer} onClick={toggleProfileMenu}>
          Profile
          {isProfileOpen && (
            <div className={styles.profileMenu}>
              <Link href="/profile" className={styles.menuItem}>Your Profile</Link>
              <Link href="/settings" className={styles.menuItem}>Settings</Link>
              <button className={styles.menuItem} onClick={() => { }}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
