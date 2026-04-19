const features = [
  { icon: "🌿", title: "Bahan Fresh & Higienis", desc: "Bahan pilihan, diolah dengan standar kebersihan yang kami jaga ketat." },
  { icon: "👌", title: "Rasa Lezat & Berkualitas", desc: "Resep rumahan yang dimasak dengan sepenuh hati untuk cita rasa yang memikat." },
  { icon: "🎁", title: "Kemasan Rapi & Menarik", desc: "Tampilan elegan yang membuat sajian Anda terasa lebih istimewa." },
  { icon: "🎉", title: "Cocok untuk Berbagai Acara", desc: "Keluarga, kantor, arisan, ulang tahun, hingga hajatan komunitas." },
  { icon: "✨", title: "Bisa Custom Sesuai Kebutuhan", desc: "Menu, porsi, dan tema bisa disesuaikan dengan acara Anda." },
  { icon: "💬", title: "Pelayanan Ramah & Profesional", desc: "Konsultasi mudah lewat WhatsApp, kami bantu dari awal sampai selesai." },
  { icon: "🛒", title: "Pemesanan Mudah", desc: "Cukup chat WhatsApp — pesanan langsung kami proses dengan cepat." },
  { icon: "⏱️", title: "Tepat Waktu & Terpercaya", desc: "Sajian sampai sesuai jadwal — agar acara Anda berjalan tanpa hambatan." },
];

export function Features() {
  return (
    <section id="keunggulan" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Keunggulan Kami
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Kenapa memilih Rai Catering?
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-gold/60 hover:bg-cream hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-warm text-2xl shadow-soft transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-lg text-cocoa">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
