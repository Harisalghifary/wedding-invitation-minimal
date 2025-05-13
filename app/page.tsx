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
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-8">
        <div className="max-w-4xl w-full space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            A Journey Begins
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

      <section className="w-full px-4">
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
      </section>
      {/* Gallery Section */}
      <PhotoGallery></PhotoGallery>

      <VenueSection></VenueSection>

      {/* Dress Code Section */}
      <section className="w-full py-6 bg-[#faf9f6]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-8">DRESS CODE</h2>

          <div className="space-y-2 mb-8">
            <p className="text-neutral-500 text-lg">
              Tolong gunakan pakaian yang sopan dan tertutup.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          <p className="text-gray-600 text-lg mb-10">
            We'd like to see you in these shades:
          </p>

          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#d2b48c]"></div>
            <div className="w-16 h-16 rounded-full bg-[#c19a6b]"></div>
            <div className="w-16 h-16 rounded-full bg-[#a67b5b]"></div>
            <div className="w-16 h-16 rounded-full bg-[#d3c7b8]"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Can I bring a plus one?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Due to venue constraints, we can only accommodate those guests
                named on the invitation. Thank you for your understanding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Are we accept wedding donation?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                We’re really thankful for your kind offer, but we won’t be
                accepting donations for our wedding since it’s a special
                ceremony for us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Are children welcome at the wedding?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                While we adore your little ones, we’ve decided to make our
                celebration adults-only. We hope this allows you to fully enjoy
                the morning!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                Will there be vegetarian/vegan options available?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                Sorry, we won’t have any vegetarian or vegan options available.
                Thanks for understanding!.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section id="registry" className="w-full py-6">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-8">GIFT REGISTRY</h2>

          <p className="text-sm mb-8">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honor us with a gift, we've created a registry to
            help you.
          </p>

          <div className="mt-8">
            <Link
              href="https://bit.ly/GiftHariKita"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-xs tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
            >
              View our Wedding Registry
            </Link>
          </div>
        </div>
      </section>
      {/* RSVP Section */}
      <section id="rsvp" className="w-full py-10 bg-[#f5f5f2]">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">RSVP</h2>
          <p className="text-sm mb-8">
            Please let us know if you'll be able to join us by confirming your
            attendance.
          </p>

          <div className="text-sm mb-4">
            <p>RSVP BY 20 May, 2025</p>
          </div>

          <Link
            href="https://wa.me/081227993475?text=Halo%20Haris%20dan%20Rezkita!%0ANama%3A%0AHadir%3A%20Ya%20%2F%20Tidak%0AJumlah%20kehadiran%3A%20%0AApakah%20datang%20dengan%20mobil%3F%20Jika%20iya%2C%20berapa%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white px-6 py-4 text-xs uppercase tracking-widest transition-colors"
          >
            RSVP via WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
