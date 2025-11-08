import Categories from "@/app/components/categories";
import Products from "@/app/components/products";
import Header from "@/app/components/header";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || ''


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Header />
          <Suspense key={query}>
            <Categories />
            <Products productName={query ?? ''} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
