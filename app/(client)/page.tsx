import HomeCategories from '@/components/HomeCategories';
import LatestBlog from '@/components/LatestBlog';
import ShopByBrand from '@/components/ShopByBrand';
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
      <ShopByBrand />
      <LatestBlog />
    </Container>
  )
}

export default Home;
