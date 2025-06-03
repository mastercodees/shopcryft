import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans", className)}>Shopcry<span className='text-shop_light_green group-hover:text-shop_dark_green hoverEffect'>ft</span></h2>
        </Link>
    )
}

export default Logo
