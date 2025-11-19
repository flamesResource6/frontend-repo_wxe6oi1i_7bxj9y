import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-[6px] bg-gradient-to-br from-sky-400 to-blue-600 shadow shadow-blue-500/30"></div>
            <span className="text-white font-semibold tracking-tight">Nimbus</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="text-white/80 hover:text-white transition">Products</a>
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#support" className="text-white/80 hover:text-white transition">Support</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm rounded-md text-white/90 hover:text-white">Sign in</button>
            <button className="px-4 py-1.5 text-sm rounded-md bg-white text-black hover:bg-white/90 transition">Buy</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 hover:text-white" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#products" className="block text-white/80 hover:text-white">Products</a>
            <a href="#features" className="block text-white/80 hover:text-white">Features</a>
            <a href="#support" className="block text-white/80 hover:text-white">Support</a>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-3 py-2 text-sm rounded-md text-white/90 hover:text-white border border-white/10">Sign in</button>
              <button className="flex-1 px-3 py-2 text-sm rounded-md bg-white text-black hover:bg-white/90">Buy</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
