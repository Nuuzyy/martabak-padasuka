import { trustPoints } from "../data/siteData";

function TrustBar() {
  return (
    <section className="bg-[var(--brand-brown)] py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-4">
        {trustPoints.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#3a2f2a] bg-[#241d1a] p-4 text-center"
          >
            <p className="text-2xl font-black text-[#f5d8b5]">{item.title}</p>
            <p className="mt-2 text-sm text-[#e7ddd6]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;