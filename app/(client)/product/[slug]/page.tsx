import notFound from '@/app/not-found';
import ImageView from '@/components/ImageView';
import Container from '@/components/ui/Container';
import { getProductBySlug } from '@/sanity/queries';
import React from 'react'

const SingleProductPage = async (
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const isStock = product?.stock > 0;
  if (!product) {
    return notFound();
  }
  return (

    <Container className="flex flex-col md:flex-row gap-10 py-10">
      {product?.images && (
        <ImageView images={product?.images} isStock={product?.stock} />
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-5"></div>
      <div></div>
    </Container>
  )
}

export default SingleProductPage
