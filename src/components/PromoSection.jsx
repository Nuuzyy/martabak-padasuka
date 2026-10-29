import { promos } from "../data/siteData";

function PromoSection() {
  return (
    <section id="promo" className="bg-[#fffaf4] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Promo Spesial
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--brand-brown)] md:text-5xl">
            Jangan lewatkan penawaran hari ini
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="rounded-[30px] bg-[#1f1a17] p-7 text-white shadow-xl shadow-[#d7b79a]"
            >
              <span className="inline-block rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-red-dark)]">
                {promo.badge}
              </span>

              <h3 className="mt-5 text-2xl font-bold">{promo.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#f2eae4]">{promo.description}</p>

              <button className="mt-6 rounded-full bg-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-red-dark)]">
                Ambil Promo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoSection;