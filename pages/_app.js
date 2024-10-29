// pages/_app.js
import { AuthProvider } from '@/pages/context/AuthContext';
import { ProductProvider } from '@/pages/context/ProductContext'; 
import { CartProvider } from '@/pages/context/CartContext'; 
import Navigation from '@/components/Navigation';
import { useRouter } from 'next/router';
import {PlayNowProvider} from '@/pages/context/PlayNowContext';
import PlayNow from '@/components/PlayNow';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  const noNavRoutes = ['/auth/login', '/auth/register'];
  const showNav = !noNavRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      <ProductProvider initialProducts={pageProps.initialProducts}>
        <CartProvider>
          <PlayNowProvider>
          {showNav && <Navigation />}
          <Component {...pageProps} />
          <PlayNow />
          </PlayNowProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
