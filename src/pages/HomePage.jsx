import HomeSection from "./HomeSection"
import FeatureSection from "./FeatureSection";

import "../style/homePage.scss";
import ProductsSection from "./ProductsSection";
import CategoriesSection from "./CategoriesSection";
import ReviewSection from "./ReviewSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <FeatureSection />
      <ProductsSection />
      <CategoriesSection />
      <ReviewSection />
    </>
  )
}

export default HomePage