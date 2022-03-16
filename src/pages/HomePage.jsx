import HomeSection from "./HomeSection"
import FeatureSection from "./FeatureSection";

import "../style/homePage.scss";
import ProductsSection from "./ProductsSection";
import CategoriesSection from "./CategoriesSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <FeatureSection />
      <ProductsSection />
      <CategoriesSection />
    </>
  )
}

export default HomePage