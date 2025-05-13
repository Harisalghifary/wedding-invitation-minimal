import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar } from "lucide-react";

export default function VenueSection() {
  return (
    <section id="venue" className="w-full py-6 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">
          THE VENUE
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src="/mosque_1.jpg"
                alt="Saminah Sihyadi Mosque"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="hidden md:block">
              <Link
                href="https://maps.app.goo.gl/tWVeDSV7xehgo5X6A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm uppercase tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat di Maps
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="uppercase text-sm tracking-widest text-gray-500">
                CEREMONY
              </p>
              <h3 className="text-3xl md:text-4xl font-serif">AKAD</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-4 mt-0.5 text-gray-700" />
                <div>
                  <p className="font-medium">25 MEI 2025</p>
                  <p className="text-sm text-gray-600 mt-1">AHAD</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-4 mt-0.5 text-gray-700" />
                <div>
                  <p className="font-medium">7:30 - 10:00</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tamu dapat datang mulai jam 07:00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-0.5 text-gray-700" />
                <div>
                  <p className="font-medium">Masjid Saminah Sihyadi</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Jl. Tirtonadi No.9,
                    <br />
                    Solo, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-700 text-justify">
                Masjid Saminah Sehyadi berdiri anggun dengan arsitektur Islam
                modern dan kubah bertekstur yang khas. Dalam ketenangannya, kami
                menemukan ruang paling layak untuk mengikrarkan janji suci.
              </p>

              <div className="md:hidden">
                <Link
                  href="https://maps.app.goo.gl/tWVeDSV7xehgo5X6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm uppercase tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Lihat di Maps
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[4/3] relative overflow-hidden rounded-md">
            <Image
              src="/1.png"
              alt="Mosque Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden rounded-md">
            <Image
              src="/2.png"
              alt="Mosque Ceiling"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-[4/3] relative overflow-hidden rounded-md">
            <Image
              src="/3.png"
              alt="Mosque Tower"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
