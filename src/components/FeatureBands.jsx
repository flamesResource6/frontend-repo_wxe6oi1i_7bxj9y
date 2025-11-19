function GradientBand({ title, subtitle, from, to, align = "left" }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10">
      <div className={`absolute inset-0 bg-gradient-to-r from-[${from}] to-[${to}] opacity-30`} />
      <div className="relative px-8 py-16 sm:px-12 sm:py-20">
        <div className={align === 'right' ? 'ml-auto text-right max-w-xl' : 'max-w-xl'}>
          <h3 className="text-3xl font-semibold text-white drop-shadow">{title}</h3>
          <p className="mt-3 text-white/80">{subtitle}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-white/90 hover:text-white">
            <span>Learn more</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBands() {
  return (
    <section id="features" className="bg-black text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <GradientBand
          title="Brilliant Liquid OLED"
          subtitle="A display that blurs the line between pixels and paint. True blacks, 120Hz ProMotion, and color accuracy tuned for creators."
          from="#60a5fa"
          to="#a78bfa"
        />
        <GradientBand
          title="Nimbus Silicon M2"
          subtitle="Whisper‑quiet power. 12‑core CPU, 18‑core GPU, and a neural engine that makes light work of heavy tasks."
          from="#34d399"
          to="#22d3ee"
          align="right"
        />
        <GradientBand
          title="All‑day battery"
          subtitle="Go sunrise to sundown and still have charge to spare. Optimize mode learns your routine to save power when you don't need it."
          from="#f472b6"
          to="#f59e0b"
        />
      </div>
    </section>
  );
}

export default FeatureBands;
