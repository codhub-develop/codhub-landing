import { ProductCard } from "../cards/ProductCard"
import { MainLayout } from "../layouts/MainLayout"

export function ProductSection() {
  return (
    <MainLayout className="bg-foreground">
  <section className="bg-foreground py-30 px-10">
      <div className="container mx-auto">
        <div className="flex flex-col border-b border-light-gray/20 pb-12">
          <div className="flex flex-row justify-between items-end">
            <h2 className="font-baloo text-4xl text-white mr-auto">Our Products</h2>
            <p className="font-body text-medium-gray max-w-[400px] text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
        </div>
      </div>
      <ProductCard />
    </div>
    </section>
    </MainLayout>
  )
}