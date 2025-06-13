import HomeCategories from '@/components/HomeCategories';
import Container from '@/components/ui/Container';
import HomeBanner from '@/components/ui/HomeBanner';
import ProductGrid from '@/components/ui/ProductGrid';
import { getCategories } from '@/sanity/queries';
import React from 'react';

const Home = async () => {
  const categories = await getCategories(6);
  //console.log('Categories:', categories);

  return (
    <Container className='bg-shop-light-pink'>
      <HomeBanner />
      <div className='py-10'>
        <ProductGrid />
      </div>
      <HomeCategories categories={categories} />

    </Container>
  )
}

export default Home;
