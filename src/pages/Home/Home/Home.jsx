
import Banner from "../Banner/Banner"
import CategorySwiper from "../CategorySwiper/CategorySwiper"
import ChefRecomends from "../ChefRecomends/ChefRecomends"
import ListFromMenu from "../ListFromMenu/ListFromMenu"
import NumberPane from "../NumberPane/NumberPane"
import Review from "../Review/Review"
import SecondBanner from "../SecondBanner/SecondBanner"

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategorySwiper></CategorySwiper>
        <SecondBanner></SecondBanner>
        <ListFromMenu></ListFromMenu>
        <NumberPane></NumberPane>
        <ChefRecomends></ChefRecomends>
        <Review></Review>
    </div>
  )
}

export default Home