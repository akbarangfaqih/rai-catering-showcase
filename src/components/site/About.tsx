export function About() {
  return (
    <section id="tentang" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-5 md:gap-16">
        <div className="md:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Tentang Kami
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-cocoa md:text-4xl">
            Sajian rumahan dengan kualitas premium.
          </h2>
        </div>
        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="font-display text-cocoa">Rai Catering</span> hadir
            untuk Anda yang menginginkan makanan acara dengan rasa lezat, bahan
            yang segar, serta proses pengolahan yang menjaga kebersihan di
            setiap tahapnya. Kami percaya bahwa setiap acara — sekecil apa pun —
            layak disambut dengan sajian yang istimewa.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Mulai dari nasi box untuk rapat kantor, snack box untuk arisan,
            bolu untuk ulang tahun dan syukuran, hingga parsel hangat sebagai
            hadiah momen spesial — semuanya kami siapkan dengan sepenuh hati,
            kemasan yang rapi, dan pelayanan yang ramah.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { v: "100%", l: "Bahan Fresh" },
              { v: "Higienis", l: "Pengolahan" },
              { v: "Tepat", l: "Waktu Pesanan" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl text-cocoa md:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
