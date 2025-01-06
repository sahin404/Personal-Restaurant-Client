import Title from "../../../sharedComponents/CategoryTitle/Title"
import ShowList from "../../Home/ListFromMenu/ShowList"

const MenuCategory = ({ categories, title, description }) => {
    // console.log(categoryName);
    return (
        <div>
            {
                title && <Title h1={title} h2={description}></Title>
            }
            
            <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 p-5 lg:p-10">
                {
                    categories.slice(0,6).map(category => <ShowList
                        menu={category}
                        key={category._id}
                    ></ShowList>)
                }

            </div>
        </div>

    )
}

export default MenuCategory