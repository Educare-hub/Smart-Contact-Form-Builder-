import { Footer } from "../components/footer/Footer"
import { Hero } from "../components/Hero"
import Navbar from "../components/nav/Navbar"
import { Services } from "../components/Services"

const LandingPage = () => {
  return (
<div className="pt-20 min-h-screen bg-gradient-to-r from-[#00C6FF] via-[#FF6B6B] to-[#ec3636] text-gray-100 flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
    
  )
}

export default LandingPage
