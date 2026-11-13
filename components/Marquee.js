import { marquee } from "@/lib/profile";

export default function Marquee() {
  const unit = [...marquee, ...marquee, ...marquee, ...marquee];
  const loop = [...unit, ...unit];

  return (
    <section aria-hidden="true" className="marquee relative z-20 bg-white py-10 sm:py-14">
      <div className="marquee-band bg-brand py-3.5 text-white shadow-[0_18px_40px_-18px_rgba(13,68,38,0.8)]">
        <div className="marquee-track flex w-max items-center">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 px-4 text-sm font-semibold tracking-wide sm:text-base"
            >
              {item}
              <span className="size-1.5 rounded-full bg-white/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
