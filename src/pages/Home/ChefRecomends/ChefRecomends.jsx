import { useEffect, useState } from "react";
import Title from "../../../sharedComponents/CategoryTitle/Title";
import ProductCard from "../../../sharedComponents/ProductCard/ProductCard";

const ChefRecomends = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className=" mt-20">
            <Title
            h1 = "---Should Try---"
            h2="CHEF RECOMMENDS"
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {
                    list.slice(0, 3).map(menu =><ProductCard
                    product={menu}
                    key={menu._id}
                    ></ProductCard>)
        
                }
            </div>

        </div>
    )
}

export default ChefRecomends
