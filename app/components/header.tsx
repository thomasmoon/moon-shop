import ProductSearch from "@/app/components/productSearch";
import { cn } from "@/app/lib/ui.shadcn.com/utils";

export interface HeaderProps extends React.ComponentProps<"div"> {
  showSearch?: boolean
}

export default function Header({ className, showSearch = true, ...props }: HeaderProps) {
  return (
    <div className={cn("w-full flex flex-col md:flex-row items-center sm:items-start md:items-end lg:items-end 2xl:items-end", className)} {...props}>
      <div className="w-full">
        <h1 className="sm:max-w-xs text-3xl text-black mb-8 dark:text-zinc-50">
          Moon Shop
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400 mb-8 pr-4">
          A modern React-based e-commerce frontend using Next.js and default Tailwind classes.
        </p>
      </div>
      {showSearch && <ProductSearch /> }
    </div>
  )
}