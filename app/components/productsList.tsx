'use server'

import Link from 'next/link';
import ProductsCard from '@/app/components/productsCard';
import { Product } from '@/app/lib/types';

export default async function ProductsList({ products }: { products: Product[] }) {
  return products
    .map((product: Product) => (
      <Link key={product.id} href="/product" className='flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2'>
          <ProductsCard className='shadow rounded p-4 hover:bg-gray-100 hover:dark:bg-slate-800 hover:cursor-pointer' product={product} />
      </Link>
    ))
}