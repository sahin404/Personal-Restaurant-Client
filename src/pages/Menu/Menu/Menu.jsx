import { Helmet } from "react-helmet-async"
import MenuCover from "../../../sharedComponents/MenuCover/MenuCover"
import ourMenuImage from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hoooks/useMenu/useMenu"
import MenuCategory from "../MenuCategory/MenuCategory"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
import Title from "../../../sharedComponents/CategoryTitle/Title"

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(temp =>temp.category==='dessert');
  const pizza = menu.filter(temp =>temp.category==='pizza');
  const salad = menu.filter(temp =>temp.category==='salad');
  const soup = menu.filter(temp =>temp.category==='soup');
  const offered = menu.filter(temp =>temp.category==='offered');
  const drinks = menu.filter(temp =>temp.category==='drinks');

  return (
    <div>
      <Helmet>
        <title>Pizzarant | Menu</title>
      </Helmet>
      {/*Banner  */}
      <MenuCover img={ourMenuImage} title={"Our Menu"} description={"Would You Like to try Our Dish?"}></MenuCover>
      {/* Offer Section */}
      <Title h1={"Don't Miss"} h2={"Today's Offer"}></Title>
      <MenuCategory title={"offered"} description={""} categories = {offered}></MenuCategory>
      {/* Dessert */}
      <MenuCover img={dessertImage} title={"Dessert"} description={"Indulge in our heavenly desserts, crafted to satisfy your sweetest cravings. From creamy delights to rich chocolatey treats, there's a slice of happiness for everyone!"}></MenuCover>
      <MenuCategory title={"dessert"} description={""} categories = {dessert}></MenuCategory>

      {/* pizza */}
      <MenuCover img={pizzaImage} title={"Pizza"} description={"Savor the perfect slice of happiness with our freshly baked pizzas. Loaded with premium toppings and gooey cheese, every bite is a delight!"}></MenuCover>
      <MenuCategory title={"pizza"} description={""} categories = {pizza}></MenuCategory>
      {/* Salads */}
      <MenuCover img={saladImage} title={"Salads"} description={"Savor the perfect slice of happiness with our freshly baked pizzas. Loaded with premium toppings and gooey cheese, every bite is a delight!"}></MenuCover>
      <MenuCategory title={"salad"} description={""} categories = {salad}></MenuCategory>
      {/* Soup */}
      <MenuCover img={soupImage} title={"Soups"} description={"Savor the perfect slice of happiness with our freshly baked pizzas. Loaded with premium toppings and gooey cheese, every bite is a delight!"}></MenuCover>
      <MenuCategory title={"soup"} description={""} categories = {soup}></MenuCategory>
      {/* Drinks */}
      <MenuCover img={soupImage} title={"Drinks"} description={"Savor the perfect slice of happiness with our freshly baked pizzas. Loaded with premium toppings and gooey cheese, every bite is a delight!"}></MenuCover>
      <MenuCategory title={"drinks"} description={""} categories = {drinks}></MenuCategory>
    </div>
  )
}

export default Menu