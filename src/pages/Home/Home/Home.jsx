
import Banner from "../Banner/Banner"
import CategorySwiper from "../CategorySwiper/CategorySwiper"
import ListFromMenu from "../ListFromMenu/ListFromMenu"
import SecondBanner from "../SecondBanner/SecondBanner"

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategorySwiper></CategorySwiper>
        <SecondBanner></SecondBanner>
        <ListFromMenu></ListFromMenu>
    </div>
  )
}

export default Home