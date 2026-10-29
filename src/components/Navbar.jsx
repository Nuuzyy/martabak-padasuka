import { brandName, navItems } from "../data/siteData";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7d7c5] bg-[var(--brand-cream)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-black tracking-tight text-[var(--brand-red-dark)]">
          {brandName}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--brand-brown)] transition hover:text-[var(--brand-red)]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[var(--brand-red)] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--brand-red-dark)]"
        >
          Order via WhatsApp
        </a>
      </nav>
    </header>
  );
}

export default Navbar;