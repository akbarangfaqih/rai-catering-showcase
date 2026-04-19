import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import nasi from "@/assets/nasi-box.jpg";
import bolu from "@/assets/bolu.jpg";

const images = [
  { src: g1, alt: "Nasi box untuk meeting kantor", className: "md:col-span-2 md:row-span-2" },
  { src: bolu, alt: "Bolu cantik untuk perayaan" },
  { src: g3, alt: "Parsel premium" },
  { src: g2, alt: "Perayaan ulang tahun keluarga" },
  { src: nasi, alt: "Nasi box rumahan premium" },
  { src: g4, alt: "Snack box untuk pengajian", className: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Galeri
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Sentuhan rapi di setiap sajian
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
