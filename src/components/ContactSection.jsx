function ContactSection() {
  return (
    <section id="kontak" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-8 rounded-[32px] bg-[var(--brand-brown)] p-8 text-white shadow-2xl shadow-[#d8b395] md:grid-cols-2 md:p-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c995]">
            Order cepat
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Mau martabak favoritmu sekarang?
          </h2>

          <div className="space-y-3 pt-4 text-[#f0eae6]">
            <p>📍 Jl. Padasuka, Kota Bandung</p>
            <p>📞 +62 831-5712-xxxx</p>
            <p>🕒 Senin - Minggu, 07.00 - Sehabisnya</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/628315712xxxx"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[var(--brand-red)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-red-dark)]"
            >
              Chat WhatsApp
            </a>

            <a
              href="#menu"
              className="inline-block rounded-full border border-[var(--brand-red)] bg-white px-6 py-3 font-semibold text-[var(--brand-red)] transition hover:bg-[var(--brand-soft)]"
            >
              Lihat Menu
            </a>
          </div>
        </div>

        <form className="space-y-4 rounded-[24px] bg-white p-6 text-[#241d1a]">
          <div>
            <label className="mb-2 block text-sm font-semibold">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="w-full rounded-xl border border-[#ead9c5] bg-[#fdf8f4] px-4 py-3 outline-none focus:border-[var(--brand-red)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Nomor WhatsApp</label>
            <input
              type="text"
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-xl border border-[#ead9c5] bg-[#fdf8f4] px-4 py-3 outline-none focus:border-[var(--brand-red)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Menu yang dipesan</label>
            <input
              type="text"
              placeholder="Contoh: Martabak Coklat Keju"
              className="w-full rounded-xl border border-[#ead9c5] bg-[#fdf8f4] px-4 py-3 outline-none focus:border-[var(--brand-red)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">Catatan</label>
            <textarea
              rows="4"
              placeholder="Contoh: Tambahkan keju ekstra, kirim siang hari"
              className="w-full rounded-xl border border-[#ead9c5] bg-[#fdf8f4] px-4 py-3 outline-none focus:border-[var(--brand-red)]"
            />
          </div>

          <button className="w-full rounded-full bg-[var(--brand-brown)] px-5 py-3 font-semibold text-white transition hover:bg-[#312924]">
            Pesan Sekarang
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;