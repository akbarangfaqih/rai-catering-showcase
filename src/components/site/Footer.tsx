import { WHATSAPP_URL, INSTAGRAM_URL, WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground font-display text-lg shadow-gold">
              R
            </span>
            <span className="font-display text-xl text-cocoa">
              Rai <span className="text-gold">Catering</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sajian praktis, lezat, dan elegan untuk berbagai acara — dari momen
            harian hingga hadiah istimewa.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base text-cocoa">Layanan</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Nasi Box</li>
            <li>Snack Box</li>
            <li>Bolu &amp; Kue Acara</li>
            <li>Parsel / Hampers</li>
            <li>Paket Custom Acara</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-cocoa">Kontak</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-gold"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-cocoa">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
                </span>
                WhatsApp {WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-gold"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream text-cocoa">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg>
                </span>
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Rai Catering. Semua hak dilindungi.</p>
          <p>Dibuat dengan ♥ untuk setiap momen istimewa Anda.</p>
        </div>
      </div>
    </footer>
  );
}
