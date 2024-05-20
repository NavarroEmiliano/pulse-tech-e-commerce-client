import BannerProduct from '../components/BannerProduct'
import RecommendedProductCarrousel from '../components/RecommendedProductCarrousel'

const Home = () => {
  return (
    <div>
      <BannerProduct />
      <RecommendedProductCarrousel
        category={'smartphones'}
        heading={`Top's Smartphones`}
      />
      <RecommendedProductCarrousel
        category={'motorcycle'}
        heading={`Top's motorcycles`}
      />
    </div>
  )
}

export default Home
