import { fetchProductsData } from '@/app/lib/data';
import ProductsList from '@/app/components/productsList';
import { ProductsData } from '@/app/lib/types';

export default async function Products({ productName }: { productName: string }) {
  const productsData:ProductsData = await fetchProductsData()

  const filteredProducts = productsData.products.filter(p => !productName || p.title.toLowerCase().includes(productName.toLowerCase()))
    
  return (
    <div>
      <h2 className='mb-8 text-xl'>{filteredProducts.length} product(s)</h2>
      <div className="flex flex-row flex-wrap items-stretch content-stretch -m-2">
        <ProductsList products={filteredProducts} />
      </div>
    </div>
    
  );
}