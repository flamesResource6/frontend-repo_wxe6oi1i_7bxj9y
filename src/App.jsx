import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import FeatureBands from './components/FeatureBands'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <FeatureBands />
      <CTA />
      <footer className="bg-black text-white/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="h-5 w-5 rounded-[6px] bg-gradient-to-br from-sky-400 to-blue-600"></div>
              <span className="font-semibold">Nimbus</span>
            </div>
            <p className="mt-3">Imagined products, original text, and generative graphics. No copyrighted images used.</p>
          </div>
          <div>
            <p className="text-white/80 font-medium">Explore</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#buy" className="hover:text-white">Buy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/80 font-medium">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs">© {new Date().getFullYear()} Nimbus. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
