import MenuCover from "../../../sharedComponents/MenuCover/MenuCover"
import img from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hoooks/useMenu/useMenu";
import ProductMap from "../ProductMap/ProductMap";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categoryArray = ['offered', 'salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const tempIndex = categoryArray.indexOf(category);
    const [tabIndex, setTabIndex] = useState(tempIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(temp => temp.category === 'dessert');
    const pizza = menu.filter(temp => temp.category === 'pizza');
    const salad = menu.filter(temp => temp.category === 'salad');
    const soup = menu.filter(temp => temp.category === 'soup');
    const drinks = menu.filter(temp => temp.category === 'drinks');
    const offered = menu.filter(temp => temp.category === 'offered');
    return (
        <div className="mb-10">
            <Helmet>
                <title>Pizzarant | Order</title>
            </Helmet>
            <MenuCover img={img} title={"Order Food"} description={"Check your favourite Food"}></MenuCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <ProductMap type={offered}></ProductMap>
                </TabPanel>
                <TabPanel>
                    <ProductMap type={salad}></ProductMap>
                </TabPanel>
                <TabPanel>
                    <ProductMap type={pizza}></ProductMap>
                </TabPanel>
                <TabPanel>
                    <ProductMap type={soup}></ProductMap>
                </TabPanel>
                <TabPanel>
                    <ProductMap type={dessert}></ProductMap>
                </TabPanel>
                <TabPanel>
                    <ProductMap type={drinks}></ProductMap>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default Shop