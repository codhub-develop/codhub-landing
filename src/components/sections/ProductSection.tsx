import { ProductCard } from "../cards/ProductCard"

export function ProductSection() {
  return (
    <div className="bg-black pt-20 pb-10 px-6">
    <div className="flex flex-col border-b border-light-gray pb-12">
      <div className="flex flex-row justify-between">
        <h2 className="font-baloo text-4xl text-white mr-auto">Our Products</h2>
        <p className="font-body text-medium-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        </div>
      </div>
      <ProductCard />
    </div>
  )
}