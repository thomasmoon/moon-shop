import { Product } from '@/app/lib/types';
import ProductReviews from '@/app/components/productReviews';
import { cn } from '@/app/lib/ui.shadcn.com/utils'

interface ProductCardProps extends React.ComponentProps<"div"> {
  product: Product
}

export default function ProductCard({ product, className, ...props }: ProductCardProps) {
  
  return (
    <div className={cn('flex flex-col w-full', className)} {...props}>
      <img className='block mb-8' src={product.images[0]} alt={`Product image for ${product.title}`}></img>
      <h3 className='mb-2 text-lg'>{product.title}</h3>
      <p>{product.description}</p>
      <ProductReviews className='my-4' product={product} />
      <div className='flex-grow flex flex-col justify-end'>
        <div className='flex flex-row w-full mt-4 justify-between'>
          <button className='bg-slate-200 hover:bg-slate-400 hover:cursor-pointer rounded px-4 py-2 text-black'>Add to cart</button>
          <h4 className='text-rose-400 text-3xl'>{product.price}</h4>
        </div>
      </div>
    </div>
  );
}