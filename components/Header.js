"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { doctor, nav } from "@/lib/profile";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open
          ? "border-line/80 bg-ivory/90 shadow-[0_12px_40px_-24px_rgba(11,61,54,0.45)]"
          : "border-transparent bg-sand/80"
      } backdrop-blur-xl`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.6rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <span className="relative block size-11 overflow-hidden rounded-full ring-2 ring-teal/30">
            <Image
              src="/images/portrait-head.jpg"
              alt=""
              fill
              sizes="44px"
              className="object-cover object-[center_18%]"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[1.05rem] tracking-tight text-forest">
              {doctor.shortName}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">
              Clinical oncology
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={doctor.mobileHref}
            className="hidden items-center gap-2 rounded-full border border-line bg-ivory px-3.5 py-2.5 text-sm font-semibold text-forest transition-colors hover:border-teal/40 md:inline-flex"
          >
            <Phone className="size-4 text-teal" aria-hidden />
            {doctor.mobile}
          </a>
          <a
            href="#visit"
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-teal sm:inline-flex"
          >
            Book a visit
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-forest lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-ivory lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-2xl px-3 py-3 text-base font-medium text-forest hover:bg-mint"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={doctor.mobileHref}
                onClick={close}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ivory px-4 py-3 text-sm font-semibold text-forest"
              >
                <Phone className="size-4 text-teal" aria-hidden />
                {doctor.mobile}
              </a>
              <a
                href="#visit"
                onClick={close}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-ivory"
              >
                Book a visit
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
