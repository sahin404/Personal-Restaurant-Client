import { useEffect, useState } from "react"
import Title from "../../../sharedComponents/CategoryTitle/Title";

const ListFromMenu = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div className="my-10">
            <Title
                h1="---Check it out---"
                h2="FROM OUR MENU"
            ></Title>
            <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 p-5 lg:p-10">
                {
                    list.slice(0, 6).map(menu => <div
                        key={menu._id}
                        className="flex flex-col md:flex-row gap-5 bg-gray-200 p-5 rounded-lg"
                    >
                        <img className="h-20 w-20 rounded-full rounded-tl-none" src={menu.image} alt="" />
                        <div>
                            <h1 className="font-bold">{menu.name}</h1>
                            <h1>{menu.recipe}</h1>
                        </div>
                        <h1 className="text-[#BB8506]">${menu.price}</h1>
                    </div>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-b-2 border-black">View Full Menu</button>
            </div>
        </div>
    )
}

export default ListFromMenu