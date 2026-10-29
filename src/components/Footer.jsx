import { brandName } from "../data/siteData";

function Footer() {
  return (
    <footer className="border-t border-[#ead8c6] bg-[var(--brand-cream)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black text-[var(--brand-red-dark)]">{brandName}</h3>
          <p className="mt-2 text-sm text-[#5d4d46]">Lezatnya martabak untuk setiap momen.</p>
        </div>

        <div className="flex gap-6 text-sm text-[#5d4d46]">
          <a href="#home" className="transition hover:text-[var(--brand-red)]">Home</a>
          <a href="#menu" className="transition hover:text-[var(--brand-red)]">Menu</a>
          <a href="#promo" className="transition hover:text-[var(--brand-red)]">Promo</a>
          <a href="#testimoni" className="transition hover:text-[var(--brand-red)]">Testimoni</a>
          <a href="#kontak" className="transition hover:text-[var(--brand-red)]">Kontak</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;