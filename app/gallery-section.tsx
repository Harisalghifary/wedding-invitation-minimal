import Image from "next/image";

export default function PhotoGallery() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          PHOTO GALLERY
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* First column */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative">
              <Image
                src="/cover.jpeg"
                alt="Couple by fountain"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/us-3.jpg"
                alt="Couple portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/us-5.jpg"
                alt="Couple portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Second column */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative">
              <Image
                src="/us-1.jpg"
                alt="Couple on stairs"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/us-4.jpg"
                alt="Couple portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/us-6.jpg"
                alt="Couple portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
