import Link from 'next/link';

import { fetchProductCategoryData } from '@/app/lib/data';
import { Category } from '@/app/lib/types';
import { colors } from '@/app/lib/colors'

export default async function Categories() {
  const categories:Category[] = await fetchProductCategoryData()
  
  const renderCategories = categories.map((category:Category) => {
    // eslint-disable-next-line react-hooks/purity
    const indexOfRandomColor = Math.floor(Math.random() * colors.length)
    const color = colors[indexOfRandomColor]
    return (
      <div key={category.slug} className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2'>
         <Link href={`/category/${category.slug}`} className={`block shadow bg-${color}-200 hover:bg-${color}-400 hover:cursor-pointer rounded p-4 text-2xl text-black`}>
            {category.name}
        </Link>
      </div>
    )
  })

  return (
    <div className='mb-8'>
        <h2 className='mb-8 text-xl'>{categories.length} categories</h2>
        <div className="flex flex-row flex-wrap -m-2">
          {renderCategories}
        </div>
    </div>
  );
}