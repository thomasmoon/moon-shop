import Link from 'next/link';
import ProductCard from '@/app/components/productCard';
import { fetchProductsData } from '@/app/lib/data';
import { ProductsData, Product } from '@/app/lib/types';

export default async function Products() {
  const products:ProductsData = await fetchProductsData()
  
  const renderProducts = products.products.map((product:Product) =>
    <Link key={product.id} href="/product" className='flex w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2'>
        <ProductCard className='shadow rounded p-4 hover:bg-gray-100 hover:dark:bg-slate-800 hover:cursor-pointer' product={product} />
    </Link>
  );

  return (
    <div>
      <h2 className='mb-8 text-xl'>{products.total} products</h2>
      <div className="flex flex-row flex-wrap items-stretch content-stretch -m-2">
        {renderProducts}
      </div>
    </div>
    
  );
}