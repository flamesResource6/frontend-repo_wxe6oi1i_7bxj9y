function Starfield() {
  return (
    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(99,102,241,0.6)" />
          <stop offset="60%" stopColor="rgba(99,102,241,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#g)" />
    </svg>
  );
}

function DeviceMock({title, subtitle}) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="aspect-[16/9] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-20%,rgba(255,255,255,0.35),transparent)]"/>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_20%)]"/>
        <div className="absolute inset-0 grid place-items-center p-10">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_2px_24px_rgba(255,255,255,0.35)]">
              {title}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#buy" className="px-5 py-2.5 rounded-full bg-white text-black font-medium shadow hover:bg-white/90">Buy now</a>
              <a href="#learn" className="px-5 py-2.5 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40">Learn more</a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-400 to-violet-500 blur-3xl opacity-40"/>
        <div className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-500 to-rose-500 blur-3xl opacity-30"/>
      </div>
      <div className="absolute -inset-x-10 -bottom-8 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"/>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-20%,#1f2937,transparent)]"/>
        <Starfield />
      </div>

      <div className="relative pt-24 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DeviceMock
            title="Nimbus One"
            subtitle="A stunning new kind of laptop. Feather‑light. Fanless. All‑day battery. Crafted from recycled aluminum with a display that looks painted on."
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
