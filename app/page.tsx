import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VenueSection from "./venue-section";
import PhotoGallery from "./gallery-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-4">
        <div className="max-w-4xl w-full space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            you’re about to witness the beginning of
          </p>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            REZKITA
          </h1>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">&</h1>

          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
            HARIS
          </h1>

          <div className="space-y-1">
            <p className="text-sm text-gray-500">25 MAY 2025</p>
            <p className="text-sm text-gray-500">SOLO, INDONESIA</p>
          </div>

          <div className="pt-8">
            <Image
              src="/cat-1.png"
              alt="Upin silhouette"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* <section className="w-full px-4">
        <div className="max-w-2xl mx-auto">
          <p className="uppercase text-sm tracking-wide leading-relaxed text-center">
            WE INVITE YOU TO JOIN US AS WE EXCHANGE VOWS AND CELEBRATE THE LOVE
            THAT HAS BROUGHT US HERE.
          </p>
          <p className="text-xs text-gray-500 mt-6 text-center">
            A journey starts in the making, one culminating in a moment we can't
            wait to share with you.
          </p>
        </div>
      </section> */}
      {/* Gallery Section */}
      <PhotoGallery></PhotoGallery>

      <VenueSection></VenueSection>

      {/* Dress Code Section */}
      <section className="w-full py-6 bg-[#faf9f6]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-8">DRESS CODE</h2>

          {/* <div className="space-y-2 mb-8">
            <p className="text-neutral-500 text-lg">
              Mengingat acara akan dilaksanakan di masjid, maka tamu dihimbau
              untuk mengenakan pakaian yang sopan dan tertutup dengan pilihan
              warna sebagai berikut:
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#d2b48c]"></div>
            <div className="w-16 h-16 rounded-full bg-[#c19a6b]"></div>
            <div className="w-16 h-16 rounded-full bg-[#a67b5b]"></div>
            <div className="w-16 h-16 rounded-full bg-[#d3c7b8]"></div>
          </div> */}
          {/* Bilingual explanation */}
          <div className="space-y-6 mb-12">
            <p className="text-sm text-center text-gray-700">
              Mengingat acara akan dilaksanakan di masjid, maka tamu dihimbau
              untuk mengenakan{" "}
              <span className="font-medium">
                pakaian yang sopan dan tertutup
              </span>{" "}
              dengan pilihan warna sebagai berikut:
            </p>
          </div>

          {/* Color palette section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Main colors */}
            <div className="flex flex-col items-center">
              <h3 className="uppercase text-sm tracking-widest font-medium mb-6">
                Warna Utama / Main Colors
              </h3>
              <div className="w-40 h-40 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <div className="w-36 h-36 rounded-full bg-[#f9f9f9] flex items-center justify-center">
                  <span className="text-gray-400 text-xs uppercase tracking-wider">
                    White / Off-white
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Putih / Broken White
              </p>
            </div>

            {/* Accent colors */}
            <div className="flex flex-col items-center">
              <h3 className="uppercase text-sm tracking-widest font-medium mb-6">
                Warna Aksen / Accent Colors
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#a67b5b] shadow-sm"></div>
                  <p className="mt-2 text-sm text-gray-600">Brown / Coklat</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#d2b48c] shadow-sm"></div>
                  <p className="mt-2 text-sm text-gray-600">Beige / Krem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="w-full py-10">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">RSVP</h2>
          <p className="text-sm mb-6">
            Harap beri tahu kami apakah Anda dapat bergabung dengan kami dengan
            mengonfirmasikan kehadiran Anda.
          </p>

          <Link
            href="https://wa.me/081227993475?text=Halo%20Haris%20dan%20Rezkita!%0ANama%3A%0AHadir%3A%20Ya%20%2F%20Tidak%0AJumlah%20kehadiran%3A%20%0AApakah%20datang%20dengan%20mobil%3F%20Jika%20iya%2C%20berapa%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-4 text-xs uppercase tracking-widest transition-colors bg-[#4A6151]"
          >
            RSVP via WhatsApp
          </Link>
          <div className="text-sm py-4">
            <p>
              Konfirmasi maksimal sebelum{" "}
              <span className="text-medium">23 Mei 2025</span>
            </p>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section id="registry" className="w-full py-6">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-8">GIFT REGISTRY</h2>

          <p className="text-sm mb-8">
            Kehadiran Anda di acara pernikahan kami adalah hadiah terindah.
            Namun, jika Anda ingin memberi kami hadiah, kami telah membuat
            daftar hadiah untuk membantu Anda.
          </p>

          <div className="mt-8">
            <Link
              href="https://bit.ly/GiftHariKita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-4 text-xs uppercase tracking-widest transition-colors bg-[#4A6151]"
            >
              View our Gift Registry
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12">
        <h2 className="text-3xl font-serif text-center mb-12">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="max-w-2xl mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Bisakah saya membawa satu orang lagi?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Karena keterbatasan tempat, kami hanya dapat mengakomodasi tamu
                yang namanya tercantum dalam undangan. Terima kasih atas
                pengertian Anda.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Apakah kami menerima sumbangan pernikahan?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Kami sangat berterima kasih atas tawaran baik Anda, tetapi kami
                tidak akan menerima sumbangan untuk pernikahan kami karena ini
                merupakan upacara khusus bagi kami.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Apakah anak-anak diperbolehkan hadir di pesta pernikahan?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Meskipun kami menyayangi anak-anak kecil Anda, kami telah
                memutuskan untuk menjadikan perayaan kami khusus untuk orang
                dewasa. Kami harap ini memungkinkan Anda menikmati pagi hari
                sepenuhnya!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Apakah akan ada area parkir yang tersedia?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Parkir gratis tersedia di lokasi. Parkir tambahan dapat
                ditemukan di area parkir umum terdekat, 5 menit berjalan kaki
                dari lokasi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
