import ProductCard from "../../../sharedComponents/ProductCard/ProductCard"

const ProductMap = ({type}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
            {type.map(temp => <ProductCard
                key={temp._id}
                product={temp}
            ></ProductCard>)}
        </div>
    )
}

export default ProductMap