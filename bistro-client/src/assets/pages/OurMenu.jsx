import React from 'react'
import PageBanner from '../ShareCompo/PageBanner'
import SectionTitle from '../components/SectionTitle'
import Menus from '../components/Menus'

const OurMenu = () => {
  return (
    <div>
        <PageBanner title='OUR MENU' subTitle='Would you like to try a dish?' image='https://i.ibb.co/qpks3Q1/banner3.jpg'> </PageBanner>
       <SectionTitle title="TODAY'S OFFER" subTitle="---Don't miss---"> </SectionTitle>
       <div>
        <Menus item={'offered'} link='/'> </Menus>
       </div>
       <Menus link='/' item={'dessert'} title='DESSERTS' image='https://i.ibb.co/RcBbjpq/category-pizza.jpg' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'> </Menus>

       <Menus link='/' item={'pizza'} title='PIZZA' image='https://i.ibb.co/RcBbjpq/category-pizza.jpg' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'> </Menus>

       <Menus link='/' item={'salad'} title='SALADS' image='https://i.ibb.co/Jn1x2dC/banner2.jpg' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'> </Menus>

       <Menus link='/' item={'soup'} title='SOUPS' image='https://i.ibb.co/Px75j9G/banner.jpg' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'> </Menus>
    </div>
  )
}

export default OurMenu