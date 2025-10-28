import { Product, Review } from '@/app/lib/types';

import { Angry, Frown, Laugh, LucideIcon, Meh, Smile } from 'lucide-react'

interface ProductReviewsProps extends React.ComponentProps<"div"> {
  product: Product
}

const ratingToFace = [Angry, Frown, Meh, Smile, Laugh]

export default function ProductReviews({ product, ...props }: ProductReviewsProps) {

  const renderReview = (productId:number, review:Review, reviewIndex: number ) => {
    const Icon: LucideIcon = ratingToFace[review.rating - 1]
    return (
    <div key={`product-${productId}-review-${reviewIndex}`} className='flex flex-row mb-2 gap-2'>
      <Icon role="img" aria-label={`Review score: ${review.rating}`} /><p className="flex-grow text-left">{review.comment}</p>
    </div>
  )}
  
  return (
    <div {...props}>
      <div className='flex flex-row items-start mb-2'>
        <h5>{product.reviews.length} reviews</h5>&nbsp;
        <span>({product.rating})</span>
      </div>
      
      {product.reviews.map((review, reviewIndex) => (
        renderReview(product.id, review, reviewIndex)
      ))}
    </div>
  );
}