import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 bg-[#faf9f6]/90 backdrop-blur-sm border-b border-gray-100">
      <Link href="/" className="font-serif text-2xl items-center">
        RH
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="#synopsis"
          className="text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          Synopsis
        </Link>
        <Link
          href="#venue"
          className="text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          Venue
        </Link>
        <Link
          href="#rsvp"
          className="text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          RSVP
        </Link>
        <Link
          href="#registry"
          className="text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          Registry
        </Link>
        <Link
          href="#faq"
          className="text-xs uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          FAQs
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <nav className="flex flex-col gap-6 mt-16">
            <Link
              href="#synopsis"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Synopsis
            </Link>
            <Link
              href="#venue"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Venue
            </Link>
            <Link
              href="#rsvp"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              RSVP
            </Link>
            <Link
              href="#registry"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Registry
            </Link>
            <Link
              href="#faq"
              className="text-sm uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              FAQs
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
