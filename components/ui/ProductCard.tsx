import { Product } from '@/sanity.types'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div>
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProductCard

