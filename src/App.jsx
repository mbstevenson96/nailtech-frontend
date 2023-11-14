import HeaderSearch from './views/shopper/header/HeaderSearch';
import ProductCards from './views/shopper/home/Products';
import Landing from './views/shopper/home/Landing';
  const products = [
    {
      id: 1,
      title: 'Cool Product',
      image: 'https://via.placeholder.com/300',
      description: 'This is a really awesome product!',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 3,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 4,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 5,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 6,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 7,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 8,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
    {
      id: 9,
      title: 'Awesome Product',
      image: 'https://via.placeholder.com/300',
      description: 'You will love this amazing product!',
      price: 39.99,
    },
  ];

export default function App() {

  return (
    <>
      <HeaderSearch />
      <Landing />
      <ProductCards products={products} />
    </>
  );
}
