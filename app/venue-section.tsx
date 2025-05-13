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
                View on Map
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
                  <p className="font-medium">25TH MAY 2025</p>
                  <p className="text-sm text-gray-600 mt-1">Sunday</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-4 mt-0.5 text-gray-700" />
                <div>
                  <p className="font-medium">7:30 AM</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Doors open at 7:00 AM
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-0.5 text-gray-700" />
                <div>
                  <p className="font-medium">Saminah Sihyadi Mosque</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Jl. Tirtonadi Street No. 9
                    <br />
                    Solo, Central Java
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-700">
                The Saminah Sehyadi Mosque features stunning modern Islamic
                architecture with its distinctive textured dome. The serene
                atmosphere provides the perfect setting for our sacred ceremony.
              </p>

              <div className="md:hidden">
                <Link
                  href="https://maps.app.goo.gl/tWVeDSV7xehgo5X6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm uppercase tracking-widest border-b border-gray-400 pb-1 hover:border-gray-900 transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
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

        <div className="mt-12 text-center">
          <h4 className="text-lg font-medium mb-4">Parking Information</h4>
          <p className="text-sm text-gray-700 max-w-xl mx-auto">
            Complimentary parking is available on-site. Additional parking can
            be found at the nearby public parking area, a 5-minute walk from the
            venue.
          </p>
        </div>
      </div>
    </section>
  );
}
