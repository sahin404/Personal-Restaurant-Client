import { useEffect, useState } from "react";
import Title from "../../../sharedComponents/CategoryTitle/Title";

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
                    list.slice(0, 3).map(menu => <div
                        key={menu._id} className=" space-y-3 rounded-xl bg-[#1F2937] p-4 shadow-lg ">
                        <div className="relative flex w-full justify-center">
                            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                {/* love  */}
                                <div className="flex items-center">
                                    <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                                </div>
                                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                            </div>
                            <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={menu.image} alt="Pizzarant" />
                        </div>
                        <div className="space-y-2 font-semibold">
                            <h6 className="text-sm md:text-base lg:text-lg text-white">{menu.name}</h6>
                            <p className="text-xs font-semibold text-gray-400 md:text-sm">{menu.recipe}</p>
                            <p className="text-white">${menu.price}</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
                            <button className="rounded-lg bg-[#ca8e02e7] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-[#453001]">View Details</button>
                            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default ChefRecomends
