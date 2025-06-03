import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import React from 'react';

const Home = () => {
  return (
    <Container className='bg-shop-light-pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo sit aliquid aspernatur eaque. Saepe, magnam beatae enim eaque adipisci aspernatur quae quos nulla nihil! Aliquid, velit possimus totam dignissimos reiciendis quae dolorem harum libero numquam nobis sunt sapiente. Consectetur aliquid et officia eum ipsum labore amet voluptas minus nesciunt.</p>
      <Button size='lg' >Check out</Button>
    </Container>
  )
}

export default Home;
