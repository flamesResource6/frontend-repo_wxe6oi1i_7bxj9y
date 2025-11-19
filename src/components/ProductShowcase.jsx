function ProductTile({ name, tagline, price, colorFrom, colorTo }) {
  return (
    <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
      <div className={`absolute inset-0 bg-gradient-to-br from-[${colorFrom}] to-[${colorTo}] opacity-20`} />
      <div className="p-8 sm:p-10">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <span className="text-white/70">{price}</span>
        </div>
        <p className="mt-2 text-white/70">{tagline}</p>
        <div className="mt-6 h-40 rounded-2xl bg-[radial-gradient(300px_140px_at_50%_10%,rgba(255,255,255,0.35),transparent)]" />
        <div className="mt-6 flex gap-3">
          <a href="#" className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90">Buy</a>
          <a href="#" className="px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:border-white/40">Learn more</a>
        </div>
      </div>
    </div>
  );
}

function ProductShowcase() {
  const products = [
    { name: "Nimbus Phone", tagline: "A camera that sees in the dark.", price: "From $799", colorFrom: "#34d399", colorTo: "#60a5fa" },
    { name: "Nimbus Watch", tagline: "Health reimagined on your wrist.", price: "From $399", colorFrom: "#f472b6", colorTo: "#f59e0b" },
    { name: "Nimbus Buds", tagline: "Silence has never sounded better.", price: "From $199", colorFrom: "#a78bfa", colorTo: "#22d3ee" },
  ];

  return (
    <section id="products" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet the line‑up</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Thoughtfully designed devices that work beautifully together.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductTile key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
