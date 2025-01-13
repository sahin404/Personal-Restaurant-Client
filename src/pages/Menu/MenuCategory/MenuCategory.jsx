import { Link } from "react-router-dom"
import ShowList from "../../Home/ListFromMenu/ShowList"

const MenuCategory = ({ categories, title}) => {
    // console.log(categoryName);
    return (
        <div>

            <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 md:gap-10 p-5 lg:p-10">
                {
                    categories.slice(0, 6).map(category => <ShowList
                        menu={category}
                        key={category._id}
                    ></ShowList>)
                }
            </div>
            <div className="flex justify-center mb-5">
                <Link to={`/shop/${title}`}>
                    <button className="btn bg-orange-500 text-lg">Order Now</button>
                </Link>

            </div>

        </div>

    )
}

export default MenuCategory