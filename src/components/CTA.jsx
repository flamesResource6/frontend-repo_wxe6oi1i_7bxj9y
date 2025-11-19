function CTA() {
  return (
    <section id="buy" className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/0">
          <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_70%_-20%,rgba(255,255,255,0.5),transparent)]"/>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-px">
            <div className="p-10 sm:p-14">
              <h3 className="text-3xl sm:text-4xl font-bold">Pre‑order Nimbus One</h3>
              <p className="mt-3 text-white/80">Ships next month. Free 2‑day delivery and 14‑day returns.</p>

              <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"/>
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"/>
                <select className="w-full rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                  <option>Nimbus One — 256GB</option>
                  <option>Nimbus One — 512GB</option>
                  <option>Nimbus One — 1TB</option>
                </select>
                <button className="w-full rounded-lg bg-white px-4 py-2.5 text-black font-medium hover:bg-white/90">Reserve</button>
              </form>
            </div>

            <div className="p-10 sm:p-14 bg-[radial-gradient(700px_300px_at_30%_-20%,rgba(255,255,255,0.4),transparent)]">
              <div className="h-full min-h-[220px] rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_40%)]"/>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/60">This site uses original text and auto‑generated abstract graphics to avoid copyrighted content.</p>
      </div>
    </section>
  );
}

export default CTA;
