import nasi from "@/assets/nasi-box.jpg";
import snack from "@/assets/snack-box.jpg";
import bolu from "@/assets/bolu.jpg";
import parsel from "@/assets/parsel.jpg";
import custom from "@/assets/custom-paket.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

const items = [
  {
    img: nasi,
    title: "Nasi Box",
    desc: "Lauk lengkap, porsi pas, kemasan rapi — siap untuk rapat kantor hingga acara keluarga.",
    tag: "Best Seller",
  },
  {
    img: snack,
    title: "Snack Box",
    desc: "Aneka kue dan camilan pilihan dalam kemasan elegan, cocok untuk meeting, arisan, dan pengajian.",
    tag: "Favorit Arisan",
  },
  {
    img: bolu,
    title: "Bolu / Kue Acara",
    desc: "Bolu lembut dan kue spesial untuk ulang tahun, syukuran, dan momen istimewa lainnya.",
    tag: "Spesial",
  },
  {
    img: parsel,
    title: "Parsel / Hampers",
    desc: "Hadiah elegan dengan kemasan premium untuk hari raya, ucapan terima kasih, dan momen spesial.",
    tag: "Premium",
  },
  {
    img: custom,
    title: "Paket Custom Acara",
    desc: "Paket fleksibel sesuai jumlah tamu, menu, dan tema acara Anda — kami bantu siapkan semuanya.",
    tag: "Bisa Custom",
  },
];

export function Products() {
  return (
    <section id="produk" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Produk &amp; Layanan
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Pilihan sajian untuk setiap momen Anda
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dari sajian harian sampai hadiah istimewa — kami siap membantu Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${
                i === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-gold backdrop-blur">
                  {it.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-cocoa">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cocoa transition-colors hover:text-gold"
                >
                  Pesan sekarang
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
