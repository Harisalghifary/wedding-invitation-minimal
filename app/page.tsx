import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VenueSection from "./venue-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-16">
        <div className="max-w-4xl w-full space-y-6 mt-16">
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

          <div className="max-w-2xl mx-auto pt-16">
            <p className="uppercase text-sm tracking-wide leading-relaxed">
              WE INVITE YOU TO JOIN US AS WE EXCHANGE VOWS AND CELEBRATE THE
              LOVE THAT HAS BROUGHT US HERE.
            </p>
            <p className="text-xs text-gray-500 mt-6">
              A journey starts in the making, one culminating in a moment we
              can't wait to share with you.
            </p>

            <div className="mt-8">
              <Link
                href="#our-story"
                className="uppercase text-xs tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] relative">
            <Image
              src="/cover.jpeg?height=600&width=450"
              alt="Couple portrait"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[3/4] relative">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Engagement ring"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Schedule Section
      <section className="w-full py-16 bg-[#f5f5f2]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div className="aspect-square relative">
            <Image
              src="/mosque_1.jpg?height=500&width=500"
              alt="Welcome dinner venue"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <p className="uppercase text-sm tracking-widest text-gray-500">
                25TH MAY 2025
              </p>
              <h2 className="text-2xl md:text-3xl font-serif uppercase">
                AKAD
              </h2>

              <div className="space-y-2 text-sm">
                <p className="font-medium">7:30 PM</p>
                <p>Saminah Sehyadi Mosque</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <VenueSection></VenueSection>
      {/* Ceremony Section
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="space-y-6">
              <p className="uppercase text-sm tracking-widest text-gray-500">
                15TH JULY 2026
              </p>
              <h2 className="text-2xl md:text-3xl font-serif uppercase">
                CEREMONY & RECEPTION
              </h2>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium">2:00 PM</p>
                  <p>Ceremony at Beachfront</p>
                </div>

                <div>
                  <p className="font-medium">6:30 PM</p>
                  <p>Reception at The Royal Garden Resort</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-[3/4] relative order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Ceremony venue"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section> */}
      {/* Dresscode Section
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-serif uppercase">
                DRESS CODE
              </h2>

              <div className="space-y-8">
                <div className="space-y-1">
                  <p className="text-sm text-neutral-500">Gentlemen: Suit</p>
                  <p className="text-sm text-neutral-500">Ladies: Gown</p>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-neutral-200">
                    <svg className="w-full h-full" viewBox="0 0 100 20">
                      <path
                        d="M0,10 Q25,20 50,10 T100,10"
                        fill="none"
                        stroke="black"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-sm text-neutral-500">
                  We&apos;d like to see you in these shades:
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#d2b48c]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#c19a6b]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#a67b5b]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#c4b7a6]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Dress Code Section */}
      <section className="w-full py-12 bg-[#faf9f6]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-serif mb-8">DRESS CODE</h2>

          <div className="space-y-2 mb-8">
            <p className="text-neutral-500 text-lg">
              Gentlemen: Muslim or Shirt
            </p>
            <p className="text-neutral-500 text-lg">Ladies: Muslim or Shirt</p>
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

      <section>
        <div className="max-w-4xl mx-auto mt-16 px-4">
          <div className="flex justify-center">
            <Link
              href="#travel"
              className="uppercase text-xs tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
            >
              Travel Information
            </Link>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="w-full py-16">
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

            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-normal uppercase text-sm tracking-wide">
                What will the weather be like in Solo in May?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 pt-2 pb-4">
                May is during Solo's dry season with average temperatures
                between 73-86°F (23-30°C).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Gift Registry Section */}
      <section id="registry" className="w-full py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">
            GIFT REGISTRY
          </h2>

          <p className="text-sm mb-8 max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honor us with a gift, we've created a registry to
            help you.
          </p>

          <div className="grid gap-6 md:grid-cols-2 max-w-lg mx-auto">
            <Link
              href="https://www.example.com/registry1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 hover:border-gray-400 transition-colors"
            >
              <h3 className="font-serif text-lg mb-2">Amazon</h3>
              <p className="text-sm text-gray-600">View our Amazon registry</p>
            </Link>

            <Link
              href="https://www.example.com/registry2"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 hover:border-gray-400 transition-colors"
            >
              <h3 className="font-serif text-lg mb-2">Crate & Barrel</h3>
              <p className="text-sm text-gray-600">
                View our Crate & Barrel registry
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* RSVP Section */}
      <section id="rsvp" className="w-full py-16 bg-[#f5f5f2]">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">RSVP</h2>
          <p className="text-sm mb-8">
            Please let us know if you'll be able to join us by confirming your
            attendance.
          </p>

          <div className="text-sm mb-4">
            <p>RSVP BY 18 May, 2025</p>
          </div>

          <Link
            href="https://wa.me/081227993475?text=Hello%Haris%20and%Rezkita%2C%20I%20would%20like%20to%20RSVP%20for%20your%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-6 text-xs uppercase tracking-widest transition-colors"
          >
            RSVP via WhatsApp
          </Link>

          <div className="mt-6">
            <Image
              src="/cat-2.png"
              alt="Mountain silhouette"
              width={80}
              height={20}
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
