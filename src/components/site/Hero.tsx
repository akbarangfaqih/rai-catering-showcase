import heroImg from "@/assets/hero-rai.jpg";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-gradient-gold opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-gradient-sage opacity-25 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 md:grid-cols-2 md:gap-10 md:pb-28">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cocoa">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Catering Premium untuk Acara Anda
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-cocoa sm:text-5xl md:text-6xl">
            Nasi Box, Snack Box, Bolu &amp; Parsel
            <span className="block text-gold">untuk Berbagai Acara</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Rai Catering menyediakan sajian praktis, lezat, higienis, dan elegan
            untuk kebutuhan acara keluarga, kantor, hingga momen spesial Anda.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.392l-.999 3.648 3.893-1.04zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Pesan via WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-cocoa transition-all hover:border-gold hover:bg-cream"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Lihat Instagram
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span>✓ Higienis</span>
            <span>✓ Tepat Waktu</span>
            <span>✓ Custom Pesanan</span>
            <span>✓ Kemasan Rapi</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-warm opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 shadow-elegant">
            <img
              src={heroImg}
              alt="Sajian nasi box premium Rai Catering dengan kemasan elegan"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-sage text-primary-foreground font-display text-lg">★</div>
              <div>
                <p className="font-display text-lg leading-none text-cocoa">100+</p>
                <p className="text-xs text-muted-foreground">Acara terlayani</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -right-3 hidden rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-elegant sm:block animate-float">
            <p className="text-xs uppercase tracking-widest text-gold">Premium</p>
            <p className="font-display text-sm text-cocoa">Higienis & Lezat</p>
          </div>
        </div>
      </div>
    </section>
  );
}
