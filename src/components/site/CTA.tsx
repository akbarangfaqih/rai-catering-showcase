import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/contact";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-center shadow-elegant md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-sage/30 blur-3xl" />

          <span className="relative inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Siap Melayani
          </span>

          <h2 className="relative mt-6 font-display text-3xl leading-tight text-primary-foreground md:text-5xl">
            Butuh nasi box, snack box, bolu, atau parsel
            <span className="block text-gold">untuk acara Anda?</span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Hubungi Rai Catering sekarang untuk pemesanan dan konsultasi.
            Kami bantu siapkan sajian terbaik untuk momen istimewa Anda.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary shadow-gold transition-all hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.392l-.999 3.648 3.893-1.04z"/></svg>
              Pesan via WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Lihat Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
