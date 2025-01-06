
import useMenu from "../../../hoooks/useMenu/useMenu";
import Title from "../../../sharedComponents/CategoryTitle/Title";
import ShowList from "./ShowList";

const ListFromMenu = () => {
   const [menu] = useMenu();
   const popularMenu = menu.filter(temp=>temp.category==='popular');
    return (
        <div className="my-10">
            <Title
                h1="---Check it out---"
                h2="FROM OUR MENU"
            ></Title>
            <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 md:gap-10 p-5 lg:p-10">
                {
                   popularMenu.slice(0, 6).map(menu =><ShowList
                    key={menu._id}
                    menu={menu}
                   ></ShowList> )
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-b-2 border-black">View Full Menu</button>
            </div>
        </div>
    )
}

export default ListFromMenu