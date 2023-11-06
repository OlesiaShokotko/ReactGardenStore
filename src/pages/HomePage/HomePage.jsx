import { useSelector } from "react-redux";
import Banner from "../../components/BannerSection/BannerSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import SaleSection from "../../components/SaleSection/SaleSection";
import DiscountSection from "../../components/DiscountSection/DiscountSection";

export default function HomePage(){
    


    return(
        <div>
            <Banner/>
            <CategoriesSection/>
            <DiscountSection/>
            <SaleSection/>
        </div>
    )
}