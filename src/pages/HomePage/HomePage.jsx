import { useSelector } from "react-redux";
import Banner from "../../components/BannerSection/BannerSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";

export default function HomePage(){
    


    return(
        <div>
            <Banner/>
            <CategoriesSection/>
        </div>
    )
}