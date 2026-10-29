import { menuItems } from "../data/siteData";

function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            Menu Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--brand-brown)] md:text-5xl">
            Pilihan martabak favorit
          </h2>
        </div>

        <a
          href="#kontak"
          className="inline-flex rounded-full border border-[var(--brand-red)] px-5 py-3 text-sm font-semibold text-[var(--brand-red)] transition hover:bg-[var(--brand-soft)]"
        >
          Pesan sekarang
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-[28px] border border-[#efe3d7] bg-white shadow-lg shadow-[#f0e0d0] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-[#2a1f1b]">{item.name}</h3>
                <span className="rounded-full bg-[var(--brand-soft)] px-2 py-1 text-[10px] font-semibold text-[var(--brand-red-dark)]">
                  {item.category}
                </span>
              </div>

              <p className="text-sm leading-6 text-[#5b463f]">{item.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[var(--brand-red)]">{item.price}</span>
                <button className="rounded-full bg-[var(--brand-brown)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#312924]">
                  Pesan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;