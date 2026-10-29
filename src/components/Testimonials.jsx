import { testimonials } from "../data/siteData";

function Testimonials() {
  return (
    <section id="testimoni" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
          Testimoni
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[var(--brand-brown)] md:text-5xl">
          Pelanggan kami puas
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-[28px] bg-[#fffaf4] p-6 shadow-lg shadow-[#f0e3d3]"
          >
            <div className="mb-4 text-[#d88d53]">{"★".repeat(item.rating)}</div>
            <p className="text-sm leading-7 text-[#4e403a]">“{item.text}”</p>

            <div className="mt-6 border-t border-[#eadcc8] pt-4">
              <h4 className="font-bold text-[#231d1a]">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;