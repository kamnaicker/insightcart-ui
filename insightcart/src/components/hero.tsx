import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  headline: string;
  heroImg: string;
  photoGrapher?: string;
  photoLink?: string;
}

export default async function Hero({
  headline,
  heroImg,
  photoGrapher,
  photoLink,
}: HeroProps) {
  return (
        <section className={cn(
      'relative isolate overflow-hidden rounded-3xl',
      'shadow-xl shadow-black/10 ring-1 ring-white/10'
      )}>
        {/* background image */}
        <Image
          src={heroImg}
          alt={headline}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* translucent overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* headline card */}
        <div className="relative z-10 m-auto max-w-xl p-12 text-center">
          <h1 className="text-4xl font-semibold text-white drop-shadow-sm">
            {headline}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Personalised demo in real time.
          </p>
        </div>

        {/* Unsplash attribution */}
        {photoLink && (
          <a
            href={photoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-3 z-10 text-[10px] text-white/70 hover:text-white"
          >
            Photo by {photoGrapher} · Unsplash
          </a>
        )}
      </section>
    );
}