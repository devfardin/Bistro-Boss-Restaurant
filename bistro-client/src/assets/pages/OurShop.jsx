import React, { useState } from 'react'
import PageBanner from '../ShareCompo/PageBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from '../components/Shop/shopCard';
import { useParams } from 'react-router-dom';
const OurShop = () => {
    const categories=['salad', 'pizza', 'popular', 'drinks', 'dessert']
    const {category}= useParams()
    const initCatetory = categories.indexOf(category)
    const [tabIndex, setTabIndex]=useState(initCatetory)
    return (
        <div>
            <PageBanner title='OUR SHOP' subTitle='Would you like to try a dish?' image='https://i.ibb.co/Jn1x2dC/banner2.jpg'> </PageBanner>
            <div className='container mx-auto px-4 mt-10'>
                <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab className="text-lg font-medium inline-block ml-6 text-center cursor-pointer text-black1">salad</Tab>
                        <Tab className="text-lg font-medium inline-block ml-6 text-center cursor-pointer text-black1">pizza</Tab>
                        <Tab className="text-lg font-medium inline-block ml-6 text-center cursor-pointer text-black1">popular</Tab>
                        <Tab className="text-lg font-medium inline-block ml-6 text-center cursor-pointer text-black1">drinks</Tab>
                        <Tab className="text-lg font-medium inline-block ml-6 text-center cursor-pointer text-black1">dessert</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopCard item='salad'> </ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard item='pizza'> </ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard item='popular'> </ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard item='drinks'> </ShopCard>
                    </TabPanel>
                    <TabPanel>
                        <ShopCard item='dessert'> </ShopCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
} 
export default OurShop