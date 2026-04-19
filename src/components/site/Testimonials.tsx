const items = [
  {
    name: "Ibu Sari",
    role: "Arisan Keluarga",
    text: "Snack box-nya rapi banget, rasanya enak semua. Tamu arisan saya sampai tanya pesan di mana. Pasti pesan lagi!",
  },
  {
    name: "Pak Andi",
    role: "Rapat Kantor",
    text: "Pesan nasi box untuk meeting tim, datang tepat waktu, kemasan profesional, dan rasanya juara. Recommended.",
  },
  {
    name: "Mbak Diana",
    role: "Ulang Tahun Anak",
    text: "Bolunya lembut, hiasannya cantik, anak-anak suka banget. Pelayanan ramah dan komunikasinya enak.",
  },
  {
    name: "Bu Rini",
    role: "Hadiah Lebaran",
    text: "Kirim parsel ke saudara, semua bilang kemasannya elegan dan isinya enak. Terima kasih Rai Catering!",
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Testimoni
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Kata mereka tentang Rai Catering
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-3xl border border-border bg-background p-8 shadow-soft"
            >
              <span className="absolute -top-4 left-7 font-display text-6xl leading-none text-gold/70">“</span>
              <blockquote className="mt-2 text-base leading-relaxed text-foreground/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-sage font-display text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-base text-cocoa">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto text-gold">★★★★★</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
