import HomeSection from "./HomeSection"
import FeatureSection from "./FeatureSection";
import ProductsSection from "./ProductsSection";
import CategoriesSection from "./CategoriesSection";
import ReviewSection from "./ReviewSection";
import BlogsSection from "./BlogsSection";

import "../style/homePage.scss";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <FeatureSection />
      <ProductsSection />
      <CategoriesSection />
      <ReviewSection />
      <BlogsSection />
    </>
  )
}

export default HomePage