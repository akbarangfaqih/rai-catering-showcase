import nasi from "@/assets/nasi-box.jpg";
import snack from "@/assets/snack-box.jpg";
import bolu from "@/assets/bolu.jpg";
import parsel from "@/assets/parsel.jpg";

const highlights = [
  { img: nasi, title: "Nasi Box untuk Rapat & Acara Keluarga", desc: "Praktis, mengenyangkan, dengan cita rasa rumahan terbaik." },
  { img: snack, title: "Snack Box untuk Meeting & Arisan", desc: "Aneka kue tradisional dan modern dalam satu kemasan elegan." },
  { img: bolu, title: "Bolu untuk Ulang Tahun & Syukuran", desc: "Lembut, manis pas, tampilan cantik untuk momen istimewa." },
  { img: parsel, title: "Parsel untuk Hadiah & Momen Spesial", desc: "Kemasan premium yang siap menyentuh hati penerimanya." },
];

export function Highlights() {
  return (
    <section className="bg-gradient-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Produk Unggulan
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Dipilih untuk setiap suasana
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {highlights.map((h, i) => (
            <article
              key={h.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-background shadow-soft transition-all hover:shadow-elegant sm:flex-row"
            >
              <div className="relative sm:w-2/5">
                <img
                  src={h.img}
                  alt={h.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-56 w-full object-cover sm:h-full"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground shadow-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-center p-7">
                <h3 className="font-display text-xl text-cocoa md:text-2xl">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
