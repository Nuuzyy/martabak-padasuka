import { brandName } from "../data/siteData";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,40,40,0.12),_transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--brand-red-dark)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-red)]" />
            Promo hari ini: diskon 10%
          </div>

          <h1 className="text-4xl font-black leading-tight text-[var(--brand-brown)] md:text-6xl">
            Martabak favorit
            <span className="block text-[var(--brand-red)]">yang bikin order lagi</span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-[#4d403a]">
            Cita rasa autentik, bahan premium, dan proses cepat. Cocok untuk keluarga,
            teman nongkrong, atau acara spesial yang butuh makanan hangat dan menggoda.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#kontak">
              <button className="rounded-full bg-[var(--brand-red)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-red-dark)]">
                Pesan Sekarang
              </button>
            </a>

            <a href="#menu">
              <button className="rounded-full border border-[var(--brand-red)] bg-white px-6 py-3 font-semibold text-[var(--brand-red)] transition hover:bg-[var(--brand-soft)]">
                Lihat Menu
              </button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-sm text-[#5d4d46]">
            <span>✅ Fresh tiap hari</span>
            <span>✅ Bahan premium</span>
            <span>✅ Order cepat</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-[#f3d3a1] blur-2xl" />
          <div className="absolute -right-4 bottom-6 h-32 w-32 rounded-full bg-[#d88d53] blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-[#f0dfd0] bg-white p-3 shadow-2xl shadow-[#d7b398]/30">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
              alt={brandName}
              className="h-[520px] w-full rounded-[24px] object-cover"
            />

            <div className="absolute bottom-8 left-8 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                Best Seller
              </p>
              <p className="mt-1 text-xl font-bold text-[var(--brand-brown)]">Martabak Coklat Keju</p>
              <p className="mt-1 text-sm text-[#5d4d46]">Rp 35.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;