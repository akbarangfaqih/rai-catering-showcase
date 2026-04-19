import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Features } from "@/components/site/Features";
import { Highlights } from "@/components/site/Highlights";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rai Catering | Nasi Box, Snack Box, Bolu, dan Parsel untuk Berbagai Acara",
      },
      {
        name: "description",
        content:
          "Rai Catering menyediakan nasi box, snack box, bolu, dan parsel untuk berbagai acara keluarga, kantor, ulang tahun, syukuran, dan momen spesial lainnya.",
      },
      {
        property: "og:title",
        content:
          "Rai Catering | Nasi Box, Snack Box, Bolu, dan Parsel untuk Berbagai Acara",
      },
      {
        property: "og:description",
        content:
          "Sajian praktis, lezat, higienis, dan elegan untuk acara keluarga, kantor, hingga momen spesial Anda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Highlights />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
