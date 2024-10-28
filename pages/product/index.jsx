// pages/product.js
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import axios from 'axios';

const Product = ({ initialProducts }) => {
  return (
    <div>
      <Products />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get('https://api.deezer.com/chart');
  return { props: { initialProducts: response.data.tracks.data } };
};

export default Product;
