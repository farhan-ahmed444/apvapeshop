import PageTransition from '../components/layout/PageTransition'
import HeroSection from '../components/sections/HeroSection'
import TrustBar from '../components/sections/TrustBar'
import FeaturedCategories from '../components/sections/FeaturedCategories'
import BestSellers from '../components/sections/BestSellers'
import WhyAPVapeShop from '../components/sections/WhyAPVapeShop'
import DealOfTheDay from '../components/sections/DealOfTheDay'
import BrandShowcase from '../components/sections/BrandShowcase'
import CustomerReviews from '../components/sections/CustomerReviews'
import VapeKnowledgeHub from '../components/sections/VapeKnowledgeHub'
import NewsletterCTA from '../components/sections/NewsletterCTA'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <FeaturedCategories />
      <BestSellers />
      <WhyAPVapeShop />
      <DealOfTheDay />
      <BrandShowcase />
      <CustomerReviews />
      <VapeKnowledgeHub />
      <NewsletterCTA />
    </PageTransition>
  )
}
