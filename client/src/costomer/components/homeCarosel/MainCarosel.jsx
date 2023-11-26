import React from "react";
import AliceCarousel from "react-alice-carousel";
import { mainCarouselData } from "./MainCarouselData";


const MainCarosel = () => {
    const items = mainCarouselData.map((item)=>  <img className="cursor-pointer"
    role="presentation" src={item.image}  alt=""
    />)
    return (
        <AliceCarousel
        items = {items}    
    />
    )
    
   
}

export default MainCarosel;

