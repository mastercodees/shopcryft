"use client";
import { Product } from '@/sanity.types';
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
    product: Product | null | undefined;
    className?: string;
}
function AddToCartButton({ product, className }: Props) {
    const isOutOfStock = product?.stock === 0;

    const handleAddToCart = () => {
        // if ((product?.stock as number) > itemCount) {
        //   addItem(product);
        //   toast.success(
        //     `${product?.name?.substring(0, 12)}... added successfully!`
        //   );
        // } else {
        //   toast.error("Can not add more than available stock");
        // }
        window.alert(`${product?.name} added to cart!`);
    };

    return (
        <div>
            <Button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={cn(
                    "w-full bg-shop_dark_green/80 shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
                    className
                )}>
                <ShoppingBag />{isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </div>
    )
}

export default AddToCartButton
