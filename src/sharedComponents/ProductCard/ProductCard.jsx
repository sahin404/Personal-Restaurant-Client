const ProductCard = ({product}) => {
    const {name, recipe, image, price} = product;
    return (
        <div className="space-y-3 rounded-xl bg-white p-4 shadow-lg ">
            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    
                    <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">${price}</button>
                </div>
                <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={image} alt="card navigate ui" />
            </div>
            <div className="space-y-2 font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
                <p className="text-xs font-semibold md:text-sm">{recipe}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                
                <button className="rounded-lg bg-orange-600 text-black px-4 py-2 font-semibold  duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard