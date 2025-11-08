'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { Input } from "@/app/components/ui.shadcn.com/input";
import { InputWithLabel } from "@/app/components/ui.shadcn.com/inputWithLabel";
import { cn } from "@/app/lib/ui.shadcn.com/utils";

export default function ProductsSearch({ className, ...props }: React.ComponentProps<typeof Input>) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return <InputWithLabel
    id="search"
    className={cn("mb-8 w-full", className)} 
    placeholder="Type the product name here" 
    title="Find the perfect product"
    onChange={(e) => handleSearch(e.target.value)}
    defaultValue={searchParams.get('query')?.toString()}
    {...props}
  />
}