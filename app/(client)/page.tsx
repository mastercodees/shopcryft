import Container from '@/components/ui/Container';
import HomeBanner from '@/components/ui/HomeBanner';
import ProductGrid from '@/components/ui/ProductGrid';
import React from 'react';

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <HomeBanner />
      <div className='py-10'>
        <ProductGrid />
      </div>

    </Container>
  )
}

export default Home;
