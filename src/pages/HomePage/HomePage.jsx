import Banner from "../../components/BannerSection/BannerSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import SaleSection from "../../components/SaleSection/SaleSection";
import DiscountSection from "../../components/DiscountSection/DiscountSection";
import { useCallback, useEffect, useRef } from "react";

export default function HomePage(){
    
    const saleSectionRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const scrollToSaleSection = useCallback(() => {
        if (saleSectionRef.current) {
          saleSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])


    return(
        <div>
            <Banner scrollToSaleSection={scrollToSaleSection}/>
            <CategoriesSection/>
            <DiscountSection/>
            <SaleSection ref={saleSectionRef}/>
        </div>
    )
}